import { FaCheckCircle } from "react-icons/fa";
import aboutImage from "../../assets/images/about.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 " >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Image */}
          <div>
            <img
              src={aboutImage}
              alt="BSGB Bhavani Farms"
              className="rounded-2xl shadow-xl w-full"
            />
          </div>

          {/* Right Content */}
          <div>
            <p className="text-orange-500 font-semibold uppercase mb-2">
              About Us
            </p>

            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Welcome to BSGB Bhavani Farms
            </h2>

            <p className="text-gray-600 leading-8 mb-6">
              BSGB Bhavani Farms is dedicated to healthy sheep and goat farming.
              We focus on quality breeding, proper nutrition, veterinary care,
              and sustainable farming practices to deliver strong and healthy
              livestock.
            </p>

            <div className="space-y-4">

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-green-600 text-xl" />
                <span>Healthy & Vaccinated Animals</span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-green-600 text-xl" />
                <span>Modern Farming Methods</span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-green-600 text-xl" />
                <span>Expert Animal Care</span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-green-600 text-xl" />
                <span>Trusted by Farmers</span>
              </div>

            </div>

            <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg transition">
              Learn More
            </button>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;