import { Heart } from "lucide-react";
import profilePic from "../assets/profile_pic.jpg";
import GithubIcon from "./GithubIcon";
import LinkedinIcon from "./LinkedinIcon";
import WhatsappIcon from "./WhatsappIcon";

const Header = () => {
  return (
    <div className="flex items-center justify-between max-w-4xl mx-auto">
      <div className="flex items-center space-x-6">
        <div className="relative">
          <div className="w-20 h-20 rounded-full overflow-hidden border-3 border-white shadow-xl transform hover:scale-110 transition-transform duration-300">
            <img
              src={profilePic}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-white flex items-center justify-center">
            <Heart className="w-3 h-3 text-white fill-current animate-pulse" />
          </div>
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-1 tracking-tight">
            Abhijit Dey
          </h1>
          <p className="text-lg text-blue-100">Full Stack Engineer</p>
        </div>
      </div>
      <div className="hidden md:flex space-x-4">
        {[GithubIcon, LinkedinIcon, WhatsappIcon].map((Icon, index) => (
          <div
            key={index}
            className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white hover:bg-opacity-30 transform hover:scale-110 transition-all duration-200"
          >
            <Icon />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Header;
