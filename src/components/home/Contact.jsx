import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-r from-green-700 to-green-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="uppercase tracking-widest text-orange-300 font-semibold">
            Contact Us
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Get In Touch
          </h2>

          <p className="text-green-100 mt-4">
            We'd love to hear from you. Contact us for sheep & goat farming,
            livestock purchase, or farm visits.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div className="space-y-8">
            <div className="flex gap-5">
              <Phone className="text-orange-400" size={30} />
              <div>
                <h3 className="font-bold text-xl">Phone</h3>
                <p>+91 9866274787</p>
              </div>
            </div>

            <div className="flex gap-5">
              <Mail className="text-orange-400" size={30} />
              <div>
                <h3 className="font-bold text-xl">Email</h3>
                <p>bhavanifarms4u@gmail.com</p>
              </div>
            </div>

            <div className="flex gap-5">
              <MapPin className="text-orange-400" size={30} />
              <div>
                <h3 className="font-bold text-xl">Location</h3>
                <p>Telaprolu Village</p>
                <p>Krishna District, Andhra Pradesh - 521301</p>
              </div>
            </div>

            <div className="flex gap-5">
              <Clock className="text-orange-400" size={30} />
              <div>
                <h3 className="font-bold text-xl">Working Hours</h3>
                <p>Monday - Sunday</p>
                <p>08:00 AM - 06:00 PM</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Send Message
            </h3>

            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="space-y-5"
            >
              {/* Web3Forms Access Key */}
              <input
                type="hidden"
                name="access_key"
                value="694a220c-2a9d-4c7f-9bee-fce5d8da5e42"
              />

              {/* Optional Subject */}
              <input
                type="hidden"
                name="subject"
                value="New Contact Form Submission - BSGB Bhavani Farms"
              />

              {/* Disable Captcha (Optional) */}
              <input
                type="hidden"
                name="botcheck"
                className="hidden"
              />

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full border rounded-lg px-4 py-3 text-black outline-none focus:ring-2 focus:ring-orange-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full border rounded-lg px-4 py-3 text-black outline-none focus:ring-2 focus:ring-orange-500"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="w-full border rounded-lg px-4 py-3 text-black outline-none focus:ring-2 focus:ring-orange-500"
              />

              <textarea
                rows="5"
                name="message"
                placeholder="Your Message"
                required
                className="w-full border rounded-lg px-4 py-3 text-black outline-none focus:ring-2 focus:ring-orange-500"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
