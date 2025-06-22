import { Mail } from "lucide-react";
import GithubIcon from "../components/GithubIcon";
import LinkedinIcon from "../components/LinkedinIcon";
import WhatsappIcon from "../components/WhatsappIcon";
import { memo } from "react";

const Contact = memo(() => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Let's Connect</h3>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Always excited to collaborate on interesting projects or discuss new
          opportunities
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="space-y-6">
          <h4 className="text-xl font-semibold text-gray-800 mb-4">
            Contact Information
          </h4>
          {[
            {
              icon: Mail,
              label: "Email",
              value: "abhijitbiet.dey@gmail.com",
              href: "mailto:abhijitbiet.dey@gmail.com",
            },
            {
              icon: GithubIcon,
              label: "GitHub",
              value: "@projectabhi",
              href: "https://github.com/projectabhi",
            },
            {
              icon: LinkedinIcon,
              label: "LinkedIn",
              value: "Abhijit Dey",
              href: "https://www.linkedin.com/in/abhijit-dey-64558553",
            },
            {
              icon: WhatsappIcon,
              label: "WhatsApp",
              value: "@abhijit",
              href: "https://wa.me/9851881748",
            },
          ].map((contact) => (
            <a
              target="_blank"
              key={contact.label}
              href={contact.href}
              className="flex items-center space-x-4 p-4 bg-white rounded-lg border border-gray-100 hover:border-blue-300 hover:shadow-md transition-all duration-200 group"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                <contact.icon className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="font-medium text-gray-800">{contact.label}</p>
                <p className="text-gray-600">{contact.value}</p>
              </div>
            </a>
          ))}
        </div>
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
          <h4 className="text-xl font-semibold text-gray-800 mb-6">
            Quick Message
          </h4>
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>
            <div>
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
});
export default Contact;
