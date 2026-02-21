import { Mic, Loader2, Phone } from 'lucide-react';
import { useState, useRef } from 'react';

export default function VoiceAgentButton() {
  const [isVoiceActive, setIsVoiceActive] = useState(false);
  const [voiceStatus, setVoiceStatus] = useState("Speak Live with our AI Guide");
  const recognitionRef = useRef<any>(null);

  // ==========================================
  // 🎤 NATIVE AI RAITHA VOICE LOGIC
  // ==========================================
  const toggleVoiceAgent = () => {
    // If active, stop listening and speaking
    if (isVoiceActive) {
      if (recognitionRef.current) recognitionRef.current.stop();
      window.speechSynthesis.cancel();
      setIsVoiceActive(false);
      setVoiceStatus("Speak Live with our AI Guide");
      return;
    }

    // Initialize Browser Microphone (Web Speech API)
    const SpeechRecognition = window.SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Sorry, your browser does not support voice features. Try Chrome or Edge!");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-IN'; // Indian English for better accent recognition
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognitionRef.current = recognition;

    setIsVoiceActive(true);
    setVoiceStatus("Listening...");

    recognition.onresult = async (event: any) => {
      const userSpokenText = event.results[0][0].transcript;
      setVoiceStatus("Thinking...");
      
      try {
        // Absolute URL to your Cloudflare Worker
        const workerUrl = "https://dandinsfarm-voiceagent.santoshhdandin.workers.dev/";
        const response = await fetch(workerUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: userSpokenText })
        });
        
        const data = await response.json();
        
        // Handle 'response' or 'result' field from your Lyzr V3 API
        const aiText = data.response || data.result;

        if (aiText && aiText !== 0 && aiText !== "0") {
          setVoiceStatus("Speaking...");
          
          const utterance = new SpeechSynthesisUtterance(aiText);
          utterance.lang = 'en-IN';
          
          utterance.onend = () => {
             if (isVoiceActive) {
               setVoiceStatus("Listening...");
               recognition.start(); // Auto-restart mic for conversation
             }
          };
          window.speechSynthesis.speak(utterance);
        } else {
          setVoiceStatus("Listening...");
          recognition.start();
        }
      } catch (error) {
        console.error("Voice Error:", error);
        setIsVoiceActive(false);
        setVoiceStatus("Speak Live with our AI Guide");
      }
    };

    recognition.onerror = (event: any) => {
      if (event.error !== 'no-speech') {
        setIsVoiceActive(false);
        setVoiceStatus("Speak Live with our AI Guide");
      }
    };

    recognition.start();
  };

  return (
    <div className="fixed bottom-[100px] right-[24px] z-[9999] flex flex-col items-end">
      <button
        onClick={toggleVoiceAgent}
        className={`group relative flex items-center justify-center w-[60px] h-[60px] rounded-full transition-all duration-300 border-none ${
          isVoiceActive 
            ? "bg-red-500 hover:bg-red-600 shadow-[0_4px_15px_rgba(239,68,68,0.5)]" 
            : "bg-[#21c55e] hover:bg-[#16a34a] shadow-[0_4px_15px_rgba(33,197,94,0.3)]"
        }`}
      >
        <Mic 
          className={`text-white transition-transform duration-300 ${
            isVoiceActive ? "animate-pulse" : "group-hover:scale-110"
          }`} 
          size={28} 
          strokeWidth={2}
        />

        {/* Hover Tooltip */}
        <span 
          className="absolute right-[75px] px-3 py-2 bg-zinc-900 text-white text-sm font-medium rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-zinc-700 shadow-lg"
        >
          {voiceStatus}
        </span>
      </button>
    </div>
  );
}