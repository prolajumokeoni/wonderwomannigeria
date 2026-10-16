import Image from "next/image";

export default function Loading() {
    return (
      <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white">
        <div className="relative">
          <Image 
            src="/images/WonderWomanNigeria.webp"
            alt="Wonder Woman Nigeria" 
            className="w-24 h-24 md:w-32 md:h-32 object-contain animate-pulse"
          />
          
          <div className="absolute inset-0 -m-4 border-4 border-[#3db94c]/30 border-t-[#3db94c] rounded-full animate-spin"></div>
        </div>
        

      </div>
    );
  }