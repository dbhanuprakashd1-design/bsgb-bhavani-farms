import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Sheep", href: "#sheep" },
    { name: "Goat", href: "#goat" },
    { name: "Gallery", href: "#gallery" },
    { name: "Videos", href: "#videos" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="BSGB Bhavani Farms"
              className="h-14 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-medium text-gray-700 hover:text-orange-500 transition"
              >
                {item.name}
              </a>
            ))}

            <a
              href="tel:9866274787"
              className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full font-semibold transition"
            >
              Call Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <HiX size={30} />
            ) : (
              <HiMenu size={30} />
            )}
          </button>

        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-5">

            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-3 border-b"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}

            <a
              href="tel:9866274787"
              className="block mt-4 bg-orange-500 text-white text-center py-3 rounded-lg"
            >
              Call Now
            </a>

          </div>
        )}

      </div>
    </header>
  );
};

export default Navbar;