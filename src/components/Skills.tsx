"use client";
import { categorizedSkills } from "../constants/skills";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section className="py-20 px-4 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-extrabold mb-16 text-center text-blue-400 cursor-default">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {categorizedSkills.map((categoryData) => (
            <motion.div
              key={categoryData.category}
              style={{
                willChange: "transform, opacity",
                transform: "translateZ(0)",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-gray-800 border border-gray-700 p-6 rounded-2xl shadow-2xl 
                         motion-safe:transform-gpu transition-transform duration-300 
                         hover:shadow-blue-500/40 hover:-translate-y-1 cursor-default"
            >
              <h3 className="text-2xl font-bold text-blue-400 mb-6 border-b border-gray-700 pb-2">
                {categoryData.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {categoryData.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-700 text-gray-200 px-4 py-1.5 rounded-lg text-sm font-semibold 
                               transition-transform duration-200 hover:scale-[1.05] hover:bg-blue-600 hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-300 mb-6 border-b border-gray-700 inline-block pb-2 cursor-default">
            Soft Skills & Languages
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Communication",
              "Autonomy",
              "Fast Learning",
              "Empathy",
              "English (B2)",
              "Ukrainian (Native)",
            ].map((softSkill) => (
              <span
                key={softSkill}
                className="bg-gray-700/50 text-gray-400 px-4 py-1.5 rounded-full text-sm font-medium 
                           border border-gray-600 transition-transform duration-200 
                           hover:bg-blue-600 hover:text-white hover:scale-[1.05] cursor-default"
              >
                {softSkill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
