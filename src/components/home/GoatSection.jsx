import goatImage from "../../assets/images/goat-section.jpg";
import { GiGoat } from "react-icons/gi";
import { CheckCircle } from "lucide-react";

const features = [
  "Premium Boer & Osmanabadi Goats",
  "Healthy Breeding",
  "Balanced Nutrition",
  "Disease-Free Livestock",
  "Regular Health Checkups",
  "High Quality Meat Production",
];

const GoatSection = () => {
  return (
    <section id="goat" className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Content */}

          <div>

            <div className="flex items-center gap-3 mb-4">

              <GiGoat className="text-orange-500 text-5xl" />

              <h2 className="text-4xl font-bold">
                Goat Farming
              </h2>

            </div>

            <p className="text-gray-600 leading-8">
              Our goat farming focuses on quality breeds, hygienic housing,
              proper feeding, and modern management practices to ensure healthy
              and productive livestock.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mt-8">

              {features.map((item, index) => (

                <div
                  key={index}
                  className="flex items-center gap-3"
                >

                  <CheckCircle className="text-green-600" />

                  <span>{item}</span>

                </div>

              ))}

            </div>

            <button className="mt-10 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg">
              Learn More
            </button>

          </div>

          {/* Image */}

          <div>

            <img
              src={goatImage}
              alt="Goat Farming"
              className="rounded-3xl shadow-2xl"
            />

          </div>

        </div>

      </div>
    </section>
  );
};

export default GoatSection;