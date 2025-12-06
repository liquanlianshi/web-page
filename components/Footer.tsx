import React from 'react';
import { NavLink } from 'react-router-dom';
import { Instagram, Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-serif text-2xl font-bold text-white mb-6 tracking-widest">AETHERIA</h2>
            <p className="text-gray-400 max-w-sm leading-relaxed">
              We are a digital design agency dedicated to crafting exquisite online experiences. 
              Bridging the gap between art and technology.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-6 tracking-wide">Explore</h3>
            <ul className="space-y-4">
              <li><NavLink to="/" className="text-gray-400 hover:text-primary transition-colors">Home</NavLink></li>
              <li><NavLink to="/portfolio" className="text-gray-400 hover:text-primary transition-colors">Portfolio</NavLink></li>
              <li><NavLink to="/services" className="text-gray-400 hover:text-primary transition-colors">Services</NavLink></li>
              <li><NavLink to="/contact" className="text-gray-400 hover:text-primary transition-colors">Contact</NavLink></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-6 tracking-wide">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-black transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-black transition-all duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-black transition-all duration-300">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-black transition-all duration-300">
                <Github size={18} />
              </a>
            </div>
            <p className="mt-6 text-gray-500 text-sm">2899272171@qq.com</p>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Aetheria Design. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;