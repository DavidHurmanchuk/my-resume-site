"use client";
import React from "react";
import Image from "next/image";
import { FiExternalLink, FiMail } from "react-icons/fi";
import { motion } from "framer-motion";

const HomePage = () => {
  const myEmail = "davidhurmanchuk@gmail.com";
  const resumePath = "/Hurmanchuk_CV.pdf";
  const heroImagePath = "/legushkapepe.jpg";

  const slideLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const slideRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="min-h-[calc(100vh-6rem)] flex items-center py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={slideRight}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-8/12 order-2 md:order-1 flex justify-center"
          >
            <div className="relative w-full max-w-sm h-auto aspect-square">
              <Image
                src={heroImagePath}
                alt="Illustration of a programmer"
                width={1200}
                height={1200}
                className="w-full h-full object-contain rounded-2xl"
              />
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={slideLeft}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-7/12 order-1 md:order-2"
          >
            <motion.h1
              variants={slideLeft}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight cursor-default"
            >
              Turning Vision Into Reality Through Code, Structure, and Adaptive
              Design
            </motion.h1>

            <motion.p
              variants={slideLeft}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-xl font-semibold cursor-default"
            >
              I’m a frontend developer focused on building adaptive,
              reproducible interfaces with React, Next.js, TypeScript, Tailwind
              v4.1, and SCSS.
              <br className="my-2" />I manually structure every project, refine
              every detail, and ensure clean, professional presentation — from
              layout to animation.
            </motion.p>

            <motion.div
              variants={slideLeft}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href={resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 
                           px-6 py-3 rounded-lg shadow-xl font-semibold text-lg border border-transparent
                           transition duration-300 hover:bg-gray-700 dark:hover:bg-gray-300 
                           transform hover:scale-[1.05]"
              >
                Resume
                <FiExternalLink className="w-5 h-5" />
              </a>

              <a
                href={`mailto:${myEmail}?subject=Запит%20з%20Вашого%20Портфолио`}
                className="flex items-center justify-center gap-2 text-gray-900 dark:text-gray-100 
                           px-6 py-3 rounded-lg font-semibold text-lg border border-gray-900 dark:border-gray-100 
                           transition duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 
                           transform hover:scale-[1.05]"
              >
                Contact
                <FiMail className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
