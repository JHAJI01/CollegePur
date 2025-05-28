import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import internshipImage from '../assets/internship.jpg';
// Import new images for case studies
import caseStudyImage1 from '../assets/01.webp'; // Corrected extension
import caseStudyImage2 from '../assets/02.webp'; // Corrected extension
import caseStudyImage3 from '../assets/03.webp'; // Corrected extension
import CounterBox from '../components/CounterBox';
import SectionTitle from '../components/SectionTitle';
import TeamMember from '../components/TeamMember';
import Testimonial from '../components/Testimonial';
import BlogPost from '../components/BlogPost';

const Home = () => {
  const isDarkMode = useSelector((state) => state.ui.isDarkMode);
  const [currentImage, setCurrentImage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Using the same image for all slides
  const images = [internshipImage, internshipImage, internshipImage];

  // Data for the new "What We Do" section, based on the provided image
  const servicesData = [
    {
      title: "IT Soluations", // Typo from image kept
      description: "Sed ut perspiciatis unde omnis iste natus error volup",
      // Placeholder SVG icons resembling the image
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      iconColorClass: "text-teal-500",
    },
    {
      title: "Security System",
      description: "Sed ut perspiciatis unde omnis iste natus error volup",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      iconColorClass: "text-blue-600",
    },
    {
      title: "Web Development",
      description: "Sed ut perspiciatis unde omnis iste natus error volup",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      iconColorClass: "text-yellow-500",
    },
    {
      title: "Database Security",
      description: "Sed ut perspiciatis unde omnis iste natus error volup",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      iconColorClass: "text-red-500",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  // Case study images
  const caseStudyImages = [
    caseStudyImage1,
    caseStudyImage2,
    caseStudyImage3,
  ];
  // State for manual case study image cycling
  const [currentCaseStudyStartIndex, setCurrentCaseStudyStartIndex] = useState(0);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Internship Image Section */}
      <section className="w-full py-8">
        <div className="relative w-full overflow-hidden rounded-2xl">
            <div className="relative w-full h-[800px]">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
                    currentImage === index
                      ? 'opacity-100 z-10'
                      : 'opacity-0 z-0'
                  }`}
                  style={{
                    willChange: 'opacity',
                    transform: 'translateZ(0)',
                    backfaceVisibility: 'hidden'
                  }}
                  loading={index === 0 ? "eager" : "lazy"}
                />
              ))}
            </div>
            
            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentImage(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentImage === index 
                      ? 'bg-white scale-125' 
                      : 'bg-white/50 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>

            {/* Our Services Button */}
            <div className={`absolute bottom-12 left-12 z-20 transition-all duration-500 ${
              isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}>
              <Link to="/services/service-1">
                <button className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Our Services →
                </button>
              </Link>
            </div>
          </div>
      </section>

      {/* New "What We Do" Section - based on provided image */}
      <section className={`py-20 ${
          isDarkMode ? 'bg-gray-900' : 'bg-gray-100'
      }`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold mb-2">SERVICES</p>
            <h2 className={`text-4xl md:text-5xl font-bold ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              What We Do
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicesData.map((service, index) => (
              <div
                key={index}
                className={`service-item text-center p-8 rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer ${
                  isDarkMode
                    ? 'bg-gray-800 hover:bg-blue-900 text-gray-300 hover:text-white'
                    : 'bg-white hover:bg-blue-600 text-gray-800 hover:text-white'
                }`}
              >
                <div className={`icon mx-auto mb-6 w-16 h-16 flex items-center justify-center rounded-full border-2 transition-colors duration-300 ${
                    isDarkMode
                      ? 'border-gray-600 bg-gray-700 group-hover:border-blue-700 group-hover:bg-blue-800'
                      : 'border-gray-300 bg-white group-hover:border-400 group-hover:bg-blue-50'
                }`}>
                    {/* Render SVG icon with dynamic color */}
                    <div className={`text-4xl transition-colors duration-300 ${
                        service.iconColorClass
                    } group-hover:text-white`}>
                        {service.icon}
                    </div>
                </div>
                <h5 className={`title text-xl font-semibold mb-3 transition-colors duration-300 ${
                  isDarkMode ? 'text-white group-hover:text-white' : 'text-gray-900 group-hover:text-white'
                }`}>
                  <a href="#" className={`${isDarkMode ? 'text-white group-hover:text-white' : 'text-gray-900 group-hover:text-white'}`}>{service.title}</a>
                </h5>
                <p className={`text-sm transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300 group-hover:text-gray-200' : 'text-gray-600 group-hover:text-white'
                }`}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New "Get More Good Experience" Section - based on image */}
      <section className={`py-20 ${
          isDarkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Images on the left */}
            <div className="w-full md:w-1/2 relative">
              <img
                src={internshipImage}
                alt="Team working at computer"
                className="rounded-lg shadow-xl mb-6 md:mb-0 transform -rotate-3 transition-transform duration-500 hover:rotate-0 w-full"
              />
              <img
                src={internshipImage}
                alt="Team discussing ideas"
                className="rounded-lg shadow-xl md:absolute md:bottom-0 md:right-0 w-2/3 transform rotate-3 transition-transform duration-500 hover:rotate-0"
              />
            </div>
            {/* Text content on the right */}
            <div className="w-full md:w-1/2">
                <p className="text-blue-600 font-semibold mb-2">CORE FEATURES</p>
              <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Get More Good<br/>Experience.
              </h2>
              <h3 className={`text-xl font-semibold mb-4 ${
                  isDarkMode ? 'text-white' : 'text-gray-800'
              }`}>
                  Our knowledge of computers will help us
              </h3>
              <p className={`mb-8 leading-relaxed ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Does any industry face a more complex audience journey and marketing
                sales process than B2B technology? Consider the number of people who
                influence a B2B technology purchase, including users, recommenders,
                interests of the people who purchase, implement, manage, and use the
                technology. It's a lot meaningful content here.
              </p>
              <div className="flex space-x-4">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                  Learn More
                </button>
                <Link to="/about">
                  <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                    Intro Video
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New "Our Latest Services" Section - based on provided image */}
      <section className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold mb-2">OUR LATEST SERVICES</p>
            <h2 className={`text-4xl md:text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              We Offer Better Soluation<br/>For Your IT Business
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service cards based on the provided image */}
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <div
                key={index}
                className={`service-item text-center p-8 rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-2 group ${isDarkMode 
                      ? 'bg-gray-800 text-gray-300' // Dark mode default
                      : 'bg-white text-gray-800' // Light mode default
                }`}
              >
                <div className={`icon mx-auto mb-6 w-16 h-16 flex items-center justify-center rounded-full border-2 transition-colors duration-300 ${isDarkMode
                      ? 'border-gray-600 bg-gray-700' // Dark mode icon circle default
                      : 'border-gray-300 bg-white' // Light mode icon circle default
                }`}>
                    {/* Placeholder icon matching the image style */}
                    <div className={`text-4xl transition-colors duration-300 ${// Different colors for icons based on the image
                        index % 3 === 0 ? 'text-red-500' : index % 3 === 1 ? 'text-yellow-500' : 'text-blue-600'
                    }`}> 
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 4l-4 4 4 4" />
                        </svg>
                    </div>
                </div>
                <h5 className={`title text-xl font-semibold mb-3 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  <a href="#" className={`${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{`Desktop Computing`}</a>
                </h5>
                <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantiutotam
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New "Latest Case Studies" Section - based on provided image */}
      <section className={`py-20 bg-blue-600`}>
        <div className="container mx-auto px-4 text-white">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <p className="text-sm font-semibold mb-2">LATEST CASE STUDIES</p>
              <h2 className="text-4xl md:text-5xl font-bold">
                Reads Our Recent Case Studies
              </h2>
            </div>
            {/* Button remains */}
            <button className="mt-6 md:mt-0 p-4 rounded-full bg-white text-blue-600 shadow-lg transition-colors duration-300 hover:bg-gray-200"
              // Add onClick handler to cycle case studies
              onClick={() => {
                setCurrentCaseStudyStartIndex((prevIndex) => (prevIndex + 1) % caseStudyImages.length);
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
          {/* Grid display for case studies with hover effect */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {/* Map images based on current start index */}
            {caseStudyImages.slice(currentCaseStudyStartIndex).concat(caseStudyImages.slice(0, currentCaseStudyStartIndex)).slice(0, 3).map((image, index) => (
              <div key={index} className="relative rounded-lg overflow-hidden shadow-lg group cursor-pointer w-full aspect-square">
                <img
                  src={image}
                  alt={`Case Study ${index + 1}`}
                  className="w-full h-full object-cover transform -rotate-2 transition-all duration-700 ease-in-out group-hover:rotate-0 opacity-100"
                />
                 {/* Overlay for hover effect */}
                 <div className="absolute inset-0 bg-blue-800 bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="flex justify-between items-center w-full">
                        <div>
                            <p className="text-sm font-semibold mb-1">IT / Solutions</p>
                            <h3 className="text-xl font-bold">How To Improve IT knowledge</h3>
                        </div>
                        <div className="p-3 rounded-full border-2 border-white text-white">
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </div>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={`py-20 ${
        isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-semibold mb-2">WHY CHOOSE US</p>
            <h2 className={`text-4xl md:text-5xl font-bold ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Why We Are The Best
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className={`p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            }`}>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className={`text-xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Expert Team
              </h3>
              <p className={`${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Our team consists of highly skilled professionals with years of experience in the industry.
              </p>
            </div>

            {/* Feature 2 */}
            <div className={`p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            }`}>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className={`text-xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Fast Delivery
              </h3>
              <p className={`${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                We ensure quick turnaround times without compromising on quality.
              </p>
            </div>

            {/* Feature 3 */}
            <div className={`p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            }`}>
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className={`text-xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Best Value
              </h3>
              <p className={`${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                We offer competitive pricing while maintaining the highest standards of service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Counter Section */}
      <section className={`py-20 ${isDarkMode ? 'bg-blue-900' : 'bg-blue-600'}`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <CounterBox
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              }
              count="280"
              title="Our Branches"
              iconBgColor="bg-[#00978e]"
            />

            <CounterBox
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              }
              count="782"
              title="Projects Done"
              iconBgColor="bg-[#0c59db]"
            />

            <CounterBox
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              }
              count="1M"
              title="Happy Users"
              iconBgColor="bg-[#00978e]"
            />

            <CounterBox
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              }
              count="100"
              title="Awards"
              iconBgColor="bg-[#0c59db]"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            tag="Our Team Member"
            title="Meet Our Exclusive Leadership"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <TeamMember
              image="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&h=500&fit=crop"
              name="John Smith"
              position="CEO & Founder"
            />
            <TeamMember
              image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=500&fit=crop"
              name="Sarah Johnson"
              position="CTO"
            />
            <TeamMember
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=500&fit=crop"
              name="Michael Brown"
              position="Lead Developer"
            />
            <TeamMember
              image="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&h=500&fit=crop"
              name="Emily Davis"
              position="Design Director"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="section-title text-center mb-16">
            <span className="text-blue-600 font-semibold block mb-2">Client Testimonials</span>
            <h2 className="text-4xl font-bold text-gray-900">What our clients say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Testimonial
              quote="Working with Omnivus has been a game-changer for our business. Their IT solutions have significantly improved our efficiency and productivity."
              author="David Wilson"
              position="CEO, TechCorp"
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
            />
            <Testimonial
              quote="The team at Omnivus is incredibly professional and knowledgeable. They've helped us modernize our infrastructure and stay ahead of the competition."
              author="Lisa Anderson"
              position="CTO, InnovateTech"
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop"
            />
            <Testimonial
              quote="Their security solutions have given us peace of mind. We know our data is safe and our systems are protected."
              author="Robert Chen"
              position="Security Director, DataSafe"
              image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop"
            />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-7/12 lg:w-7/12 mb-8 md:mb-0">
              <div className="section-title text-white">
                <span className="text-white/80 font-semibold block mb-2">CALL TO ACTION</span>
                <h2 className="text-4xl font-bold">
                  Let's Discuss With Us Your Estimate.
          </h2>
              </div>
            </div>
            <div className="w-full md:w-4/12 lg:w-4/12 flex justify-end">
              <a 
                href="#" 
                className="inline-flex items-center justify-center px-11 py-5 bg-white text-[#0c59db] text-base font-bold rounded-[5px] transition-colors duration-300 hover:bg-[#002249] hover:text-white"
              >
                <i className="fas fa-comments mr-2"></i>
                Contact Us
              </a>
              </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="section-title text-center mb-12">
            <span className="text-blue-600 font-semibold block mb-2">Latest News</span>
            <h2 className="text-4xl font-bold text-gray-900">
              Read Our Latest <br /> News & Blog
          </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="col-lg-4 col-md-6 col-sm-8">
              <BlogPost
                image="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop"
                date="March 15, 2024"
                title="The Future of Cloud Computing in 2024"
                excerpt="Explore the latest trends and innovations in cloud computing that are shaping the future of technology."
                author="John Smith"
                authorImage="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8">
              <BlogPost
                image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=500&fit=crop"
                date="March 10, 2024"
                title="Cybersecurity Best Practices for Businesses"
                excerpt="Learn essential cybersecurity measures to protect your business from evolving digital threats."
                author="Sarah Johnson"
                authorImage="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8">
              <BlogPost
                image="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop"
                date="March 5, 2024"
                title="Digital Transformation Strategies"
                excerpt="Discover effective strategies for implementing digital transformation in your organization."
                author="Michael Brown"
                authorImage="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 