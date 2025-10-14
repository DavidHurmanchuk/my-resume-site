"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const userName = "David Hurmanchuk";
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ["Home", "About", "Projects"];

  const getNavItemProps = (item: string) => {
    const path =
      item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`;
    let isActive = pathname === path;
    if (path !== "/" && pathname.startsWith(path)) isActive = true;
    return { path, isActive };
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: -15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="sticky top-0 z-50 bg-gray-900 border-b border-gray-700 shadow-xl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <Link
              href="/"
              title={`Перейти до Home, ${userName}`}
              className="text-2xl font-extrabold text-blue-400 hover:text-white transition duration-300 hover:scale-105 tracking-wide"
            >
              {userName}
            </Link>
          </motion.div>

          <motion.nav
            className="hidden md:flex space-x-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {navItems.map((item) => {
              const { path, isActive } = getNavItemProps(item);
              const underlineClasses = isActive
                ? "scale-x-100"
                : "scale-x-0 group-hover:scale-x-100";

              return (
                <motion.div key={item} variants={itemVariants}>
                  <Link
                    href={path}
                    className={`
                      relative text-gray-300 hover:text-white px-3 py-2 text-2xl font-bold transition duration-300 group hover:scale-110
                      ${isActive ? "text-white" : ""}
                    `}
                  >
                    {item}
                    <span
                      className={`
                        absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-blue-500 w-full origin-center 
                        transition-transform duration-300 ease-out
                        ${underlineClasses} 
                      `}
                      aria-hidden="true"
                    />
                  </Link>
                </motion.div>
              );
            })}
          </motion.nav>

          <motion.div
            className="hidden md:flex items-center space-x-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              {
                href: "https://www.linkedin.com/in/david-hurmanchuk/",
                src: "/linkedin.svg",
                alt: "LinkedIn",
              },
              {
                href: "https://github.com/DavidHurmanchuk",
                src: "/github.svg",
                alt: "GitHub",
              },
              {
                href: "https://t.me/gitakuro",
                src: "/telegram.svg",
                alt: "Telegram",
              },
            ].map(({ href, src, alt }) => (
              <motion.a
                key={alt}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition hover:scale-110"
                title={alt}
                variants={itemVariants}
              >
                <Image src={src} alt={alt} width={32} height={32} />
              </motion.a>
            ))}
          </motion.div>

          <motion.button
            className="md:hidden text-gray-300 hover:text-white focus:outline-none z-[100]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <svg
              className="h-8 w-8"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </motion.button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="fixed inset-0 bg-gray-900/95 backdrop-blur-md z-40 flex flex-col items-center justify-start py-10 md:hidden"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="flex flex-col items-center justify-center p-8 border-b border-gray-700/50 w-full mb-8">
                <Link
                  href="/"
                  onClick={() => setMenuOpen(false)}
                  className="text-3xl font-extrabold text-blue-400 hover:text-white transition duration-300 hover:scale-105"
                >
                  {userName}
                </Link>
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col items-center space-y-4 px-4 w-full"
              >
                {navItems.map((item) => {
                  const { path, isActive } = getNavItemProps(item);
                  return (
                    <motion.div
                      key={item}
                      variants={itemVariants}
                      className="w-6/12"
                    >
                      <Link
                        href={path}
                        className={`
                          w-full text-center block text-2xl font-extrabold py-3 rounded-xl transition duration-150
                          ${
                            isActive
                              ? "text-white bg-blue-600/80 shadow-lg shadow-blue-500/30"
                              : "text-gray-300 hover:text-white hover:bg-gray-800/70"
                          }
                        `}
                        onClick={() => setMenuOpen(false)}
                      >
                        {item}
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.div>

              <motion.div
                className="flex justify-center space-x-15 pt-10 mt-auto pb-8 w-full"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {[
                  {
                    href: "https://www.linkedin.com/in/david-hurmanchuk/",
                    src: "/linkedin.svg",
                    alt: "LinkedIn",
                  },
                  {
                    href: "https://github.com/DavidHurmanchuk",
                    src: "/github.svg",
                    alt: "GitHub",
                  },
                  {
                    href: "https://t.me/gitakuro",
                    src: "/telegram.svg",
                    alt: "Telegram",
                  },
                ].map(({ href, src, alt }) => (
                  <motion.a
                    key={alt}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="scale-150 transition duration-300"
                    variants={itemVariants}
                  >
                    <Image src={src} alt={alt} width={40} height={40} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
