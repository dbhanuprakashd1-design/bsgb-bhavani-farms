import sheep1 from "../../assets/images/gallery/sheep1.jpg";
import sheep2 from "../../assets/images/gallery/sheep2.jpg";
import goat1 from "../../assets/images/gallery/goat1.jpg";
import goat2 from "../../assets/images/gallery/goat2.jpg";
import farm1 from "../../assets/images/gallery/farm1.jpg";
import farm2 from "../../assets/images/gallery/farm2.jpg";

const gallery = [
  {
    image: sheep1,
    title: "Healthy Sheep",
    category: "Sheep",
  },
  {
    image: sheep2,
    title: "Premium Breed",
    category: "Sheep",
  },
  {
    image: goat1,
    title: "Boer Goat",
    category: "Goat",
  },
  {
    image: goat2,
    title: "Healthy Goats",
    category: "Goat",
  },
  {
    image: farm1,
    title: "Farm View",
    category: "Farm",
  },
  {
    image: farm2,
    title: "Modern Farm",
    category: "Farm",
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-orange-500 uppercase font-semibold">
            Gallery
          </span>

          <h2 className="text-4xl font-bold mt-3">
            Explore Our Farm
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Take a glimpse into our farm, healthy livestock, and modern farming
            facilities.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {gallery.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg group"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-72 w-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-5">

                <span className="bg-orange-100 text-orange-600 text-sm px-3 py-1 rounded-full">
                  {item.category}
                </span>

                <h3 className="text-xl font-bold mt-4">
                  {item.title}
                </h3>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Gallery;