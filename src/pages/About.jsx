import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import ScrollToTop from '../components/ScrollToTop';

const About = () => {
  const isDarkMode = useSelector((state) => state.ui.isDarkMode);

  return (
    <div className="min-h-screen">
      <Header />
      <ScrollToTop />
      
      {/* Hero Section */}
      <section className={`pt-24 pb-8 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className={`text-[82px] font-bold gilroy-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-800'
            }`}>About Us</h1>
            <nav className="flex justify-center items-center text-[14px] font-['Karla'] text-blue-600">
              <ul className="flex items-center">
                <li>Home</li>
                <li className="mx-2">|</li>
                <li>About</li>
              </ul>
            </nav>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className={`py-16 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className={`text-3xl font-bold mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Our Story</h2>
            <p className={`text-lg mb-8 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              We are a team of passionate professionals dedicated to delivering exceptional IT solutions. 
              Our journey began with a simple mission: to help businesses thrive in the digital age through 
              innovative technology solutions.
            </p>
            <p className={`text-lg mb-8 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              With years of experience in the industry, we've built a reputation for excellence, 
              reliability, and customer satisfaction. Our team combines technical expertise with 
              creative problem-solving to deliver solutions that drive real business value.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 