import { Mic } from 'lucide-react';
import { useState, useRef } from 'react';

export default function VoiceAgentButton() {
  const [isVoiceActive, setIsVoiceActive] = useState(false);
  const [voiceStatus, setVoiceStatus] = useState("Speak Live with our AI Guide");
  
  const recognitionRef = useRef<any>(null);
  const utteranceRef = useRef<any>(null); // Prevents garbage collection bug
  
  // Refs ensure callbacks always read the absolute latest state
  const isActiveRef = useRef<boolean>(false);
  const isSpeakingRef = useRef<boolean>(false);

  const toggleVoiceAgent = async () => {
    // 1. HANDLE DISCONNECT
    if (isActiveRef.current) {
      isActiveRef.current = false;
      setIsVoiceActive(false);
      isSpeakingRef.current = false;
      
      if (recognitionRef.current) recognitionRef.current.stop();
      window.speechSynthesis.cancel();
      setVoiceStatus("Speak Live with our AI Guide");
      return;
    }

    // 2. INITIALIZE SPEECH RECOGNITION
    const SpeechRecognition = window.SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Browser not supported. Please use Chrome or Edge!");
      return;
    }

    isActiveRef.current = true;
    setIsVoiceActive(true);
    isSpeakingRef.current = true; // Lock mic immediately for the greeting
    setVoiceStatus("Connecting...");

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-IN';
    recognition.continuous = false; 
    recognition.interimResults = false;
    recognitionRef.current = recognition;

    // 3. SET UP RECOGNITION HANDLERS
    recognition.onresult = async (event: any) => {
      const userSpokenText = event.results[0][0].transcript;
      if (!userSpokenText.trim()) return;
      
      setVoiceStatus("Thinking...");
      isSpeakingRef.current = true; // Lock mic while processing
      recognition.stop(); // Explicitly pause listening
      
      await processAndSpeak(userSpokenText);
    };

    recognition.onend = () => {
      // ONLY restart if the call is still active AND the AI is not speaking
      if (isActiveRef.current && !isSpeakingRef.current) {
        try { recognition.start(); } catch(e) {}
      }
    };

    // 4. HELPER FUNCTION TO FETCH AND SPEAK
    const processAndSpeak = async (textToSend: string) => {
      try {
        const workerUrl = "https://dandinsfarm-voiceagent.santoshhdandin.workers.dev/";
        const response = await fetch(workerUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: textToSend })
        });
        
        const data = await response.json();
        const aiText = data.response || data.result;

        if (aiText && aiText !== 0 && aiText !== "0") {
          setVoiceStatus("Speaking...");
          
          const utterance = new SpeechSynthesisUtterance(aiText);
          utteranceRef.current = utterance; // Keep in memory so onend fires reliably
          utterance.lang = 'en-IN';
          utterance.rate = 1.1; 

          const unlockMic = () => {
            if (isActiveRef.current) {
              isSpeakingRef.current = false; 
              setVoiceStatus("Listening...");
              try { recognition.start(); } catch(e) {}
            }
          };

          utterance.onend = unlockMic;
          utterance.onerror = unlockMic; // Unlock mic even if TTS fails

          window.speechSynthesis.speak(utterance);
        } else {
          // If no text returned, unlock and listen again
          if (isActiveRef.current) {
             isSpeakingRef.current = false;
             setVoiceStatus("Listening...");
             try { recognition.start(); } catch(e) {}
          }
        }
      } catch (error) {
        console.error("Voice Error:", error);
        if (isActiveRef.current) {
          setVoiceStatus("Connection Error");
          setTimeout(() => {
            if (isActiveRef.current) {
              isSpeakingRef.current = false;
              setVoiceStatus("Listening...");
              try { recognition.start(); } catch(e) {}
            }
          }, 2000);
        }
      }
    };

    // 5. START THE CALL & TRIGGER AI GREETING
    // Hidden prompt to force the AI to speak first
    await processAndSpeak("Hello! I just connected to the voice call. Please introduce yourself briefly.");
  };

  return (
    <div className="fixed bottom-[100px] right-[24px] z-[9999] flex flex-col items-end">
      <button
        onClick={toggleVoiceAgent}
        className={`group relative flex items-center justify-center w-[60px] h-[60px] rounded-full transition-all duration-300 border-none ${
          isVoiceActive 
            ? "bg-red-500 hover:bg-red-600 shadow-lg" 
            : "bg-[#21c55e] hover:bg-[#16a34a] shadow-lg"
        }`}
      >
        <Mic 
          className={`text-white transition-transform duration-300 ${
            isVoiceActive ? "animate-pulse" : "group-hover:scale-110"
          }`} 
          size={28} 
          strokeWidth={2}
        />
        <span className="absolute right-[75px] px-3 py-2 bg-zinc-900 text-white text-sm font-medium rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-zinc-700 shadow-lg">
          {voiceStatus}
        </span>
      </button>
    </div>
  );
}