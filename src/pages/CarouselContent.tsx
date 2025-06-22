import {
  Briefcase,
  ChevronLeft,
  ChevronRight,
  Code,
  Mail,
  User,
} from "lucide-react";
import { useEffect, useState } from "react";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

interface CarouselSlide {
  id: string;
  title: string;
  icon: React.ElementType;
  content: React.ReactNode;
}

const CarouselContent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides: CarouselSlide[] = [
    {
      id: "about",
      title: "About Me",
      icon: User,
      content: <AboutMe />,
    },
    {
      id: "skills",
      title: "Skills & Expertise",
      icon: Code,
      content: <Skills />,
    },
    {
      id: "projects",
      title: "Featured Projects",
      icon: Briefcase,
      content: <Projects />,
    },
    {
      id: "contact",
      title: "Get In Touch",
      icon: Mail,
      content: <Contact />,
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  return (
    <div className="container mx-auto px-6 py-0">
      <div
        className="relative bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Navigation Tabs */}
        <div className="flex border-b border-gray-200 bg-gray-50">
          {slides.map((slide, index) => {
            const Icon = slide.icon;
            return (
              <button
                key={slide.id}
                onClick={() => goToSlide(index)}
                className={`flex-1 flex items-center justify-center space-x-2 py-4 px-6 font-medium transition-all duration-200 ${
                  currentSlide === index
                    ? "bg-white text-blue-600 border-b-2 border-blue-600 shadow-sm"
                    : "text-gray-600 hover:text-blue-600 hover:bg-white"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="hidden sm:inline">{slide.title}</span>
              </button>
            );
          })}
        </div>

        {/* Carousel Content */}
        <div className="relative min-h-[600px] overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out h-full"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="w-full flex-shrink-0 p-8 md:p-12">
                <div className="h-full flex items-center justify-center">
                  {slide.content}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-100 shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 hover:shadow-xl transition-all duration-200 z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-100 shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 hover:shadow-xl transition-all duration-200 z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center space-x-2 p-6 bg-gray-50">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                currentSlide === index
                  ? "bg-blue-600 scale-110"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default CarouselContent;
