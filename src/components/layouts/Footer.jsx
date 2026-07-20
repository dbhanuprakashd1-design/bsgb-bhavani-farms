import logo from "../../assets/images/logo.png";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-white">

      {/* Top */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">

          {/* Company */}
          <div>

            <img
              src={logo}
              alt="BSGB Bhavani Farms"
              className="h-24 bg-white rounded-lg p-2"
            />

            <p className="mt-6 text-gray-300 leading-7">
              BSGB Bhavani Farms specializes in healthy sheep and goat farming,
              quality breeding, and modern livestock management.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-2xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li><a href="#home" className="hover:text-orange-400">Home</a></li>

              <li><a href="#about" className="hover:text-orange-400">About</a></li>

              <li><a href="#services" className="hover:text-orange-400">Services</a></li>

              <li><a href="#gallery" className="hover:text-orange-400">Gallery</a></li>

              <li><a href="#videos" className="hover:text-orange-400">Videos</a></li>

              <li><a href="#contact" className="hover:text-orange-400">Contact</a></li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-2xl font-semibold mb-5">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-orange-400" />
                <span>+91 98662 74787</span>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-orange-400" />
                <span>balajipress4@gmail.com</span>
              </div>

              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-orange-400 mt-1" />
                <span>
                  Telaprolu Village<br />
                  Krishna District,<br />
                  Andhra Pradesh - 521301
                </span>
              </div>

            </div>

          </div>

          {/* Follow */}

          <div>

            <h3 className="text-2xl font-semibold mb-5">
              Follow Us
            </h3>

            <p className="text-gray-300">
              Stay connected with BSGB Bhavani Farms.
            </p>

            <div className="flex gap-4 mt-6">

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center hover:bg-orange-600 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center"
              >
                <FaYoutube />
              </a>

              <a
                href="https://wa.me/919866274787"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center"
              >
                <FaWhatsapp />
              </a>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-gray-700">

        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-400 text-center md:text-left">
            © 2026 BSGB Bhavani Farms. All Rights Reserved.
          </p>

          <p className="text-gray-400 mt-3 md:mt-0">
            Designed & Developed with ❤️ using React.js
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;