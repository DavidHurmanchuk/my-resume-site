"use client";
import { motion } from "framer-motion";
import { experienceJobs } from "../constants/experience";

export default function Experience() {
  return (
    <section className="py-20 px-4 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto relative">
        <h3 className="text-4xl font-extrabold text-center text-blue-400 mb-16 cursor-default">
          Experience
        </h3>

        <div className="absolute left-2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-blue-300 rounded-full" />

        <div className="space-y-16 pl-12">
          {experienceJobs.map((job, index) => (
            <motion.div
              key={index}
              style={{
                willChange: "transform, opacity",
                transform: "translateZ(0)",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative bg-gray-800 border border-gray-700 rounded-2xl p-6 shadow-xl 
                         motion-safe:transform-gpu transition-transform duration-300 
                         hover:shadow-blue-500/40 hover:-translate-y-1 cursor-default"
            >
              <div className="absolute left-[-14px] top-1/2 -translate-y-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-gray-950 shadow-md" />

              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">{job.emoji}</span>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">
                    {job.title}
                  </h4>
                  <p className="text-sm text-gray-400 italic">{job.date}</p>
                </div>
              </div>

              <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm">
                {job.bullets.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
