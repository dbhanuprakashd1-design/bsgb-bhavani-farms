import {
  ShieldCheck,
  HeartHandshake,
  BadgeCheck,
  Tractor,
} from "lucide-react";
import whyChooseImage from "../../assets/images/why-choose.jpg";

const features = [
  {
    icon: ShieldCheck,
    title: "Healthy & Vaccinated Animals",
    description:
      "All our sheep and goats receive regular vaccinations and health checkups.",
  },
  {
    icon: HeartHandshake,
    title: "Customer Satisfaction",
    description:
      "We build long-term relationships by delivering quality livestock and support.",
  },
  {
    icon: BadgeCheck,
    title: "Quality Breeding",
    description:
      "We maintain high breeding standards for strong and productive animals.",
  },
  {
    icon: Tractor,
    title: "Modern Farming",
    description:
      "Our farm uses modern practices for animal care, nutrition, and hygiene.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div>
            <img
              src={whyChooseImage}
              alt="Why Choose Us"
              className="rounded-3xl shadow-xl w-full"
            />
          </div>

          {/* Content */}
          <div>
            <span className="text-orange-500 uppercase font-semibold tracking-widest">
              Why Choose Us
            </span>

            <h2 className="text-4xl font-bold mt-4 text-gray-800">
              Trusted Sheep & Goat Farming Experts
            </h2>

            <p className="text-gray-600 mt-5 leading-8">
              BSGB Bhavani Farms is committed to providing healthy livestock,
              professional farming guidance, and modern animal care. Our focus
              is on quality, sustainability, and customer satisfaction.
            </p>

            <div className="mt-10 space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={index}
                    className="flex gap-5 items-start bg-white p-5 rounded-2xl shadow-md"
                  >
                    <div className="bg-orange-100 p-3 rounded-full">
                      <Icon className="text-orange-500" size={28} />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        {feature.title}
                      </h3>

                      <p className="text-gray-600 mt-2">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;