import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919866274787?text=Hello%20BSGB%20Bhavani%20Farms,%20I%20am%20interested%20in%20your%20sheep%20and%20goat%20farming."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition duration-300 hover:scale-110"
    >
      <FaWhatsapp size={34} />
    </a>
  );
};

export default WhatsAppButton;