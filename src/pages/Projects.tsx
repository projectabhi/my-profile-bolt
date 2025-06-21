import { Star } from "lucide-react";

const Projects = () => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Recent Work</h3>
        <p className="text-gray-600 text-lg">Some projects I'm proud of</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {[
          {
            title: "E-Commerce Platform",
            description:
              "Full-stack shopping platform with React, Node.js, and Stripe integration",
            tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
            image:
              "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
            stars: 4.9,
          },
          {
            title: "Task Management App",
            description:
              "Collaborative productivity app with real-time updates and team features",
            tech: ["Next.js", "TypeScript", "Prisma", "WebSockets"],
            image:
              "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
            stars: 4.8,
          },
          {
            title: "AI Analytics Dashboard",
            description:
              "Data visualization platform with machine learning insights",
            tech: ["Python", "React", "D3.js", "TensorFlow"],
            image:
              "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
            stars: 4.9,
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
            key={project.title}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover opacity-80"
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
};
export default Projects;
