import { Award, Calendar, MapPin } from "lucide-react";
import { memo } from "react";

const AboutMe = memo(() => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Creative Developer & Designer
        </h3>
        <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
          Passionate full-stack developer with 15+ years of experience crafting
          beautiful, functional web application experiences.A dedicated software
          engineer specializing in app development, offering end-to-end
          solutions from concept to deployment. My expertise extends to
          providing robust support services to ensure seamless operation and
          delivering strategic consultancy to optimize your digital presence. I
          leverage React to create dynamic, responsive, and high-performance web
          applications. My passion lies in solving complex technical challenges
          and translating innovative ideas into tangible, user-centric products.
          I am committed to delivering exceptional quality and driving
          measurable results for my clients.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
          <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-3" />
          <h4 className="font-semibold text-gray-800">Location</h4>
          <p className="text-gray-600">Kolkata, IN</p>
        </div>
        <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
          <Calendar className="w-8 h-8 text-green-600 mx-auto mb-3" />
          <h4 className="font-semibold text-gray-800">Experience</h4>
          <p className="text-gray-600">15+ Years</p>
        </div>
        <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
          <Award className="w-8 h-8 text-purple-600 mx-auto mb-3" />
          <h4 className="font-semibold text-gray-800">Projects</h4>
          <p className="text-gray-600">50+ Completed</p>
        </div>
      </div>
    </div>
  );
});
export default AboutMe;
