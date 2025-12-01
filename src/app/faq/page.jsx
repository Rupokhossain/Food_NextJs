"use client";

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const faqs = [
  {
    id: 1,
    question: "How To Contact With Customer Service?",
    answer: (
      <div className="text-gray-600">
        <p className="mb-4 leading-relaxed">
          Nulla malesuada iaculis nisi, vitae sagittis lacus laoreet in. Morbi
          aliquet pulvinar orci non vulputate. Donec aliquet ullamcorper gravida.
          Interdum et malesuada fames ac ante ipsum primis in faucibus.
        </p>
        <ul className="list-disc ml-5 space-y-2">
          <li>Vivamus sed est non arcu porta aliquet et vitae nulla.</li>
          <li>Integer et lacus vitae justo fermentum rutrum. In nec ultrices massa.</li>
          <li>Proin blandit nunc risus, at semper turpis sagittis nec.</li>
          <li>Quisque ut dolor erat.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 2,
    question: "Website Response Taking Time, How To Improve?",
    answer: <p className="text-gray-600">Improve your hosting, compress images and use cache.</p>,
  },
  {
    id: 3,
    question: "In Elementum Est A Ante Sodales Iaculis.",
    answer: <p className="text-gray-600">Simple placeholder text for demo.</p>,
  },
  {
    id: 4,
    question: "How Do I Tracking My Order?",
    answer: <p className="text-gray-600">You can track order using tracking ID.</p>,
  },
  {
    id: 5,
    question: "App Installation Failed, How To Update System Information?",
    answer: <p className="text-gray-600">Update your system and try again.</p>,
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState(1);

  const toggle = (id) => {
    setOpen(open === id ? null : id);
  };

  return (
    <div className="container mx-auto px-4">
      {/* py-16 কে মোবাইলের জন্য কমিয়ে py-10 করা হয়েছে */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-10 lg:py-16">
        
        {/* LEFT SIDE - FAQ */}
        <div className="lg:col-span-2">
          {/* হেডিং সাইজ মোবাইলে ছোট (text-2xl) এবং ল্যাপটপে বড় (text-4xl) করা হয়েছে */}
          <h2 className="text-[#1A2B3D] text-2xl md:text-3xl lg:text-4xl font-bold mb-6 lg:mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className={`rounded-lg overflow-hidden transition-all duration-300 border ${
                  open === faq.id ? "border-[#F27C22]" : "border-gray-200"
                }`}
              >
                <button
                  style={{ backgroundColor: open === faq.id ? "#F27C22" : "white" }}
                  // মোবাইলে প্যাডিং একটু কমানো হয়েছে (p-4)
                  className={`w-full p-4 lg:p-5 flex justify-between items-center text-left font-semibold transition-colors duration-300 gap-3 ${
                    open === faq.id
                      ? " text-white"
                      : "text-[#1A2B3D] hover:bg-gray-50"
                  }`}
                  onClick={() => toggle(faq.id)}
                >
                  {/* টেক্সট সাইজ রেসপন্সিভ করা হয়েছে */}
                  <span className="text-base lg:text-lg">{faq.question}</span>
                  {open === faq.id ? (
                    <FaMinus className="shrink-0 cursor-pointer" />
                  ) : (
                    <FaPlus className="shrink-0 text-gray-500 cursor-pointer" />
                  )}
                </button>

                {open === faq.id && (
                  <div className="p-5 lg:p-6 border-t border-transparent text-sm lg:text-base">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ============ RIGHT SIDE: SUPPORT FORM ============ */}
        <div className="lg:col-span-1 mt-4 lg:mt-0">
          {/* কার্ডের প্যাডিং মোবাইলে কমিয়ে p-6 করা হয়েছে */}
          <div className="bg-[#fff6ed] p-6 lg:p-8 rounded-xl border border-orange-100 sticky top-24">
            <h3 className="text-lg lg:text-xl font-bold text-[#1e293b] mb-2">
              Dont find your answer, Ask for support.
            </h3>
            <p className="text-sm text-gray-500 mb-6 leading-relaxed">
              Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed molestie accumsan dui.
            </p>

            <form className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#f58220] bg-white"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#f58220] bg-white"
              />
              <textarea
                rows="4"
                placeholder="Message (Optional)"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#f58220] bg-white resize-none"
              ></textarea>

              <button
                type="button"
                className="w-full bg-[#f58220] text-white py-3 rounded-lg font-bold hover:bg-[#e0751a] transition shadow-md mt-2 cursor-pointer"
              >
                Contact us
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}