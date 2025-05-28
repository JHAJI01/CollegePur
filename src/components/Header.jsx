import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, ShoppingCart, Plus } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import logoInternship from '../assets/logo_internship.webp';

const Header = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const isMobileMenuOpen = useSelector((state) => state.ui.isMobileMenuOpen);
  const isDarkMode = useSelector((state) => state.ui.isDarkMode);
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { 
      name: "Home", 
      path: "/",
      dropdown: [
        { name: "Home 1", path: "/" },
        { name: "Home 2", path: "/home-2" },
        { name: "Home 3", path: "/home-3" },
        { name: "Home 5", path: "/home-5" },
        { name: "Home 6", path: "/home-6" },
        { name: "OnePage", path: "/onepage" }
      ]
    },
    { name: "About", path: "/about" },
    { 
      name: "Services", 
      path: "#",
      dropdown: [
        { name: "Service", path: "/services/service-1" },
        { name: "Services Details", path: "/services/service-details" }
      ]
    },
    { 
      name: "Pages", 
      path: "/pages",
      dropdown: [
        { name: "Page 1", path: "/page-1" },
        { name: "Page 2", path: "/page-2" },
        { name: "Page 3", path: "/page-3" }
      ]
    },
    { 
      name: "Blog", 
      path: "#",
      dropdown: [
        { name: "Blog Standard", path: "/blog-standard" }
      ]
    },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    } shadow-md`}>
      {!isHomePage && (
        <div className="header-topbar hidden sm:block border-b-2 border-[#ebebeb] py-4 bg-[#a9c7ec]">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap items-center justify-between">
              <div className="w-full sm:w-auto mb-4 sm:mb-0">
                <ul className="contact-info flex flex-wrap justify-center space-x-6">
                  <li>
                    <a href="mailto:info@webmail.com" className="flex items-center text-gray-600 hover:text-red-600 transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2">
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </svg>
                      info@webmail.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:786875864757" className="flex items-center text-gray-600 hover:text-red-600 transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                      786 875 864 75 7
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full sm:w-auto">
                <div className="social-icon">
                  <ul className="flex justify-center space-x-4">
                    <li>
                      <a href="#" className="text-gray-600 hover:text-red-600 transition-colors duration-300">
                        <i className="fab fa-facebook-f text-lg"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-red-600 transition-colors duration-300">
                        <i className="fab fa-twitter text-lg"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-red-600 transition-colors duration-300">
                        <i className="fab fa-behance text-lg"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-red-600 transition-colors duration-300">
                        <i className="fab fa-linkedin-in text-lg"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-red-600 transition-colors duration-300">
                        <i className="fab fa-youtube text-lg"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="logo">
            <a href="/" className="transition-all duration-300 ease-out">
              <img 
                src={logoInternship} 
                alt="OmniVus Logo" 
                className="w-28 h-auto max-w-full transition-all duration-300 ease-out"
                style={{ verticalAlign: 'middle' }}
              />
            </a>
          </div>

          {/* Right side content */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Navigation */}
            <nav className={`flex items-center space-x-6 ${
              ['/about', '/services', '/services/service-1', '/services/service-details', '/pages', '/blog', '/blog-standard', '/contact'].includes(location.pathname) 
                ? 'mx-auto' 
                : ''
            }`}>
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.path}
                    onClick={(e) => {
                      if (item.path === '#') {
                        e.preventDefault();
                      }
                    }}
                    className={`relative font-bold text-lg transition-colors duration-300 hover:text-blue-600 gilroy-bold ${
                      location.pathname === item.path 
                        ? "text-blue-600" 
                        : isDarkMode 
                          ? "text-gray-300" 
                          : "text-gray-700"
                    }`}
                  >
                    <div className="flex items-center space-x-1">
                      <span className={`${item.name === "Home" ? "gilroy-bold" : ""}`}>{item.name}</span>
                      {item.dropdown && (
                        <Plus size={14} className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                      )}
                    </div>
                    {location.pathname === item.path && (
                      <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded-full"></div>
                    )}
                  </Link>
                  
                  {/* Dropdown Menu */}
                  {item.dropdown && (
                    <div className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 ${
                      isDarkMode ? 'bg-gray-800' : 'bg-white'
                    } opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-95 group-hover:scale-100`}>
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.path}
                          className={`block px-4 py-2 text-sm ${
                            item.name === "Services" ? "gilroy-bold" : "font-bold"
                          } ${
                            isDarkMode 
                              ? 'text-gray-300 hover:bg-blue-600 hover:text-white' 
                              : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span>{dropdownItem.name}</span>
                            {dropdownItem.name === "OnePage" && (
                              <Plus size={12} className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Icons and button - Only show on home page */}
            {!['/about', '/services', '/services/service-1', '/services/service-details', '/pages', '/blog', '/blog-standard', '/contact'].includes(location.pathname) ? (
              <div className="flex items-center space-x-3">
                <ShoppingCart className={`w-5 h-5 cursor-pointer hover:text-blue-600 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`} />
                <Search className={`w-5 h-5 cursor-pointer hover:text-blue-600 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`} />
                <div className="offcanvas-icon cursor-pointer">
                  <span className={`block w-6 h-0.5 mb-1.5 transition-all duration-300 ${
                    isDarkMode ? 'bg-gray-300' : 'bg-gray-600'
                  }`}></span>
                  <span className={`block w-6 h-0.5 mb-1.5 transition-all duration-300 ${
                    isDarkMode ? 'bg-gray-300' : 'bg-gray-600'
                  }`}></span>
                  <span className={`block w-6 h-0.5 transition-all duration-300 ${
                    isDarkMode ? 'bg-gray-300' : 'bg-gray-600'
                  }`}></span>
                </div>
                <button className="bg-blue-600 text-white px-6 py-2 rounded font-medium hover:bg-blue-700 transition-colors duration-300">
                  Free Consulting →
                </button>
              </div>
            ) : (
              <div className="navbar-btn">
                <a 
                  href="#" 
                  className="text-[15px] font-bold bg-[#0c59db] text-white border-2 border-[#0c59db] rounded-[5px] px-[25px] py-[15px] transition-all duration-300 ease-out hover:bg-transparent hover:text-[#0c59db]"
                >
                  Get A Quote
                </a>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => dispatch({ type: "TOGGLE_MOBILE_MENU" })}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`md:hidden mt-4 p-4 rounded-lg shadow-lg ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block py-2 transition-colors ${
                  isDarkMode ? 'text-gray-300 hover:text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
                onClick={() => dispatch({ type: "CLOSE_MOBILE_MENU" })}
              >
                <div className="flex items-center space-x-1">
                  <span className="font-bold text-lg">{item.name}</span>
                  {item.name !== "About" && item.name !== "Contact" && (
                  <Plus size={14} className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                  )}
                </div>
              </Link>
            ))}
            <button className="w-full mt-4 bg-blue-600 text-white px-6 py-2 rounded font-medium">
              Free Consulting
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
