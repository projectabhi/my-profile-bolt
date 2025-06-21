import Footer from "./components/Footer";
import Header from "./components/Header";
import MobileView from "./pages/MobileView";
import CarouselContent from "./pages/CarouselContent";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Compact Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-black via-gray-600 to-gray-900">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 container mx-auto px-6 py-12">
          <Header />
          {/* Mobile social icons */}
          <MobileView />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </div>

      {/* Carousel Section */}
      <CarouselContent />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
