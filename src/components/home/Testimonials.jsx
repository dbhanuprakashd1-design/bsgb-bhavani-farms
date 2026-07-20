import customer1 from "../../assets/images/testimonials/customer1.jpg";
import customer2 from "../../assets/images/testimonials/customer2.jpg";
import customer3 from "../../assets/images/testimonials/customer3.jpg";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Ramesh Kumar",
    location: "Vijayawada",
    image: customer1,
    review:
      "I purchased healthy sheep from BSGB Bhavani Farms. The quality was excellent and the service was very professional.",
  },
  {
    id: 2,
    name: "Suresh Reddy",
    location: "Hyderabad",
    image: customer2,
    review:
      "Very clean farm and healthy goats. I highly recommend BSGB Bhavani Farms for anyone starting goat farming.",
  },
  {
    id: 3,
    name: "Mahesh Naidu",
    location: "Guntur",
    image: customer3,
    review:
      "Excellent customer support and quality livestock. I will definitely purchase again.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <span className="text-orange-500 uppercase font-semibold">
            Testimonials
          </span>

          <h2 className="text-4xl font-bold mt-3">
            What Our Customers Say
          </h2>

          <p className="text-gray-600 mt-4">
            Our customers trust us for healthy livestock and professional service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-orange-400"
              />

              <div className="flex justify-center mt-5 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <p className="text-gray-600 mt-5 text-center italic">
                "{item.review}"
              </p>

              <h3 className="text-xl font-bold mt-6 text-center">
                {item.name}
              </h3>

              <p className="text-gray-500 text-center">
                {item.location}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Testimonials;