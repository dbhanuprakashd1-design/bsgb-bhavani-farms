import {
  GiSheep,
  GiGoat,
} from "react-icons/gi";

import sheep1 from "../../assets/images/breeds/nellore-sheep.jpg";
import sheep2 from "../../assets/images/breeds/deccani-sheep.jpg";
import goat1 from "../../assets/images/breeds/boer-goat.jpg";
import goat2 from "../../assets/images/breeds/osmanabadi-goat.jpg";

const breeds = [
  {
    name: "Nellore Sheep",
    type: "Sheep",
    image: sheep1,
    icon: GiSheep,
    weight: "40 - 60 Kg",
    purpose: "Meat Production",
    description:
      "One of the most popular Indian sheep breeds known for rapid growth.",
  },
  {
    name: "Deccani Sheep",
    type: "Sheep",
    image: sheep2,
    icon: GiSheep,
    weight: "35 - 45 Kg",
    purpose: "Meat",
    description:
      "Hardy breed suitable for dry regions with excellent adaptability.",
  },
  {
    name: "Boer Goat",
    type: "Goat",
    image: goat1,
    icon: GiGoat,
    weight: "80 - 110 Kg",
    purpose: "Meat",
    description:
      "Fast-growing meat breed with excellent muscle development.",
  },
  {
    name: "Osmanabadi Goat",
    type: "Goat",
    image: goat2,
    icon: GiGoat,
    weight: "35 - 45 Kg",
    purpose: "Meat & Breeding",
    description:
      "One of India's most profitable goat breeds.",
  },
];

const Breeds = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <span className="text-orange-500 uppercase font-semibold">
            Our Livestock
          </span>

          <h2 className="text-4xl font-bold mt-3">
            Premium Sheep & Goat Breeds
          </h2>

          <p className="text-gray-500 mt-4 max-w-3xl mx-auto">
            We raise healthy, high-quality breeds selected for excellent
            growth, productivity, and adaptability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {breeds.map((breed, index) => {
            const Icon = breed.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
              >
                <img
                  src={breed.image}
                  alt={breed.name}
                  className="h-56 w-full object-cover"
                />

                <div className="p-6">

                  <div className="flex items-center gap-2 text-orange-500 mb-3">
                    <Icon size={28} />
                    <span>{breed.type}</span>
                  </div>

                  <h3 className="text-2xl font-bold">
                    {breed.name}
                  </h3>

                  <p className="text-gray-600 mt-3">
                    {breed.description}
                  </p>

                  <div className="mt-5 border-t pt-4 text-sm">

                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">Weight</span>
                      <span>{breed.weight}</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="font-semibold">Purpose</span>
                      <span>{breed.purpose}</span>
                    </div>

                  </div>

                  <button className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg">
                    View Details
                  </button>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Breeds;