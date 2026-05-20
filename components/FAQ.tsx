"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is the consultation really free?",
    answer:
      "Yes. The consultation is free. I'll use the time to understand your business, spot what is not working, and suggest a practical marketing direction."
  },
  {
    question: "Who is this consultation for?",
    answer:
      "It is for Nepal-based business owners who want more leads, customers, and sales but feel unsure about ads, content, landing pages, or follow-up."
  },
  {
    question: "What will I get inside the consultation call?",
    answer:
      "You'll get clear feedback on your current marketing and a simple digital marketing plan you can start implementing after the call."
  },
  {
    question: "How long will the consultation call be?",
    answer:
      "The consultation is planned for around 1 hour, so there is enough time to understand your business and give useful recommendations."
  },
  {
    question: "Do I need to have a website before booking the call?",
    answer:
      "No. If you only have a Facebook page, Instagram page, or offline business, you can still book the consultation."
  },
  {
    question: "What happens after I fill up the form?",
    answer:
      "After you submit the form, you'll be redirected to the thank you page. You'll also receive the next steps for booking your appointment."
  },
  {
    question: "Will you help me create a marketing plan for my business?",
    answer:
      "Yes. The goal is to help you understand what to fix and what steps to take next to attract better leads and customers."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-violet-soft pb-12 pt-10 sm:pb-14 sm:pt-12 lg:pb-16 lg:pt-14">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-4">FAQ</p>
          <h2 className="section-heading">
            Questions business owners ask before booking
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-3xl space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-[16px] border border-slate-200 bg-white shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-[1.02rem] font-bold leading-6 text-ink sm:text-lg"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 flex-none text-violet-brand transition ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-200 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-base leading-7 text-muted">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
