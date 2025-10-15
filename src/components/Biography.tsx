"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Biography() {
  return (
    <section className="py-20 px-4 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <motion.div
          style={{
            willChange: "transform, opacity",
            transform: "translateZ(0)",
          }}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-sm flex-shrink-0 motion-safe:transform-gpu"
        >
          <Image
            src="/lagushonokpepeclub.jpg"
            alt="Пес патрончік"
            width={400}
            height={500}
            className="shadow-xl border border-gray-700 object-cover rounded-2xl"
          />
        </motion.div>

        <motion.div
          style={{
            willChange: "transform, opacity",
            transform: "translateZ(0)",
          }}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 motion-safe:transform-gpu"
        >
          <h2 className="text-4xl font-extrabold text-blue-400 mb-6 cursor-default">
            BIOGRAPHY
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 cursor-default">
            Hi, I’m David Hurmanchuk — a frontend developer and UI engineer. I
            specialize in building adaptive, animated, and reproducible web
            interfaces using React, Next.js, Tailwind v4.1, and Framer Motion.
            <br />
            <br />I thrive in autonomous workflows and love refining every
            detail — from theme toggles and sticky sidebars to smooth mobile
            transitions. My goal is to deliver interfaces that feel intuitive,
            professional, and technically sound.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center cursor-default">
            {[
              { value: "∞", label: "UI Components Built" },
              { value: "100%", label: "Custom Project Structure" },
              { value: "∞", label: "Ideas in Progress" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-gray-800 border border-gray-700 rounded-xl p-4 shadow-md hover:shadow-blue-500/30 transition-transform duration-300 hover:-translate-y-1"
              >
                <p className="text-3xl font-bold text-blue-400">{item.value}</p>
                <p className="text-sm text-gray-400 mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
