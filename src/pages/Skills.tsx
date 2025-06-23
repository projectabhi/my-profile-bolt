import { memo } from "react";
import { skillsExpertise } from "../data/SkillsNExpertise";

const Skills = memo(() => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Technical Arsenal
        </h3>
        <p className="text-gray-600 text-lg">
          Technologies I love working with
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {skillsExpertise.map((skill) => (
          <div
            key={skill.name}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
          >
            <div className="flex justify-between items-center mb-3">
              <h4 className="font-semibold text-gray-800">{skill.name}</h4>
              <span className="text-sm font-medium text-gray-600">
                {skill.level}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                style={{ width: `${skill.level * 20}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});
export default Skills;
