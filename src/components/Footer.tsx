import React from 'react';
import { PartyPopper as Party, Instagram, Twitter, Facebook } from 'lucide-react';
import { Link } from './ui/Link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <Party className="h-6 w-6 text-green-400 mr-2" />
              <span className="text-white font-bold text-xl">PartyPrep</span>
            </div>
            <p className="text-gray-400 max-w-xs mb-4">
              Making your parties memorable with fun games and delicious drinks.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Tiktok className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Games</h3>
              <ul className="space-y-2">
                <li><Link href="#">Party Games</Link></li>
                <li><Link href="#">Drinking Games</Link></li>
                <li><Link href="#">Card Games</Link></li>
                <li><Link href="#">Group Games</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Drinks</h3>
              <ul className="space-y-2">
                <li><Link href="#">Cocktails</Link></li>
                <li><Link href="#">Mocktails</Link></li>
                <li><Link href="#">Shot Recipes</Link></li>
                <li><Link href="#">Homemades</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="#">About</Link></li>
                <li><Link href="#">Contact</Link></li>
                <li><Link href="#">Privacy</Link></li>
                <li><Link href="#">Terms</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} PartyPrep. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;