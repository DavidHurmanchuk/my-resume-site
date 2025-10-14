import Link from "next/link";

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] py-16 text-center bg-gray-950 text-white">
      <h1 className="text-8xl font-extrabold text-blue-500 mb-4">404</h1>

      <p className="text-3xl font-semibold mb-8 text-gray-300">
        Page Not Found
      </p>

      <p className="text-xl text-gray-400 mb-10 max-w-lg">
        Sorry, it seems that this page has gotten lost in cyberspace. Let`s
        return to safe ground.
      </p>

      <Link
        href="/"
        className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg 
                   transition duration-300 transform hover:scale-105"
      >
        Back To Home
      </Link>
    </div>
  );
}
