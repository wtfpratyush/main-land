import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f5f5f0]/90 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-black rounded-sm"></div>
          <span className="font-bold text-xl tracking-tight">THRIVE</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#" className="hover:opacity-60 transition-opacity">ABOUT</a>
          <a href="#" className="hover:opacity-60 transition-opacity">JURISDICTIONS</a>
          <a href="#" className="hover:opacity-60 transition-opacity">SERVICES</a>
          <a href="#" className="hover:opacity-60 transition-opacity">REVIEWS</a>
          <a href="#" className="hover:opacity-60 transition-opacity">CONTACT</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden md:block bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-black/80 transition-colors">
            GET A QUOTE
          </button>
          <button className="md:hidden">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}
