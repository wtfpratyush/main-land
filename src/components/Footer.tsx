export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-32">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span className="text-xs font-bold tracking-widest uppercase text-white/50">Pages</span>
            </div>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-white/70 flex justify-between items-center">Home <span className="text-white/30">›</span></a></li>
              <li><a href="#" className="hover:text-white/70 flex justify-between items-center">About us <span className="text-white/30">›</span></a></li>
              <li><a href="#" className="hover:text-white/70 flex justify-between items-center">Services <span className="text-white/30">›</span></a></li>
              <li><a href="#" className="hover:text-white/70 flex justify-between items-center">Blogs <span className="text-white/30">›</span></a></li>
              <li><a href="#" className="hover:text-white/70 flex justify-between items-center">Career <span className="text-white/30">›</span></a></li>
              <li><a href="#" className="hover:text-white/70 flex justify-between items-center">Reviews <span className="text-white/30">›</span></a></li>
              <li><a href="#" className="hover:text-white/70 flex justify-between items-center">Contact <span className="text-white/30">›</span></a></li>
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span className="text-xs font-bold tracking-widest uppercase text-white/50">Jurisdictions</span>
            </div>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-white/70 flex justify-between items-center">Dubai Mainland <span className="text-white/30">›</span></a></li>
              <li><a href="#" className="hover:text-white/70 flex justify-between items-center">Dubai Freezone <span className="text-white/30">›</span></a></li>
              <li><a href="#" className="hover:text-white/70 flex justify-between items-center">Abu Dhabi <span className="text-white/30">›</span></a></li>
              <li><a href="#" className="hover:text-white/70 flex justify-between items-center">Sharjah <span className="text-white/30">›</span></a></li>
              <li><a href="#" className="hover:text-white/70 flex justify-between items-center">UAE Offshore <span className="text-white/30">›</span></a></li>
              <li><a href="#" className="hover:text-white/70 flex justify-between items-center">Individual Freezones <span className="text-white/30">›</span></a></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span className="text-xs font-bold tracking-widest uppercase text-white/50">Get Fresh Updates</span>
            </div>
            <div className="flex bg-white/10 rounded-full p-1 max-w-md">
              <input type="email" placeholder="jane@thrive.com" className="bg-transparent px-4 py-2 w-full focus:outline-none text-sm" />
              <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-bold hover:bg-white/90">SUBSCRIBE</button>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-[15vw] font-bold tracking-tighter leading-none select-none">Thrive.</h1>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs text-white/50 gap-4">
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">PRIVACY POLICY</a>
            <a href="#" className="hover:text-white">TERMS</a>
          </div>
          <div>
            © 2026 THRIVE BUSINESS SETUP. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
}
