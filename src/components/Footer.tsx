import React from "react";
import Image from "next/image";
import Link from "next/link";

const BackToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        px-5 py-2 bg-gray-700 text-white rounded-lg shadow-lg hover:bg-gray-600 transition duration-300 text-base font-bold flex items-center justify-center space-x-1 cursor-pointer border border-gray-600
        opacity-100 translate-y-0 
      `}
      aria-label="На початок сторінки"
      title="На початок сторінки"
      style={{ transition: "opacity 0.5s ease, transform 0.5s ease" }}
    >
      <Image
        src="/arrow-up.svg"
        alt="↑"
        width={20}
        height={20}
        className="w-5 h-5"
      />
      <span>На початок</span>
    </button>
  );
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-4 mt-12 border-t border-gray-700 tracking-wide">
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-6">
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
          <BackToTopButton />

          <button
            className="px-5 py-2 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 transition duration-300 text-base font-bold cursor-pointer border border-green-500"
            onClick={() =>
              console.log(
                "This site was created with love and attention to detail. Author: David Hurmanchuk."
              )
            }
          >
            Built by DavidH
          </button>

          <Link
            href="/"
            className="px-5 py-2 bg-gray-700 text-white rounded-lg shadow-lg hover:bg-gray-600 transition duration-300 text-base font-bold text-center block border border-gray-600"
            title="Перейти на головну сторінку"
          >
            Back To Home
          </Link>
        </div>

        <div className="flex flex-wrap justify-center space-x-6 text-lg pt-4 border-t border-gray-800 w-full sm:w-auto">
          <a
            href="https://t.me/gitakuro"
            className="text-white hover:text-blue-500 transition duration-300 flex items-center space-x-1 font-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/telegram.svg"
              alt="Telegram"
              width={20}
              height={20}
              className="w-5 h-5"
            />
            <span>Telegram</span>
          </a>
          <a
            href="https://github.com/gitakuro"
            className="text-white hover:text-blue-500 transition duration-300 flex items-center space-x-1 font-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/github.svg"
              alt="GitHub"
              width={20}
              height={20}
              className="w-5 h-5"
            />
            <span>GitHub</span>
          </a>
        </div>

        <div className="mt-4 text-center text-sm text-gray-500 cursor-default">
          &copy; {new Date().getFullYear()} All right reserved.
        </div>
      </div>
    </footer>
  );
}
