import React, { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");
    setIsLoading(true);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 25);

    const timer = setTimeout(() => {
      setIsLoading(false);
      if (!hasVisited) {
        localStorage.setItem("hasVisited", "true");
      }
    }, 2800);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black flex flex-col items-center justify-center min-h-screen w-full z-50 px-4">
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 2}s linear infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Main content container - Added max-width and centering */}
      <div className="relative w-full max-w-md mx-auto flex flex-col items-center justify-center">
        {/* Main loading container */}
        <div className="relative group">
          {/* Outer rotating rings - Adjusted for mobile */}
          <div className="absolute -inset-8 sm:-inset-10 border-4 border-blue-500/20 rounded-full animate-[spin_4s_linear_infinite] blur-sm" />
          <div className="absolute -inset-6 sm:-inset-8 border-4 border-cyan-500/20 rounded-full animate-[spin_3s_linear_infinite_reverse] blur-sm" />
          <div className="absolute -inset-4 sm:-inset-6 border-4 border-teal-500/20 rounded-full animate-[spin_2s_linear_infinite] blur-sm" />

          {/* Main circle with progress - Adjusted size for mobile */}
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 p-1 animate-pulse shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow duration-300">
            <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
              <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
                {progress}%
              </div>
            </div>
          </div>
        </div>

        {/* Title with animated gradient - Adjusted spacing and size for mobile */}
        <div className="mt-12 sm:mt-16 space-y-2 text-center w-full">
          <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 animate-pulse">
            Portfolio
          </h1>
          <p className="text-sm text-gray-400">Loading your experience...</p>
        </div>
      </div>

      {/* Bottom progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-800">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
