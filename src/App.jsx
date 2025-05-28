import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import ServicePage from './pages/ServicePage';
import Blog from './pages/Blog';
import BlogStandard from './pages/BlogStandard';
import About from './pages/About';
import Contact from './pages/Contact';
import ErrorBoundary from './components/ErrorBoundary';
import ServiceDetailsPage from "./pages/ServiceDetailsPage";

const App = () => {
  const isDarkMode = useSelector((state) => state.ui.isDarkMode);

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}>
        <ErrorBoundary>
      <Header />
          <main className="pt-20 flex-grow">
      <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/service-1" element={<ServicePage />} />
              <Route path="/services/service-2" element={<ServicePage />} />
              <Route path="/services/service-details" element={<ServiceDetailsPage />} />
              <Route path="/services/:serviceId" element={<ServiceDetailsPage />} />
        <Route path="/blog" element={<Blog />} />
              <Route path="/blog-standard" element={<BlogStandard />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
      </Routes>
          </main>
          <Footer />
        </ErrorBoundary>
      </div>
    </Router>
  );
};

export default App;
