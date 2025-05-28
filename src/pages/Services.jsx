import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import LoadingAnimation from "../components/LoadingAnimation";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef(null);
  const [planType, setPlanType] = useState('monthly');
  const isDarkMode = useSelector((state) => state.ui.isDarkMode);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
      setTimeout(() => setIsVisible(true), 300);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
            setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
        if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
        }
        observer.disconnect();
    };
  }, []);

  const services = [
    {
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies.',
      icon: '🌐'
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications.',
      icon: '📱'
    },
    {
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces.',
      icon: '🎨'
    }
  ];

  const plans = [
    {
      name: "Early Birds",
      price: planType === 'monthly' ? 9 : 90,
      description: "The functional goal of technical content is to help people use a product successfully.",
      features: ["Basic Support", "5 Projects", "10GB Storage", "Email Support"],
      type: ["monthly", "yearly"]
    },
    {
      name: "Team",
      price: planType === 'monthly' ? 32 : 320,
      description: "The functional goal of technical content is to help people use a product successfully.",
      features: ["Priority Support", "20 Projects", "100GB Storage", "Phone Support"],
      popular: true,
      type: ["monthly", "yearly"]
    },
    {
      name: "Personal",
      price: planType === 'monthly' ? 69 : 690,
      description: "The functional goal of technical content is to help people use a product successfully.",
      features: ["Premium Support", "50 Projects", "500GB Storage", "24/7 Support"],
      type: ["monthly", "yearly"]
    },
    {
      name: "Platinum",
      price: planType === 'monthly' ? 99 : 999,
      description: "The functional goal of technical content is to help people use a product successfully.",
      features: ["VIP Support", "Unlimited Projects", "Unlimited Storage", "Dedicated Manager"],
      type: ["monthly", "yearly"]
    },
    {
      name: "Yearly Plan",
      price: 999,
      description: "Best value for annual commitment. All features included.",
      features: ["All Premium Features", "Unlimited Projects", "Unlimited Storage", "Dedicated Support"],
      type: ["yearly"]
    }
  ];

  const newsFeeds = [
    {
      title: "A series of iOS 7 inspired vector icons.",
      category: "Design/SEO",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=80&fit=crop"
    },
    {
      title: "A series of iOS 7 inspired vector icons.",
      category: "Design/SEO", 
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100&h=80&fit=crop"
    },
    {
      title: "A series of iOS 7 inspired vector icons.",
      category: "Design/SEO",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=100&h=80&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gilroy-bold">Services</h1>
            <div className="flex justify-center items-center space-x-2 text-white/80">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span>Services</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
          <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content Area */}
            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Service Cards */}
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl bg-white">
                    <div className="relative">
                      <img
                        src={`https://source.unsplash.com/random/600x400?technology,${item}`}
                        alt={`Service ${item}`}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className={`text-xl font-bold mb-3 ${
                          isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        IT Solutions
                      </h3>
                      <p className={`mb-4 ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                      </p>
                      <Link to={`/services/service-${item}`} className={`inline-flex items-center ${
                        isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'
                      }`}>
                        Read More
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </Link>
                  </div>
                  </div>
                ))}
          </div>
        </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              {/* Search Widget */}
              <div className={`p-6 rounded-lg shadow-lg mb-8 ${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
                <h3 className={`text-xl font-bold mb-4 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                  Search
                </h3>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Search..."
                    className={`flex-1 px-4 py-2 rounded-l-lg border ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                          }`}
                  />
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-r-lg hover:bg-blue-700 transition-colors">
                    <i className="fas fa-search"></i>
                      </button>
            </div>
          </div>

              {/* Categories Widget */}
              <div className={`p-6 rounded-lg shadow-lg mb-8 ${
                              isDarkMode ? 'bg-gray-800' : 'bg-white'
              }`}>
                          <h3 className={`text-xl font-bold mb-4 ${
                              isDarkMode ? 'text-white' : 'text-gray-900'
                          }`}>
                  Categories
                          </h3>
                <ul className="space-y-2">
                  {['IT Solutions', 'Web Development', 'Mobile Apps', 'Cloud Services', 'Cybersecurity'].map((category, index) => (
                    <li key={index}>
                      <Link
                        to="#"
                        className={`flex items-center justify-between hover:text-blue-600 transition-colors ${
                              isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}
                      >
                        <span>{category}</span>
                        <span className="text-sm">({Math.floor(Math.random() * 20) + 1})</span>
                      </Link>
                      </li>
                    ))}
                  </ul>
        </div>

              {/* Popular Tags Widget */}
              <div className={`p-6 rounded-lg shadow-lg ${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
                <h3 className={`text-xl font-bold mb-4 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                  Popular Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['IT', 'Web', 'Mobile', 'Cloud', 'Security', 'Apps', 'Design', 'Development'].map((tag, index) => (
                    <Link
                key={index}
                      to="#"
                      className={`px-4 py-2 rounded-full text-sm ${
                        isDarkMode
                          ? 'bg-gray-700 text-gray-300 hover:bg-blue-600 hover:text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white'
                      } transition-colors`}
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
