import { useState, useEffect } from "react";

const Loader = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    setTimeout(() => setFadeOut(true), 1800);
    setTimeout(() => setHide(true), 2500);
  }, []);

  if (hide) return null;

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center transition-opacity duration-700 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 animate-gradient"></div>

      {/* Floating Particles */}
      <div
        className="absolute inset-0 flex justify-center items-center"
        aria-hidden="true"
      >
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-white opacity-40 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${1.5 + Math.random()}s`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Staggered Bouncing Dots Loader */}
      <div className="relative z-10 flex space-x-2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`w-4 h-4 bg-white rounded-full animate-bounce`}
            style={{
              animationDelay: `${i * 0.3}s`, // Creates the sequential bounce effect
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Loader;
