import { Award, Calendar, MapPin } from "lucide-react";

const AboutMe = () => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Creative Developer & Designer
        </h3>
        <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
          Passionate full-stack developer with 5+ years of experience crafting
          beautiful, functional web experiences. I love turning complex problems
          into simple, elegant solutions that users adore.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
          <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-3" />
          <h4 className="font-semibold text-gray-800">Location</h4>
          <p className="text-gray-600">San Francisco, CA</p>
        </div>
        <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
          <Calendar className="w-8 h-8 text-green-600 mx-auto mb-3" />
          <h4 className="font-semibold text-gray-800">Experience</h4>
          <p className="text-gray-600">5+ Years</p>
        </div>
        <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
          <Award className="w-8 h-8 text-purple-600 mx-auto mb-3" />
          <h4 className="font-semibold text-gray-800">Projects</h4>
          <p className="text-gray-600">50+ Completed</p>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
