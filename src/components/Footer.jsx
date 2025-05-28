import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-area bg-gray-900 text-gray-300 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-24">
          {/* About Widget */}
          <div className="md:col-span-4">
            <div className="widget about-widget">
              <div className="logo mb-6">
                <h2 className="text-3xl font-bold text-white">OmniVus</h2>
                <p className="text-blue-500 font-semibold mt-2">IT Services & Technology</p>
              </div>
              <p className="mb-4 text-gray-400">
                The web has changed a lot since Vitaly posted his first article back in 2006. The team at
                Smashing has changed too, as have the things that we bring to our community onferences,
                books, and our membership added to the online magazine.
              </p>
              <p className="text-gray-400">
                One thing that hasn't changed is that we're a small team — with most of us not working
              </p>
            </div>
          </div>

          {/* Pages Widget */}
          <div className="md:col-span-3 md:col-start-6">
            <div className="widget nav-widget">
              <h4 className="text-xl font-bold mb-6 text-white">Pages</h4>
              <div className="grid grid-cols-2 gap-4">
                <ul className="space-y-3">
                  <li>
                    <Link to="/" className="flex items-center text-gray-400 hover:text-blue-500 transition-colors">
                      <i className="fas fa-angle-right mr-2"></i> Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/services" className="flex items-center text-gray-400 hover:text-blue-500 transition-colors">
                      <i className="fas fa-angle-right mr-2"></i> Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="flex items-center text-gray-400 hover:text-blue-500 transition-colors">
                      <i className="fas fa-angle-right mr-2"></i> About
                    </Link>
                  </li>
                  <li>
                    <Link to="/career" className="flex items-center text-gray-400 hover:text-blue-500 transition-colors">
                      <i className="fas fa-angle-right mr-2"></i> Career
                    </Link>
                  </li>
                  <li>
                    <Link to="/refund" className="flex items-center text-gray-400 hover:text-blue-500 transition-colors">
                      <i className="fas fa-angle-right mr-2"></i> Refund
                    </Link>
                  </li>
                  <li>
                    <Link to="/terms" className="flex items-center text-gray-400 hover:text-blue-500 transition-colors">
                      <i className="fas fa-angle-right mr-2"></i> Terms
                    </Link>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li>
                    <Link to="/details" className="flex items-center text-gray-400 hover:text-blue-500 transition-colors">
                      <i className="fas fa-angle-right mr-2"></i> Details
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="flex items-center text-gray-400 hover:text-blue-500 transition-colors">
                      <i className="fas fa-angle-right mr-2"></i> Contact
                    </Link>
                  </li>
                  <li>
                    <Link to="/business" className="flex items-center text-gray-400 hover:text-blue-500 transition-colors">
                      <i className="fas fa-angle-right mr-2"></i> Business
                    </Link>
                  </li>
                  <li>
                    <Link to="/affiliate" className="flex items-center text-gray-400 hover:text-blue-500 transition-colors">
                      <i className="fas fa-angle-right mr-2"></i> Affiliate
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Working Hours Widget */}
          <div className="md:col-span-4">
            <div className="widget contact-widget">
              <h4 className="text-xl font-bold mb-6 text-white">Working Hours</h4>
              <ul className="space-y-3 mb-6 text-gray-400">
                <li>Monday - Friday: 7:00 - 17:00</li>
                <li>Saturday: 7:00 - 12:00</li>
                <li>Sunday and holidays: 8:00 - 10:00</li>
              </ul>
              <p className="mb-6 text-gray-400">
                <span className="font-semibold text-white">For more then 30 years,</span> IT Service has been a reliable partner in the field of
                logistics and cargo forwarding.
              </p>
              <Link to="/discover" className="inline-flex items-center text-blue-500 hover:text-blue-400 transition-colors">
                <i className="fas fa-angle-right mr-2"></i>Discover More
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 py-6">
          <div className="text-center text-gray-400">
            <p>Copyright By@ WebTend - 2021</p>
          </div>
        </div>
      </div>
    </footer>
    
  );
};

export default Footer;
