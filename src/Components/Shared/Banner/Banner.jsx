import React from 'react';
import BannerLogo from '../../../assets/Banner.png'; 
const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
      {/* Main Container - */}
      <div className="bg-[#1313130D] flex flex-col-reverse md:flex-row items-center justify-between p-12 md:p-10 rounded-xl">
        
        
        <div className="w-full md:w-1/2 space-y-8 text-center md:text-left">
         
          <h1 className="text-4xl md:text-6xl font-black text-base-content tracking-tight leading-tight">
            Books to freshen up 
            your bookshelf
          </h1>

          
          <button className="btn bg-[#23BE0A] hover:bg-[#1fa308] text-white px-6 py-6 rounded-2xl border-none font-bold text-lg shadow-md shadow-primary/10 transition-all hover:scale-105">
            View The List
          </button>
        </div>

        {/* --- Image (Right side on desktop, Center on mobile) --- */}
<div className="w-full md:w-1/2 flex justify-center md:justify-end mb-10 md:mb-0">
  <img 
    src={BannerLogo} 
    alt="Book: THE DATING PLAYBOOK FOR MEN" 
    className="w-full max-w-sm"
  />
</div>
      </div>
    </div>
  );
};

export default Banner;