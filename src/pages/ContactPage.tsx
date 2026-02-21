import { Mail, Phone, MapPin, MessageCircle, Send, Mic } from 'lucide-react';
import { useState, useRef } from 'react';
import emailjs from "emailjs-com";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs.send("service_f1okphi", "template_9gckmio", {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
    }, "PcjxpaGeoPUUlmdkB")
    .then(() => {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", subject: "general", message: "" });
    }, (error) => {
      console.error(error);
      alert("Failed to send message");
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [chatMessages, setChatMessages] = useState<{sender: 'user' | 'agent', text: string}[]>([]);
  const [chatInput, setChatInput] = useState("");
  const CHAT_BACKEND = "https://plain-tree-e3d0.santoshhdandin.workers.dev/";

  const sendChatMessage = async () => {
    if (!chatInput.trim()) return;
    setChatMessages(prev => [...prev, { sender: 'user', text: chatInput }]);
    const messageToSend = chatInput;
    setChatInput("");
    try {
      const res = await fetch(CHAT_BACKEND, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: messageToSend })
      });
      const data = await res.json();
      setChatMessages(prev => [...prev, { sender: 'agent', text: data.reply || "No reply" }]);
    } catch (err) {
      setChatMessages(prev => [...prev, { sender: 'agent', text: "Error contacting server" }]);
    }
  };

  // ==========================================
  // 🎤 NATIVE AI RAITHA VOICE LOGIC
  // ==========================================
  const [isVoiceActive, setIsVoiceActive] = useState(false);
  const [voiceStatus, setVoiceStatus] = useState("Speak Live with AI Raitha");
  const recognitionRef = useRef<any>(null);

  const toggleVoiceAgent = () => {
    if (isVoiceActive) {
      if (recognitionRef.current) recognitionRef.current.stop();
      window.speechSynthesis.cancel();
      setIsVoiceActive(false);
      setVoiceStatus("Speak Live with AI Raitha");
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Sorry, your browser does not support voice features. Try Chrome or Edge!");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-IN'; 
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognitionRef.current = recognition;

    setIsVoiceActive(true);
    setVoiceStatus("Listening... (Speak now)");

    recognition.onresult = async (event: any) => {
      const userSpokenText = event.results[0][0].transcript;
      setVoiceStatus("Thinking...");
      
      try {
        const workerUrl = "https://dandinsfarm-voiceagent.santoshhdandin.workers.dev/";
        const response = await fetch(workerUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: userSpokenText })
        });
        
        const data = await response.json();
        const aiText = data.result || data.response;

        if (aiText && aiText !== 0 && aiText !== "0") {
          setVoiceStatus("Speaking...");
          const utterance = new SpeechSynthesisUtterance(aiText);
          utterance.lang = 'en-IN';
          utterance.onend = () => {
             if (isVoiceActive) {
               setVoiceStatus("Listening... (Speak now)");
               recognition.start();
             }
          };
          window.speechSynthesis.speak(utterance);
        } else {
          setVoiceStatus("Listening... (Speak now)");
          recognition.start();
        }
      } catch (error) {
        console.error("Voice Error:", error);
        setVoiceStatus("Connection Error");
        setIsVoiceActive(false);
      }
    };

    recognition.onerror = (event: any) => {
      if (event.error !== 'no-speech') {
        setIsVoiceActive(false);
        setVoiceStatus("Speak Live with AI Raitha");
      }
    };

    recognition.start();
  };

  const cardStyle = "bg-gradient-to-br from-green-900/40 to-emerald-900/10 rounded-2xl p-8 border border-green-500/30 shadow-[0_0_20px_rgba(76,175,80,0.15)] relative overflow-hidden";

  return (
    <div className="min-h-screen px-4 py-24">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-16 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">Contact Us</h1>
          <p className="text-xl text-zinc-400">Get in touch for inquiries about our organic produce</p>
        </div>

        {/* TOP CONTACT INFO */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[ 
            { icon: <Phone size={24}/>, label: "Phone", val: "+91 96112 13993", sub: "Mon-Sat, 8 AM - 5 PM" },
            { icon: <Mail size={24}/>, label: "Email", val: "dandinhm@gmail.com", sub: "Response within 24 hours" },
            { icon: <MapPin size={24}/>, label: "Location", val: "Haveri, Karnataka, India", sub: "Visits by appointment" }
          ].map((item, idx) => (
            <div key={idx} className={cardStyle}>
              <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/10 rounded-full blur-2xl pointer-events-none"></div>
              <div className="relative z-10">
                <div className="bg-green-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-green-400">{item.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{item.label}</h3>
                <p className="text-zinc-200">{item.val}</p>
                <p className="text-zinc-400 text-sm mt-1">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className={`${cardStyle} flex flex-col h-full`}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="flex items-center space-x-4 mb-8 relative z-10">
              <div className="bg-green-900/30 w-12 h-12 rounded-lg flex items-center justify-center text-green-400"><Send size={24}/></div>
              <h2 className="text-3xl font-bold text-white">Send Us a Message</h2>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5 relative z-10 flex flex-col flex-grow">
              {['name', 'email', 'phone'].map((f) => (
                <div key={f}>
                  <label className="block text-sm font-medium text-zinc-300 mb-2 capitalize">{f} *</label>
                  <input type={f === 'email' ? 'email' : 'text'} name={f} required={f !== 'phone'} value={(formData as any)[f]} onChange={handleChange} className="w-full px-4 py-3 bg-zinc-950/50 border border-green-800/30 rounded-lg text-white focus:border-green-400 outline-none" placeholder={`Enter your ${f}`} />
                </div>
              ))}
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">Inquiry Type *</label>
                <select name="subject" required value={formData.subject} onChange={handleChange} className="w-full px-4 py-3 bg-zinc-950/50 border border-green-800/30 rounded-lg text-white focus:border-green-400 outline-none">
                  <option value="general">General Inquiry</option>
                  <option value="bulk">Bulk Order</option>
                  <option value="samples">Request Samples</option>
                  <option value="visit">Farm Visit</option>
                  <option value="collaboration">Collaboration</option>
                </select>
              </div>
              <div className="flex-grow flex flex-col">
                <label className="block text-sm font-medium text-zinc-300 mb-2">Message *</label>
                <textarea name="message" required value={formData.message} onChange={handleChange} className="w-full flex-grow min-h-[120px] px-4 py-3 bg-zinc-950/50 border border-green-800/30 rounded-lg text-white focus:border-green-400 outline-none resize-none" placeholder="How can we help?"/>
              </div>
              <button type="submit" className="w-full bg-[#21c55e] hover:bg-[#16a34a] text-white py-4 rounded-xl font-bold transition-all shadow-[0_4px_15px_rgba(33,197,94,0.3)] mt-2">Send Message</button>
            </form>
          </div>

          <div className="space-y-8 flex flex-col">
            <div className={`${cardStyle} text-center`}>
              <div className="bg-zinc-900/80 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/50 shadow-lg text-green-400"><Mic size={36}/></div>
              <h3 className="text-3xl font-bold text-white mb-4">Speak with AI Raitha</h3>
              <p className="text-zinc-200 text-base mb-8 max-w-md mx-auto">Get instant answers about our organic produce via live voice call.</p>
              <button onClick={toggleVoiceAgent} className={`w-full py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center space-x-3 ${isVoiceActive ? "bg-red-500/20 text-red-400 border border-red-500/50" : "bg-[#21c55e] hover:bg-[#16a34a] text-white shadow-lg"}`}>
                {isVoiceActive ? <><span className="animate-pulse h-3 w-3 bg-red-500 rounded-full"/><span>End Call</span></> : <><Mic size={24}/><span>{voiceStatus}</span></>}
              </button>
            </div>

            <div className={`${cardStyle} flex-grow flex flex-col`}>
              <div className="flex items-center space-x-4 mb-6 relative z-10">
                <div className="bg-green-900/30 w-12 h-12 rounded-lg flex items-center justify-center text-green-400"><MessageCircle size={24}/></div>
                <div><h3 className="text-2xl font-bold text-white">AI Chat Agent</h3><p className="text-zinc-300 text-sm">Prefer typing? Chat with us instantly.</p></div>
              </div>
              <div className="flex-grow flex flex-col space-y-4 relative z-10">
                <div className="flex-grow overflow-y-auto min-h-[220px] p-4 bg-zinc-950/60 border border-green-800/30 rounded-xl flex flex-col space-y-3">
                  {chatMessages.map((msg, i) => (
                    <div key={i} className={`px-4 py-2 rounded-xl text-sm max-w-[85%] leading-relaxed ${msg.sender === "user" ? "bg-[#21c55e] text-white self-end rounded-br-none" : "bg-zinc-800 border border-zinc-700 text-zinc-200 self-start rounded-bl-none"}`}>{msg.text}</div>
                  ))}
                </div>
                <div className="flex space-x-2">
                  <input type="text" className="flex-1 px-4 py-3 bg-zinc-950/60 border border-green-800/50 rounded-xl text-white outline-none focus:border-green-400" placeholder="Ask AI Raitha..." value={chatInput} onChange={(e) => setChatInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && sendChatMessage()}/>
                  <button onClick={sendChatMessage} className="bg-[#21c55e] px-6 py-2 rounded-xl text-white font-medium shadow-lg">Send</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className={`${cardStyle} lg:flex lg:items-center lg:space-x-12`}>
            <div className="relative z-10 lg:w-1/3 mb-6 lg:mb-0">
              <div className="border border-green-500/40 bg-green-950/20 rounded-xl p-6 shadow-inner">
                <h3 className="text-2xl font-bold text-white mb-2">Farm Visits</h3>
                <p className="text-zinc-400 text-sm">Experience sustainable agriculture firsthand.</p>
              </div>
            </div>
            <div className="relative z-10 lg:w-2/3">
              <p className="text-zinc-200 text-base leading-relaxed">Schedule a farm visit to experience our 100% organic ecosystem. Perfect for students and aspiring farmers. Strictly by appointment only.</p>
            </div>
          </div>

          <div className={`${cardStyle} lg:flex lg:items-center lg:space-x-12`}>
            <div className="relative z-10 lg:w-1/2 mb-6 lg:mb-0 flex flex-col space-y-6">
              <div className="border border-green-500/40 bg-green-950/20 rounded-xl p-6 shadow-inner inline-block">
                <h3 className="text-2xl font-bold text-white mb-2">Bulk Orders & Samples</h3>
                <p className="text-zinc-400 text-sm">We welcome bulk orders for our organic produce.</p>
              </div>
              <p className="text-zinc-200 text-base leading-relaxed">Whether you are a retailer or restaurant, we are equipped to meet your needs with quality from soil to sale.</p>
            </div>
            <div className="relative z-10 lg:w-1/2">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-zinc-200 text-sm">
                <li className="flex items-center bg-zinc-950/50 p-4 rounded-xl border border-green-800/30"><span className="text-green-400 mr-3 text-lg">✓</span> Competitive wholesale pricing</li>
                <li className="flex items-center bg-zinc-950/50 p-4 rounded-xl border border-green-800/30"><span className="text-green-400 mr-3 text-lg">✓</span> Fresh harvest guarantee</li>
                <li className="flex items-center bg-zinc-950/50 p-4 rounded-xl border border-green-800/30"><span className="text-green-400 mr-3 text-lg">✓</span> Flexible delivery options</li>
                <li className="flex items-center bg-zinc-950/50 p-4 rounded-xl border border-green-800/30"><span className="text-green-400 mr-3 text-lg">✓</span> Sample boxes available</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}