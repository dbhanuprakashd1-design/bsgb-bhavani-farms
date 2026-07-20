import heroImage from "../../assets/images/hero.jpg";

const Hero = () => {
  return (
    <section
      className="relative h-[90vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl text-white">
            <p className="text-orange-400 font-semibold uppercase tracking-widest mb-3">
              Welcome to
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              BSGB <span className="text-orange-500">Bhavani Farms</span>
            </h1>

            <p className="mt-6 text-lg text-gray-200">
              We specialize in healthy sheep and goat farming using modern,
              sustainable farming practices. Our mission is to provide quality
              livestock and trusted farming solutions.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#about"
                className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold transition"
              >
                Explore Farm
              </a>

              <a
                href="#contact"
                className="border border-white hover:bg-white hover:text-black px-6 py-3 rounded-lg font-semibold transition"
              >
                Contact Us
              </a>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div>
                <h2 className="text-3xl font-bold text-orange-400">500+</h2>
                <p className="text-gray-300">Healthy Animals</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-orange-400">10+</h2>
                <p className="text-gray-300">Years Experience</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-orange-400">100%</h2>
                <p className="text-gray-300">Quality Care</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;