import React, { useState } from 'react';
import { Menu, X, Users, GamepadIcon, MessageSquare, Shield, Globe, ChevronDown, ChevronUp, Info, Sparkles } from 'lucide-react';
import TeamMember from './components/TeamMember';
import DiscordBanner from './components/DiscordBanner';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isImpressumOpen, setIsImpressumOpen] = useState(false);

  const features = [
    { icon: <MessageSquare className="w-6 h-6" />, text: 'Angenehme Unterhaltung' },
    { icon: <Shield className="w-6 h-6" />, text: 'Kompetente Administration' },
    { icon: <GamepadIcon className="w-6 h-6" />, text: 'Community Server' },
    { icon: <Users className="w-6 h-6" />, text: 'Verschiedene Altersklassen' },
    { icon: <Globe className="w-6 h-6" />, text: 'Jeder ist willkommen' },
  ];

  const teamMembers = [
    { name: 'Alex', role: 'Admin' },
    { name: 'Sarah', role: 'Moderator' },
    { name: 'Mike', role: 'Community Manager' },
    { name: 'Lisa', role: 'Support' },
  ];

  const currentYear = new Date().getFullYear();

  const navItems = [
    { href: '#about', text: 'Über uns', icon: <Info className="w-5 h-5" /> },
    { href: '#features', text: 'Features', icon: <Sparkles className="w-5 h-5" /> },
    { href: '#team', text: 'Team', icon: <Users className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-[#3F3F5B] text-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-[#2E2E44] shadow-lg">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <GamepadIcon className="w-8 h-8 text-purple-400" />
              <span className="text-xl font-bold">Button Crew</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item, index) => (
                <a 
                  key={index}
                  href={item.href} 
                  className="flex items-center space-x-2 hover:text-purple-400 transition-colors group"
                >
                  <span className="text-purple-400 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </span>
                  <span>{item.text}</span>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 space-y-4">
              {navItems.map((item, index) => (
                <a 
                  key={index}
                  href={item.href} 
                  className="flex items-center space-x-2 hover:text-purple-400 transition-colors group"
                >
                  <span className="text-purple-400 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </span>
                  <span>{item.text}</span>
                </a>
              ))}
            </div>
          )}
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-16 flex-grow">
        {/* Discord Banner */}
        <DiscordBanner />

        {/* About Section */}
        <section id="about" className="space-y-6">
          <h2 className="text-3xl font-bold text-center mb-8">Über uns</h2>
          <p className="text-lg text-center max-w-3xl mx-auto leading-relaxed">
            Wir sind die 'Button Crew', eine wachsende Community in Spielen wie Ark, DayZ, Valorant, Apex Legends und mehr.
            Spiel in einem freundlichen Umfeld und tritt unserem Discord bei – für alle, die sich an die Regeln halten.
          </p>
        </section>

        {/* Features Section */}
        <section id="features" className="space-y-8">
          <h2 className="text-3xl font-bold text-center">Was wir bieten</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center space-x-4 bg-[#2E2E44] p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition-transform"
              >
                <div className="text-purple-400">{feature.icon}</div>
                <span>{feature.text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="space-y-8">
          <h2 className="text-3xl font-bold text-center">Unser Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember 
                key={index}
                name={member.name}
                role={member.role}
              />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#2E2E44] mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            {/* Collapsible Impressum */}
            <button
              onClick={() => setIsImpressumOpen(!isImpressumOpen)}
              className="flex items-center justify-center space-x-2 mx-auto mb-4 hover:text-purple-400 transition-colors"
            >
              <h3 className="text-xl font-semibold">Impressum</h3>
              {isImpressumOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
            
            {/* Impressum Content */}
            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isImpressumOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
              <p className="text-gray-300 mb-2">Button Crew - Gaming Community</p>
              <p className="text-gray-300 mb-4">Diese Website wird von der Button Crew Community betrieben.</p>
              <p className="text-sm text-gray-400 mb-6">
                Dies ist eine nicht-kommerzielle Gaming-Community. Alle verwendeten Marken, Handelsnamen und Firmennamen 
                sind Eigentum ihrer jeweiligen Inhaber und werden hier nur zu Informationszwecken verwendet.
              </p>
            </div>

            {/* Copyright */}
            <div className="text-sm text-gray-400 pt-4 border-t border-gray-700">
              © {currentYear} Button Crew. Alle Rechte vorbehalten.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;