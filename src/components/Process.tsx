export default function Process() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto border-t border-black/10">
      <div className="flex items-center gap-4 mb-12">
        <div className="w-2 h-2 bg-black rounded-full"></div>
        <span className="text-xs font-bold tracking-widest uppercase">Setup Process</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight lg:max-w-md">
          We make the setup process simple, friendly, and easy to follow — just how it should be.
        </h2>

        <div className="relative">
          <div className="aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden mb-12 lg:mb-0 lg:absolute lg:w-[120%] lg:-left-[20%] lg:top-0 z-0 opacity-50 lg:opacity-100 blur-sm lg:blur-none">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" 
              alt="Data Chart" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="relative z-10 lg:pl-24 lg:pt-12">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold shrink-0">1</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Initial Consultation</h3>
                  <p className="text-gray-600 text-sm">We start by evaluating your business needs — using local insights, real data, and professional analysis.</p>
                  <p className="text-sm italic text-gray-500 mt-2 border-l-2 border-gray-300 pl-3">"Know exactly which jurisdiction is right for you before you start."</p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold shrink-0">2</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Documentation & Approvals</h3>
                  <p className="text-gray-600 text-sm">We handle all the paperwork, translations, and initial government approvals.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold shrink-0">3</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">License Issuance</h3>
                  <p className="text-gray-600 text-sm">Your trade license is issued, officially establishing your company in the UAE.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold shrink-0">4</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Visas & Bank Account</h3>
                  <p className="text-gray-600 text-sm">We assist with residency visas for you and your team, and help open a corporate bank account.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
