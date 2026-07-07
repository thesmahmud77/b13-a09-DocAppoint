"use client";
import { useState } from "react";
import { HiChevronDown } from "react-icons/hi";

const faqs = [
  {
    question: "How do I book an appointment?",
    answer:
      "Simply browse our list of doctors, select a specialist that fits your needs, choose an available date and time, and confirm your booking. You'll receive a confirmation instantly.",
  },
  {
    question: "Can I cancel or reschedule my appointment?",
    answer:
      "Yes, you can manage your bookings anytime from the 'My Bookings' section in your dashboard. You can update the date/time or cancel the appointment directly.",
  },
  {
    question: "Is my personal and medical information secure?",
    answer:
      "Absolutely. All your data is encrypted and stored securely. We never share your personal or medical information with third parties without your consent.",
  },
  {
    question: "Do I need to pay in advance?",
    answer:
      "Payment policies vary by doctor. Some consultations require advance payment, while others allow payment at the time of the visit. This will be clearly mentioned on the doctor's profile.",
  },
];

const HomeFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-2 text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-sm">
            Everything you need to know before booking your appointment.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-gray-100 rounded-2xl bg-gray-50 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
                >
                  <span className="font-semibold text-gray-800 text-sm md:text-base">
                    {faq.question}
                  </span>
                  <HiChevronDown
                    className={`text-blue-600 text-xl shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-4 text-sm text-gray-500 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeFAQ;
