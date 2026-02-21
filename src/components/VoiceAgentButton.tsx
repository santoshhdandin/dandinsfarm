import { Mic, Loader2 } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

declare global {
  interface Window {
    LyzrVoice: any;
  }
}

export default function VoiceAgentButton() {
  const [isVoiceActive, setIsVoiceActive] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const voiceAgentRef = useRef<any>(null);

  useEffect(() => {
    if (!document.getElementById('lyzr-voice-sdk')) {
      const script = document.createElement('script');
      script.id = 'lyzr-voice-sdk';
      script.src = 'https://unpkg.com/@lyzr/voice-sdk@latest/dist/index.js';
      script.async = true;
      document.body.appendChild(script);
    }
    
    return () => {
      if (voiceAgentRef.current) {
        voiceAgentRef.current.stop();
      }
    };
  }, []);

  const toggleVoiceAgent = async () => {
    if (isVoiceActive) {
      if (voiceAgentRef.current) {
        voiceAgentRef.current.stop();
      }
      setIsVoiceActive(false);
      return;
    }

    setIsConnecting(true);
    
    try {
      // ⚠️ REPLACE with your actual Cloudflare Worker URL
      const workerUrl = "https://dandinsfarm-voiceagent.santoshhdandin.workers.dev"; 
      
      const response = await fetch(workerUrl, { method: "POST" });
      const data = await response.json();

      if (data.token && window.LyzrVoice) {
        const voiceAgent = new window.LyzrVoice({ token: data.token });
        await voiceAgent.start();
        
        voiceAgentRef.current = voiceAgent;
        setIsVoiceActive(true);
      } else {
        alert("Could not connect. Please call us at +91 96112 13993.");
      }
    } catch (error) {
      console.error("Connection failed:", error);
      alert("Could not connect. Please call us at +91 96112 13993.");
    } finally {
      setIsConnecting(false);
    }
  };

  return (
    <div className="fixed bottom-[100px] right-[24px] z-[9999] flex flex-col items-end">
      <button
        onClick={toggleVoiceAgent}
        disabled={isConnecting}
        // Matched the 60px size and vibrant green background to mimic the chat widget
        className={`group relative flex items-center justify-center w-[60px] h-[60px] rounded-full transition-all duration-300 border-none ${
          isVoiceActive 
            ? "bg-red-500 hover:bg-red-600 shadow-[0_4px_15px_rgba(239,68,68,0.5)]" 
            : "bg-[#21c55e] hover:bg-[#16a34a] shadow-[0_4px_15px_rgba(33,197,94,0.3)]"
        }`}
      >
        {isConnecting ? (
          <Loader2 className="text-white animate-spin" size={28} />
        ) : (
          <Mic 
            className={`text-white transition-transform duration-300 ${
              isVoiceActive ? "animate-pulse" : "group-hover:scale-110"
            }`} 
            size={28} 
            strokeWidth={2}
          />
        )}

        {/* Hover Tooltip (Pops out to the left) */}
        <span 
          className="absolute right-[75px] px-3 py-2 bg-zinc-900 text-white text-sm font-medium rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-zinc-700 shadow-lg"
        >
          {isConnecting ? "Connecting..." : isVoiceActive ? "End Call" : "Speak Live with our AI Guide"}
        </span>
      </button>
    </div>
  );
}