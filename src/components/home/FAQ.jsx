import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What breeds of sheep do you have?",
    answer:
      "We maintain healthy Nellore and Deccani sheep breeds suitable for meat production and breeding.",
  },
  {
    question: "What breeds of goats are available?",
    answer:
      "We have Boer, Osmanabadi, and other quality goat breeds for breeding and meat farming.",
  },
  {
    question: "Are all animals vaccinated?",
    answer:
      "Yes. All sheep and goats receive regular vaccinations, health checkups, and proper veterinary care.",
  },
  {
    question: "Can I visit the farm before purchasing?",
    answer:
      "Yes. Customers are welcome to visit our farm, inspect the livestock, and discuss their requirements before purchasing.",
  },
  {
    question: "Do you provide transportation?",
    answer:
      "Yes. We can help arrange safe transportation of sheep and goats to your location.",
  },
  {
    question: "How can I book sheep or goats?",
    answer:
      "You can contact us by phone, WhatsApp, or email. We will guide you through the booking process.",
  },
  {
    question: "Where is BSGB Bhavani Farms located?",
    answer:
      "Our farm is located in Telaprolu Village, Krishna District, Andhra Pradesh - 521301.",
  },
  {
    question: "What are your working hours?",
    answer:
      "We are available Monday to Sunday from 8:00 AM to 6:00 PM.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-14">

          <span className="text-orange-500 uppercase font-semibold tracking-widest">
            Frequently Asked Questions
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Got Questions?
          </h2>

          <p className="text-gray-600 mt-4">
            Find answers to the most commonly asked questions about our farm and livestock.
          </p>

        </div>

        <div className="space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >

              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? -1 : index)
                }
                className="w-full flex justify-between items-center p-6 text-left"
              >

                <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                  {faq.question}
                </h3>

                {openIndex === index ? (
                  <ChevronUp className="text-orange-500" />
                ) : (
                  <ChevronDown className="text-orange-500" />
                )}

              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-600 leading-8">
                  {faq.answer}
                </div>
              )}

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default FAQ;