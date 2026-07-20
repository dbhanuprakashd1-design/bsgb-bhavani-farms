import sheepImage from "../../assets/images/sheep-section.jpg";
import { GiSheep } from "react-icons/gi";
import { CheckCircle } from "lucide-react";

const features = [
  "Healthy Nellore & Deccani Sheep",
  "Regular Vaccination",
  "Quality Feeding",
  "Expert Veterinary Care",
  "Scientific Breeding",
  "Disease Prevention",
];

const SheepSection = () => {
  return (
    <section id="sheep" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Image */}

          <div>
            <img
              src={sheepImage}
              alt="Sheep Farming"
              className="rounded-3xl shadow-2xl"
            />
          </div>

          {/* Content */}

          <div>

            <div className="flex items-center gap-3 mb-4">
              <GiSheep className="text-orange-500 text-5xl" />
              <h2 className="text-4xl font-bold">
                Sheep Farming
              </h2>
            </div>

            <p className="text-gray-600 leading-8">
              BSGB Bhavani Farms specializes in scientific sheep farming with
              proper nutrition, clean shelters, regular vaccination, and
              sustainable management practices to ensure healthy livestock.
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

        </div>

      </div>
    </section>
  );
};

export default SheepSection;