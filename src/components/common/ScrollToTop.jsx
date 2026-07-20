import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollTop}
      className="fixed bottom-24 right-6 z-50 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-xl transition hover:scale-110"
    >
      <ChevronUp size={28} />
    </button>
  );
};

export default ScrollToTop;