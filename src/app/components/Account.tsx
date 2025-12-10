"use client";
import { Mail, Phone, MapPin } from "lucide-react";

const Account = () => {

  return (
    <div>
    <section id="contact" className="py-20 bg-white text-gray-900">
  <div className="container mx-auto px-4">
    {/* Header */}
    <div className="text-center mb-16">
       <h2 className="text-4xl font-bold mb-4 text-gray-900">
         Get Involved
      </h2>

      <div className="w-24 h-1 bg-[#3db94c] mx-auto mb-6"></div>
       
     
        <p className=" text-2xl text-black max-w-3xl mx-auto font-medium">
      WONDERFUL WOMAN FOR SUSTAINABILITY FOUNDATION
      <br />
        0194372212
        <br />
        UNION BANK
      </p>

        <p className="text-xl text-gray-600  mx-auto pt-6">
        Join us in our mission to create lasting positive change. Every
        contribution makes a difference.
      </p>

      <h2 className="text-4xl font-bold mb-4 text-gray-900">
       
      </h2>
      
    </div>

    {/* Contact Info */}
    <div className="grid md:grid-cols-3 gap-8">
      <div className="text-center">
        <div className="w-16 h-16 bg-[#3db94c]/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Mail className="w-8 h-8 text-[#3db94c]" />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-900">Email Us</h3>
            <p className="text-gray-600 mb-1">
        <a href="mailto:info@wonderwomannigeria.org" className="hover:text-[#3db94c] transition-colors">
          info@wonderwomannigeria.org
        </a>
      </p>

       {/* <p className="text-gray-600">volunteer@wonderwomannigeria.org</p> */}
      </div>

      <div className="text-center">
        <div className="w-16 h-16 bg-[#3db94c]/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Phone className="w-8 h-8 text-[#3db94c]" />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-900">Call Us</h3>
        <p className="text-gray-600">+2348102657973</p>
      </div>

      <div className="text-center">
        <div className="w-16 h-16 bg-[#3db94c]/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <MapPin className="w-8 h-8 text-[#3db94c]" />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-900">Abuja, Nigeria</h3>
      </div>
    </div>
      <div className="w-24 h-1 bg-[#3db94c] mx-auto my-12 "></div>

    {/* Buttons */}
    <div className="text-center mt-12 flex flex-col gap-4 justify-center lg:flex-row">
      {/* <button className="cursor-pointer opacity-80 bg-[#3db94c] text-white font-bold py-3 px-6 rounded-md text-sm md:text-base transition-all duration-300 hover:opacity-100 w-full sm:w-auto">
        Donate Now
      </button> 

      <button className="cursor-pointer opacity-80 border border-black text-white bg-black px-8 py-3 rounded-lg font-medium hover:opacity-100   transition-all duration-300 w-full sm:w-auto">
        Volunteer
      </button> */}
    </div>
  </div>
</section>


    </div>
  );
};

export default Account;
