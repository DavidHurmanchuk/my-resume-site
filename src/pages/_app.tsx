"use client";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Header />

      <AnimatePresence mode="wait">
        <motion.main
          key={router.route}
          initial={{ opacity: 0, scale: 0.98, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: -20 }}
          transition={{
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1],
          }}
          className="flex-1 px-4"
        >
          <Component {...pageProps} />
        </motion.main>
      </AnimatePresence>

      <Footer />
    </div>
  );
}

export default MyApp;
