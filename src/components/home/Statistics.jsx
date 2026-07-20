import { GiSheep, GiGoat } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";

const stats = [
  {
    icon: GiSheep,
    number: "200+",
    title: "Healthy Sheep",
  },
  {
    icon: GiGoat,
    number: "200+",
    title: "Healthy Goats",
  },
  {
    icon: MdHealthAndSafety,
    number: "100%",
    title: "Healthy Breeds",
  },
  {
    icon: FaUsers,
    number: "100+",
    title: "Happy Customers",
  },
];

const Statistics = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-green-700 to-green-900 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold">
            Our Farm Statistics
          </h2>

          <p className="mt-4 text-green-100 max-w-2xl mx-auto">
            We are proud to maintain healthy livestock and provide trusted
            farming services with quality and care.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center hover:bg-white/20 transition duration-300"
              >
                <div className="flex justify-center mb-4">
                  <Icon size={55} className="text-orange-400" />
                </div>

                <h3 className="text-5xl font-bold text-orange-300">
                  {item.number}
                </h3>

                <p className="mt-3 text-lg font-medium">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Statistics;