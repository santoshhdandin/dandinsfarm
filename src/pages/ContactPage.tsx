import { Mail, Phone, MapPin, MessageCircle, Send } from 'lucide-react';
import { useState } from 'react';
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

  emailjs
    .send(
      "service_f1okphi",
      "template_9gckmio",
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      },
      "PcjxpaGeoPUUlmdkB"
    )
    .then(
      () => {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "general",
          message: "",
        });
      },
      (error) => {
        console.error(error);
        alert("Failed to send message");
      }
    );
};


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen px-4 py-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
          Contact Us
        </h1>
        <p className="text-xl text-zinc-400 mb-12">
          Get in touch for inquiries about our organic produce
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800">
            <div className="bg-green-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Phone className="text-green-400" size={24} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Phone</h3>
            <p className="text-zinc-400">+91 96112 13993</p>
            <p className="text-zinc-500 text-sm mt-2">Mon-Sat, 8 AM - 5 PM</p>
          </div>

          <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800">
            <div className="bg-green-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Mail className="text-green-400" size={24} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Email</h3>
            <p className="text-zinc-400">dandinhm@gmail.com</p>
			<p className="text-zinc-400">santoshhdandin@gmail.com</p>
            <p className="text-zinc-500 text-sm mt-2">We'll respond within 24 hours</p>
          </div>

          <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800">
            <div className="bg-green-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <MapPin className="text-green-400" size={24} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Location</h3>
            <p className="text-zinc-400">Haveri, Karnataka, India</p>
            <p className="text-zinc-500 text-sm mt-2">Farm visits by appointment</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:border-green-600 transition-colors"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:border-green-600 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-zinc-400 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:border-green-600 transition-colors"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-zinc-400 mb-2">
                  Inquiry Type *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-green-600 transition-colors"
                >
                  <option value="general">General Inquiry</option>
                  <option value="bulk">Bulk Order</option>
                  <option value="samples">Request Samples</option>
                  <option value="visit">Farm Visit</option>
                  <option value="collaboration">Collaboration</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:border-green-600 transition-colors resize-none"
                  placeholder="Tell us about your inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors font-medium flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          <div className="space-y-6">

            <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-2xl p-8 border border-green-800/50">
              <h3 className="text-lg font-bold text-white mb-3">Farm Visits</h3>
              <p className="text-zinc-300 text-sm leading-relaxed">
                Interested in seeing how we grow organic produce? Schedule a farm visit to
                experience sustainable agriculture firsthand. Perfect for students, aspiring
                farmers, and anyone curious about organic farming!
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-2xl p-8 border border-green-800/50">
              <h3 className="text-xl font-bold text-white mb-4">
                Bulk Orders & Samples
              </h3>
              <p className="text-zinc-300 leading-relaxed mb-4">
                We welcome bulk orders for our organic produce. Whether you're a retailer, restaurant,
                or looking to purchase in quantity, we can provide:
              </p>
              <ul className="space-y-2 text-zinc-400 text-sm">
                <li>✓ Competitive wholesale pricing</li>
                <li>✓ Fresh harvest guarantee</li>
                <li>✓ Flexible delivery options</li>
                <li>✓ Sample boxes available</li>
              </ul>
            </div>

			
            <div className="bg-zinc-900/50 rounded-2xl p-8 border border-zinc-800">
              <div className="bg-green-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <MessageCircle className="text-green-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                AI Chat Agent Coming Soon!
              </h3>
              <p className="text-zinc-300 leading-relaxed mb-4">
                We're working on an intelligent chat assistant that will help you:
              </p>
              <ul className="space-y-2 text-zinc-400">
                <li className="flex items-start space-x-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Get instant answers about our crops and farming practices</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Check availability and pricing for bulk orders</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Schedule farm visits and consultations</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Learn about organic farming techniques</span>
                </li>
              </ul>
            </div>
			
          </div>
        </div>
      </div>
    </div>
  );
}
