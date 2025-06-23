import { Star } from "lucide-react";
import { memo } from "react";
import logoSbicard from "../assets/logo_sbicard.png";
import logoFiserv from "../assets/fiserv-logo-orange-ff6600.svg";
import logoAurora from "../assets/aurora_logo.png";

const Projects = memo(() => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Recent Work</h3>
        <p className="text-gray-600 text-lg">Some projects I'm proud of</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {[
          {
            title: "Unified Merchant Master",
            description: "Integrated Merchant boarding platform",
            tech: ["GraphQL", "Spring Boot", "Aurora", "AWS", "React"],
            image: logoFiserv,
            stars: 4.9,
          },
          {
            title: "Loan Originations System",
            description:
              "Loan sourcing, verification and underwriting application",
            tech: ["Spring MVC", "Spring Boot", "JSP", "Apache Camel"],
            image: logoSbicard,
            stars: 4.9,
          },
          {
            title: "Aurora Healthcare",
            description:
              "Billing, staffing, generating report of all the transactions, process flow management application",
            tech: ["Spring MVC", "Angular", "Oracle"],
            image: logoAurora,
            stars: 4.5,
          },
          {
            title: "Social Media API",
            description:
              "RESTful API serving 10M+ requests daily with Redis caching",
            tech: ["Node.js", "Express", "Redis", "Docker"],
            image:
              "https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
            stars: 4.7,
          },
        ].map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="h-48 bg-gradient-to-br from-gray-50 to-gray-200 relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-none opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h4 className="text-xl font-bold text-gray-800">
                  {project.title}
                </h4>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-gray-600">
                    {project.stars}
                  </span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});
export default Projects;
