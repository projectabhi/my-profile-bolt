import React, { useEffect, useRef, useState } from "react";
import { Code, Zap } from "lucide-react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const loadingSteps = [
  "Initializing Matrix...",
  "Loading Neural Networks...",
  "Compiling Code Fragments...",
  "Establishing Connection...",
  "Synchronizing Data Streams...",
  "Welcome to the Matrix",
];

// Use Tailwind utility classes for all styling, matching App's bg and layout
const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState(loadingSteps[0]);
  const [isComplete, setIsComplete] = useState(false);
  const progressInterval = useRef<number | null>(null);

  // Start loading progress
  useEffect(() => {
    const duration = 3000; // 3 seconds total loading time
    const stepDuration = duration / 100;
    let currentProgress = 0;

    progressInterval.current = window.setInterval(() => {
      currentProgress += 1;
      const stepIndex = Math.floor(
        (currentProgress / 100) * (loadingSteps.length - 1)
      );
      setProgress(currentProgress);
      setLoadingText(loadingSteps[stepIndex]);

      if (currentProgress >= 100) {
        if (progressInterval.current) clearInterval(progressInterval.current);
        setIsComplete(true);
        setTimeout(() => {
          onLoadingComplete();
        }, 500);
      }
    }, stepDuration);

    return () => {
      if (progressInterval.current) clearInterval(progressInterval.current);
    };
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Overlay for darkening effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-600 to-gray-900 opacity-80"></div>

      {/* Animated Matrix Grid */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-full w-px bg-gradient-to-b from-transparent via-blue-400/30 to-transparent animate-pulse"
            style={{
              left: `${(i + 1) * 5}%`,
              animationDelay: `${i * 0.1}s`,
              animationDuration: "2s",
            }}
          />
        ))}
        {/* Scanning Line Effect */}
        <div
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-60 animate-pulse"
          style={{
            top: `${20 + progress * 0.6}%`,
            transition: "top 0.1s ease-out",
          }}
        />
      </div>

      {/* Loading Content */}
      <div className="relative z-10 text-center max-w-md mx-auto px-6">
        {/* Logo/Icon */}
        <div className="mb-8 relative">
          <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center shadow-2xl shadow-blue-400/50 animate-pulse">
            <Code className="w-10 h-10 text-black" />
          </div>
          <div
            className="absolute inset-0 w-20 h-20 mx-auto border-2 border-blue-400/50 rounded-full animate-spin"
            style={{ animationDuration: "3s" }}
          ></div>
        </div>

        {/* Loading Text */}
        <h2 className="text-2xl font-bold text-gray-900 mb-2 tracking-wide">
          Abhijit Dey
        </h2>
        <p className="text-blue-600 mb-8 font-mono text-sm tracking-wider">
          {loadingText}
        </p>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-gray-400 font-mono">LOADING</span>
            <span className="text-xs text-blue-600 font-mono">{progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden border border-blue-400/30">
            <div
              className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full transition-all duration-100 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/30 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Matrix-style Loading Dots */}
        <div className="flex justify-center space-x-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
              style={{
                animationDelay: `${i * 0.2}s`,
                animationDuration: "1s",
              }}
            />
          ))}
        </div>

        {/* Completion Message */}
        {isComplete && (
          <div className="mt-6 animate-fade-in">
            <div className="flex items-center justify-center space-x-2 text-blue-600">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-mono">Connection Established</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoadingScreen;
