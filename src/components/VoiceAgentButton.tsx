import { Mic } from 'lucide-react';
import { useState, useRef } from 'react';

export default function VoiceAgentButton() {
  const [isVoiceActive, setIsVoiceActive] = useState(false);
  const [voiceStatus, setVoiceStatus] = useState("Speak Live with our AI Guide");
  
  const recognitionRef = useRef<any>(null);
  // NEW: Tracks if the AI is currently talking so the mic knows to stay muted
  const isSpeakingRef = useRef<boolean>(false);

  const toggleVoiceAgent = async () => {
    // 1. HANDLE DISCONNECT
    if (isVoiceActive) {
      if (recognitionRef.current) recognitionRef.current.stop();
      window.speechSynthesis.cancel();
      setIsVoiceActive(false);
      setVoiceStatus("Speak Live with our AI Guide");
      isSpeakingRef.current = false;
      return;
    }

    // 2. INITIALIZE SPEECH RECOGNITION
    const SpeechRecognition = window.SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Browser not supported. Please use Chrome or Edge!");
      return;
    }

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
      await fetchAndSpeak(userSpokenText);
    };

    recognition.onend = () => {
      // Auto-restart listening ONLY if the AI isn't speaking
      if (isVoiceActive && !isSpeakingRef.current) {
        try { recognition.start(); } catch(e) {}
      }
    };

    // 4. HELPER FUNCTION TO FETCH AND SPEAK
    const fetchAndSpeak = async (textToSend: string) => {
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
          isSpeakingRef.current = true; // Lock the mic
          
          const utterance = new SpeechSynthesisUtterance(aiText);
          utterance.lang = 'en-IN';
          utterance.rate = 1.1; 

          utterance.onend = () => {
            isSpeakingRef.current = false; // Unlock the mic
            if (isVoiceActive) {
              setVoiceStatus("Listening...");
              try { recognition.start(); } catch(e) {}
            }
          };

          window.speechSynthesis.speak(utterance);
        } else {
          setVoiceStatus("Listening...");
          try { recognition.start(); } catch(e) {}
        }
      } catch (error) {
        console.error("Voice Error:", error);
        setVoiceStatus("Connection Error");
        setTimeout(() => {
          if (isVoiceActive) {
            setVoiceStatus("Listening...");
            isSpeakingRef.current = false;
            try { recognition.start(); } catch(e) {}
          }
        }, 2000);
      }
    };

    // 5. START THE CALL & TRIGGER AI GREETING
    setIsVoiceActive(true);
    isSpeakingRef.current = true; // Lock mic while fetching greeting
    setVoiceStatus("Connecting...");
    
    // Hidden prompt to force the AI to speak first
    await fetchAndSpeak("Hello! I just connected to the voice call. Please introduce yourself briefly.");
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