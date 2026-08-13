"use client";
import { Mail, Phone, MapPin, Landmark } from "lucide-react";

const Account = () => {
  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-neutral-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-[#3db94c] text-sm font-bold uppercase tracking-widest mb-3">Support Our Work</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Get Involved</h2>
          <div className="w-16 h-1 bg-[#3db94c] mx-auto rounded-full mb-6" />
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Join us in our mission to create lasting positive change. Every contribution makes a difference.
          </p>
        </div>

        {/* Bank Details Card */}
        <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-md border border-gray-100 dark:border-neutral-700 p-8 mb-14 max-w-lg mx-auto text-center transition-colors duration-300">
          <div className="w-14 h-14 bg-[#3db94c]/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
            <Landmark className="w-7 h-7 text-[#3db94c]" />
          </div>
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">Donate via Bank Transfer</p>
          <p className="text-xl font-bold text-gray-900 dark:text-white leading-relaxed">
            WONDERFUL WOMAN FOR SUSTAINABILITY FOUNDATION
          </p>
          <p className="text-3xl font-extrabold text-[#3db94c] my-2">0194372212</p>
          <p className="text-gray-500 dark:text-gray-400 font-medium">UNION BANK</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: <Mail className="w-7 h-7 text-[#3db94c]" />, title: "Email Us", href: "mailto:info@wonderwomannigeria.org", label: "info@wonderwomannigeria.org" },
            { icon: <Phone className="w-7 h-7 text-[#3db94c]" />, title: "Call Us", href: "tel:+2348102657973", label: "+2348102657973" },
            { icon: <MapPin className="w-7 h-7 text-[#3db94c]" />, title: "Find Us", href: null, label: "Abuja, Nigeria" },
          ].map((item, i) => {
            const Inner = (
              <>
                <div className="w-14 h-14 bg-[#3db94c]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#3db94c]/20 transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{item.label}</p>
              </>
            );
            return item.href ? (
              <a key={i} href={item.href} className="bg-white dark:bg-neutral-800 rounded-2xl shadow-sm border border-gray-100 dark:border-neutral-700 p-8 text-center hover:shadow-md hover:border-[#3db94c]/30 transition-all duration-300 group block cursor-pointer">
                {Inner}
              </a>
            ) : (
              <div key={i} className="bg-white dark:bg-neutral-800 rounded-2xl shadow-sm border border-gray-100 dark:border-neutral-700 p-8 text-center hover:shadow-md hover:border-[#3db94c]/30 transition-all duration-300 group">
                {Inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Account;
