import { memo } from "react";
import GithubIcon from "../components/GithubIcon";
import LinkedinIcon from "../components/LinkedinIcon";
import WhatsappIcon from "../components/WhatsappIcon";

const MobileView = memo(() => {
  return (
    <div className="flex md:hidden justify-center space-x-4 mt-6">
      {[GithubIcon, LinkedinIcon, WhatsappIcon].map((Icon, index) => (
        <div
          key={index}
          className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white hover:bg-opacity-30 transform hover:scale-110 transition-all duration-200"
        >
          <Icon />
        </div>
      ))}
    </div>
  );
});
export default MobileView;
