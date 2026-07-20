import {
  GiGoat,
  GiSheep,
  GiFarmTractor,
  GiHealthNormal,
} from "react-icons/gi";
import { FaShieldAlt } from "react-icons/fa";
import { Wheat, ClipboardList } from "lucide-react";

const services = [
  {
    title: "Sheep Farming",
    description:
      "Healthy sheep breeding with modern farming techniques and expert care.",
    icon: GiSheep,
  },
  {
    title: "Goat Farming",
    description:
      "Premium goat farming for meat, milk, and breeding purposes.",
    icon: GiGoat,
  },
  {
    title: "Veterinary Care",
    description:
      "Regular vaccination, health checkups, and disease prevention.",
    icon: GiHealthNormal,
  },
  {
    title: "Feed Management",
    description:
      "Balanced nutrition plans to improve livestock growth and productivity.",
    icon: Wheat,
  },
  {
    title: "Livestock Insurance",
    description:
      "Insurance guidance and support to protect your valuable livestock.",
    icon: FaShieldAlt,
  },
  {
    title: "Farm Consultancy",
    description:
      "Expert consultation for starting and managing sheep & goat farms.",
    icon: ClipboardList,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-orange-500 font-semibold uppercase tracking-wider">
            What We Offer
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-3">
            Our Farming Services
          </h2>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            We provide complete sheep and goat farming solutions, including
            breeding, nutrition, veterinary care, insurance support, and expert
            consultancy.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:-translate-y-2 hover:shadow-2xl transition duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">
                  <Icon className="text-orange-500" size={32} />
                </div>

                <h3 className="text-2xl font-semibold text-gray-800 mt-6">
                  {service.title}
                </h3>

                <p className="text-gray-600 mt-4 leading-7">
                  {service.description}
                </p>

                <button className="mt-6 text-orange-500 font-semibold hover:text-green-700 transition">
                  Learn More →
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;