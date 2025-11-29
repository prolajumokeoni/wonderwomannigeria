'use client';

import React, { useState, useEffect } from 'react';
import { toast } from "react-toastify";

interface DonateButtonProps {
  isScrolled?: boolean;
}

export default function DonateButton({ isScrolled }: DonateButtonProps) {
  const [amount, setAmount] = useState(1000);
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.paystack.co/v1/inline.js';
    document.body.appendChild(script);
  }, []);

  const handleDonateClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleSubmit = () => {
    if (!email || amount < 100) {
      toast.info('Please enter a valid email and amount (minimum ₦1)');
      return;
    }

    const handler = (window as any).PaystackPop.setup({
      key: 'pk_test_8460b40c6a345e9e406b362de3294b8826a370eb',
      email: email,
      amount: amount,
      ref: `${Math.floor(Math.random() * 1000000000 + 1)}`,
      currency: 'NGN',
      onClose: function () {
        toast.error('Payment cancelled');
      },
      callback: function (response: any) {
        console.log('success. transaction ref: ' + response.reference);
        toast.success('Thank you for your donation! 🎉');
        setShowModal(false);
        setEmail('');
        setAmount(1000);
      },
    });
    handler.openIframe();
  };

  return (
    <>
      <button
        onClick={handleDonateClick}
        className="font-semibold px-5 py-2 rounded-md transition-all duration-300 text-sm  shadow-sm bg-white text-[#3db94c]  hover:bg-[#3db94c] hover:text-white"
      >
        Donate
      </button>

      {showModal && (
        <div className="app-modal--overlay">
          <div className="app-modal--container">
            <div className="flex justify-between items-center mb-4 w-full">
              <h2 className="text-2xl font-bold text-gray-800">Make a Donation</h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                ×
              </button>
            </div>

            <div className="space-y-4 w-full">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#3db94c] focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 ">
                  Amount (₦)
                </label>
                <input
                  type="number"
                  value={amount }
                  onChange={(e) => setAmount(parseFloat(e.target.value))}
                  placeholder="Enter amount"
                  min="1"
                  step="0.01"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#3db94c] focus:border-transparent outline-none"
                />
              </div>

              <div className="flex gap-2 flex-wrap">
                {[1000, 5000, 10000, 20000].map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setAmount(preset)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      amount === preset
                        ? 'bg-[#3db94c] text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    ₦{preset}
                  </button>
                ))}
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-[#3db94c] text-white font-semibold py-3 rounded-md hover:bg-[#35a343] transition-colors"
              >
                Proceed to Payment
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}