import React from "react";
import { Link } from "react-router"; 

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 p-6">
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px]"></div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-secondary/10 blur-[120px]"></div>
      </div>

      {/* Main Card */}
      <div className="relative z-10 text-center max-w-lg w-full p-8 md:p-12 bg-base-100 shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-[2.5rem] border border-base-300">
        
        {/* Animated Icon Container */}
        <div className="mb-10 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-primary blur-xl opacity-20 animate-pulse"></div>
            <div className="relative w-30 h-30 rounded-full bg-primary/10 text-primary flex items-center justify-center text-5xl font-black shadow-inner">
              <span className="animate-bounce">404</span>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-base-content tracking-tight leading-tight">
            Oops! <br />
            <span className="text-primary">Page Not Found</span>
          </h1>
          <p className="text-base md:text-lg text-base-content/60 max-w-sm mx-auto leading-relaxed">
            The page you are looking for doesn't exist or has been moved to another URL.
          </p>
        </div>

        {/* Buttons: Fully Responsive */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => window.history.back()}
            className="btn btn-primary btn-lg rounded-2xl px-8 shadow-lg shadow-primary/20 hover:scale-105 transition-transform"
          >
            Go Back
          </button>

          <Link 
            to="/" 
            className="btn btn-outline btn-lg rounded-2xl px-8 hover:bg-base-200"
          >
            Return Home
          </Link>
        </div>

        {/* Footer Info */}
        <div className="mt-12 pt-6 border-t border-base-200">
          <p className="text-sm font-medium text-base-content/40">
            Still lost? {" "}
            <Link to="/contact" className="text-primary hover:underline transition-all">
              Contact Support
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;