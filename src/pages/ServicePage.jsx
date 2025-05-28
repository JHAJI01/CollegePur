import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Header from "../components/Header";
import { CheckCircle, Clock, Users, Shield } from "lucide-react";

const ServicePage = () => {
  const location = useLocation();
  const isService1 = location.pathname === "/services/service-1";
  const isService2 = location.pathname === "/services/service-2";
  const [activeTab, setActiveTab] = useState('monthly');

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        {/* Page Title Area */}
        <div className="page-title-area relative z-1 text-center pt-[180px] pb-[120px] bg-white">
          <div className="absolute inset-0 z-[-1]">
            <div className="absolute inset-0 bg-[url('/banner-gradient-bg-2.png')] bg-no-repeat bg-cover bg-center"></div>
          </div>
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-[80px] font-bold mb-0 gilroy-bold text-[#002249]">
                Service
              </h1>
              <nav className="text-[24px] text-blue-400 mt-2 gilroy-bold">
                <Link to="/" className="text-blue-400 hover:text-blue-600 transition-colors cursor-pointer">Home</Link>
                <span className="mx-3 text-blue-300">|</span>
                <span className="text-blue-400">Services</span>
              </nav>
            </div>
          </div>
        </div>

        {/* Service Section */}
        <section className="service-section-two section-gap-top pb-[200px]">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Service Item 1 */}
              <div className="service-item-eight mb-20 w-full relative group">
                <div className="service-img overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <div className="relative overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop&q=60" 
                      alt="UI/UX Design" 
                      className="w-full h-[300px] object-cover brightness-90 hover:brightness-100 transition-all duration-300"
                      style={{ maxWidth: '100%', verticalAlign: 'middle' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-1/3 bottom-0"></div>
                  </div>
                </div>
                <div className="services-overlay absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-[rgba(0,34,73,0.98)] to-[rgba(0,34,73,0.95)] p-6 md:p-8 rounded-b-lg group">
                  <h4 className="title text-xl font-bold mb-3 transform transition-all duration-300 ease-out group-hover:translate-x-2">
                    <a href="#" className="text-white hover:text-blue-400">UI/UX Design</a>
                  </h4>
                  <p className="text-white text-base leading-relaxed transform transition-all duration-300 ease-out group-hover:translate-x-2">
                    The functional goal of technical content is to help people use a product successfully. The business goal must tie the content.
                  </p>
                </div>
              </div>

              {/* Service Item 2 */}
              <div className="service-item-eight mb-20 w-full relative group">
                <div className="service-img overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <div className="relative overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop&q=60" 
                      alt="IT Consultancy" 
                      className="w-full h-[300px] object-cover brightness-90 hover:brightness-100 transition-all duration-300"
                      style={{ maxWidth: '100%', verticalAlign: 'middle' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-1/3 bottom-0"></div>
                  </div>
                </div>
                <div className="services-overlay absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-[rgba(0,34,73,0.98)] to-[rgba(0,34,73,0.95)] p-6 md:p-8 rounded-b-lg group">
                  <h4 className="title text-xl font-bold mb-3 transform transition-all duration-300 ease-out group-hover:translate-x-2">
                    <a href="#" className="text-white hover:text-blue-400">IT Consultancy</a>
                  </h4>
                  <p className="text-white text-base leading-relaxed transform transition-all duration-300 ease-out group-hover:translate-x-2">
                    The functional goal of technical content is to help people use a product successfully. The business goal must tie the content.
                  </p>
                </div>
              </div>

              {/* Service Item 3 */}
              <div className="service-item-eight mb-20 w-full relative group">
                <div className="service-img overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <div className="relative overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60" 
                      alt="Technology Prof" 
                      className="w-full h-[300px] object-cover brightness-90 hover:brightness-100 transition-all duration-300"
                      style={{ maxWidth: '100%', verticalAlign: 'middle' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-1/3 bottom-0"></div>
                  </div>
                </div>
                <div className="services-overlay absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-[rgba(0,34,73,0.98)] to-[rgba(0,34,73,0.95)] p-6 md:p-8 rounded-b-lg group">
                  <h4 className="title text-xl font-bold mb-3 transform transition-all duration-300 ease-out group-hover:translate-x-2">
                    <a href="#" className="text-white hover:text-blue-400">Technology Prof.</a>
                  </h4>
                  <p className="text-white text-base leading-relaxed transform transition-all duration-300 ease-out group-hover:translate-x-2">
                    The functional goal of technical content is to help people use a product successfully. The business goal must tie the content.
                  </p>
                </div>
              </div>

              {/* Service Item 4 */}
              <div className="service-item-eight mb-20 w-full relative group">
                <div className="service-img overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <div className="relative overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&auto=format&fit=crop&q=60" 
                      alt="Web Development" 
                      className="w-full h-[300px] object-cover brightness-90 hover:brightness-100 transition-all duration-300"
                      style={{ maxWidth: '100%', verticalAlign: 'middle' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-1/3 bottom-0"></div>
                  </div>
                </div>
                <div className="services-overlay absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-[rgba(0,34,73,0.98)] to-[rgba(0,34,73,0.95)] p-6 md:p-8 rounded-b-lg group">
                  <h4 className="title text-xl font-bold mb-3 transform transition-all duration-300 ease-out group-hover:translate-x-2">
                    <a href="#" className="text-white hover:text-blue-400">Web Development</a>
                  </h4>
                  <p className="text-white text-base leading-relaxed transform transition-all duration-300 ease-out group-hover:translate-x-2">
                    The functional goal of technical content is to help people use a product successfully. The business goal must tie the content.
                  </p>
                </div>
              </div>

              {/* Service Item 5 */}
              <div className="service-item-eight mb-20 w-full relative group">
                <div className="service-img overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <div className="relative overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1555066931-ba19d7fd61c7?w=800&auto=format&fit=crop&q=60" 
                      alt="Web Development" 
                      className="w-full h-[300px] object-cover brightness-90 hover:brightness-100 transition-all duration-300"
                      style={{ maxWidth: '100%', verticalAlign: 'middle' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-1/3 bottom-0"></div>
                  </div>
                </div>
                <div className="services-overlay absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-[rgba(0,34,73,0.98)] to-[rgba(0,34,73,0.95)] p-6 md:p-8 rounded-b-lg group">
                  <h4 className="title text-xl font-bold mb-3 transform transition-all duration-300 ease-out group-hover:translate-x-2">
                    <a href="#" className="text-white hover:text-blue-400">Web Development</a>
                  </h4>
                  <p className="text-white text-base leading-relaxed transform transition-all duration-300 ease-out group-hover:translate-x-2">
                    The functional goal of technical content is to help people use a product successfully. The business goal must tie the content.
                  </p>
                </div>
              </div>

              {/* Service Item 6 */}
              <div className="service-item-eight mb-20 w-full relative group">
                <div className="service-img overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <div className="relative overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&auto=format&fit=crop&q=60" 
                      alt="Game Design" 
                      className="w-full h-[300px] object-cover brightness-90 hover:brightness-100 transition-all duration-300"
                      style={{ maxWidth: '100%', verticalAlign: 'middle' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-1/3 bottom-0"></div>
                  </div>
                </div>
                <div className="services-overlay absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-[rgba(0,34,73,0.98)] to-[rgba(0,34,73,0.95)] p-6 md:p-8 rounded-b-lg group">
                  <h4 className="title text-xl font-bold mb-3 transform transition-all duration-300 ease-out group-hover:translate-x-2">
                    <a href="#" className="text-white hover:text-blue-400">Game Design</a>
                  </h4>
                  <p className="text-white text-base leading-relaxed transform transition-all duration-300 ease-out group-hover:translate-x-2">
                    The functional goal of technical content is to help people use a product successfully. The business goal must tie the content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next Section */}
        <div className="section-title with-right-border mb-50 ml-16 flex justify-between items-center">
          <div>
            <span className="title-tag text-blue-600 text-base uppercase font-bold pb-0.5 relative tracking-wider pr-[100px] before:content-[''] before:absolute before:right-0 before:top-1/2 before:h-0.5 before:w-[70px] before:bg-blue-600 before:-translate-y-1/2">plans</span>
            <h2 className="title text-[60px] font-bold text-[#002249] font-gilroy-bold lg:text-[42px] -mt-1">Here is plans</h2>
          </div>
          <ul className="nav nav-pills pricing-tab-btn bg-white p-2.5 flex space-x-4" id="pricingOneTab" role="tablist">
            <li className="nav-item">
              <button 
                onClick={() => setActiveTab('monthly')}
                className={`nav-link px-8 py-3 rounded-none text-lg font-medium transition-colors duration-300 ${
                  activeTab === 'monthly' 
                    ? 'bg-blue-600 text-white' 
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                Monthly
              </button>
            </li>
            <li className="nav-item">
              <button 
                onClick={() => setActiveTab('yearly')}
                className={`nav-link px-8 py-3 rounded-none text-lg font-medium transition-colors duration-300 ${
                  activeTab === 'yearly' 
                    ? 'bg-blue-600 text-white' 
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                Yearly
              </button>
            </li>
          </ul>
        </div>

        <div className="tab-content" id="pricingOneTabContent">
          <div className={`tab-pane fade ${activeTab === 'monthly' ? 'show active' : 'hidden'}`} id="monthly-item" role="tabpanel">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 py-12">
              {/* Early Birds Plan */}
              <div className="bg-white rounded-xl shadow-lg p-10 hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-800 hover:bg-gradient-to-b hover:from-blue-900 hover:to-blue-800 group">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 group-hover:text-white transition-colors duration-300">Early Birds</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-5xl font-bold text-blue-600 group-hover:text-white transition-colors duration-300">$9</span>
                    <span className="text-gray-500 ml-1 group-hover:text-blue-200 transition-colors duration-300">/mo</span>
                  </div>
                  <div className="text-gray-600 mb-8 text-sm uppercase tracking-wider group-hover:text-blue-200 transition-colors duration-300">Per Month</div>
                  <div className="h-px bg-gray-100 mb-8 group-hover:bg-blue-700 transition-colors duration-300"></div>
                  <p className="text-gray-600 mb-8 leading-relaxed group-hover:text-blue-100 transition-colors duration-300">The functional goal of technical content is to help people use a product successfully.</p>
                  <button className="w-full bg-white text-blue-600 py-4 rounded-lg hover:bg-blue-900 transition-all duration-300 font-medium text-sm uppercase tracking-wider shadow-md hover:shadow-lg border-2 border-blue-600 hover:border-white hover:text-white">
                    Purchase Now
                  </button>
                </div>
              </div>

              {/* Team Plan */}
              <div className="bg-white rounded-xl shadow-lg p-10 hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-800 hover:bg-gradient-to-b hover:from-blue-900 hover:to-blue-800 group">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 group-hover:text-white transition-colors duration-300">Team</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-5xl font-bold text-blue-600 group-hover:text-white transition-colors duration-300">$32</span>
                    <span className="text-gray-500 ml-1 group-hover:text-blue-200 transition-colors duration-300">/mo</span>
                  </div>
                  <div className="text-gray-600 mb-8 text-sm uppercase tracking-wider group-hover:text-blue-200 transition-colors duration-300">Per Month</div>
                  <div className="h-px bg-gray-100 mb-8 group-hover:bg-blue-700 transition-colors duration-300"></div>
                  <p className="text-gray-600 mb-8 leading-relaxed group-hover:text-blue-100 transition-colors duration-300">The functional goal of technical content is to help people use a product successfully.</p>
                  <button className="w-full bg-white text-blue-600 py-4 rounded-lg hover:bg-blue-900 transition-all duration-300 font-medium text-sm uppercase tracking-wider shadow-md hover:shadow-lg border-2 border-blue-600 hover:border-white hover:text-white">
                    Purchase Now
                  </button>
                </div>
              </div>

              {/* Personal Plan */}
              <div className="bg-white rounded-xl shadow-lg p-10 hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-800 hover:bg-gradient-to-b hover:from-blue-900 hover:to-blue-800 group">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 group-hover:text-white transition-colors duration-300">Personal</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-5xl font-bold text-blue-600 group-hover:text-white transition-colors duration-300">$69</span>
                    <span className="text-gray-500 ml-1 group-hover:text-blue-200 transition-colors duration-300">/mo</span>
                  </div>
                  <div className="text-gray-600 mb-8 text-sm uppercase tracking-wider group-hover:text-blue-200 transition-colors duration-300">Per Month</div>
                  <div className="h-px bg-gray-100 mb-8 group-hover:bg-blue-700 transition-colors duration-300"></div>
                  <p className="text-gray-600 mb-8 leading-relaxed group-hover:text-blue-100 transition-colors duration-300">The functional goal of technical content is to help people use a product successfully.</p>
                  <button className="w-full bg-white text-blue-600 py-4 rounded-lg hover:bg-blue-900 transition-all duration-300 font-medium text-sm uppercase tracking-wider shadow-md hover:shadow-lg border-2 border-blue-600 hover:border-white hover:text-white">
                    Purchase Now
                  </button>
                </div>
              </div>

              {/* Platinum Plan */}
              <div className="bg-white rounded-xl shadow-lg p-10 hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-800 hover:bg-gradient-to-b hover:from-blue-900 hover:to-blue-800 group">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 group-hover:text-white transition-colors duration-300">Platinum</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-5xl font-bold text-blue-600 group-hover:text-white transition-colors duration-300">$99</span>
                    <span className="text-gray-500 ml-1 group-hover:text-blue-200 transition-colors duration-300">/mo</span>
                  </div>
                  <div className="text-gray-600 mb-8 text-sm uppercase tracking-wider group-hover:text-blue-200 transition-colors duration-300">Per Month</div>
                  <div className="h-px bg-gray-100 mb-8 group-hover:bg-blue-700 transition-colors duration-300"></div>
                  <p className="text-gray-600 mb-8 leading-relaxed group-hover:text-blue-100 transition-colors duration-300">The functional goal of technical content is to help people use a product successfully.</p>
                  <button className="w-full bg-white text-blue-600 py-4 rounded-lg hover:bg-blue-900 transition-all duration-300 font-medium text-sm uppercase tracking-wider shadow-md hover:shadow-lg border-2 border-blue-600 hover:border-white hover:text-white">
                    Purchase Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={`tab-pane fade ${activeTab === 'yearly' ? 'show active' : 'hidden'}`} id="yearly-item" role="tabpanel">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 py-12">
              {/* Early Birds Plan - Yearly */}
              <div className="bg-white rounded-xl shadow-lg p-10 hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-800 hover:bg-gradient-to-b hover:from-blue-900 hover:to-blue-800 group">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 group-hover:text-white transition-colors duration-300">Early Birds</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-5xl font-bold text-blue-600 group-hover:text-white transition-colors duration-300">$56</span>
                    <span className="text-gray-500 ml-1 group-hover:text-blue-200 transition-colors duration-300">/yr</span>
                  </div>
                  <div className="text-gray-600 mb-8 text-sm uppercase tracking-wider group-hover:text-blue-200 transition-colors duration-300">Per Year</div>
                  <div className="h-px bg-gray-100 mb-8 group-hover:bg-blue-700 transition-colors duration-300"></div>
                  <p className="text-gray-600 mb-8 leading-relaxed group-hover:text-blue-100 transition-colors duration-300">The functional goal of technical content is to help people use a product successfully.</p>
                  <button className="w-full bg-white text-blue-600 py-4 rounded-lg hover:bg-blue-900 transition-all duration-300 font-medium text-sm uppercase tracking-wider shadow-md hover:shadow-lg border-2 border-blue-600 hover:border-white hover:text-white">
                    Purchase Now
                  </button>
                </div>
              </div>

              {/* Team Plan - Yearly */}
              <div className="bg-white rounded-xl shadow-lg p-10 hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-800 hover:bg-gradient-to-b hover:from-blue-900 hover:to-blue-800 group">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 group-hover:text-white transition-colors duration-300">Team</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-5xl font-bold text-blue-600 group-hover:text-white transition-colors duration-300">$99</span>
                    <span className="text-gray-500 ml-1 group-hover:text-blue-200 transition-colors duration-300">/yr</span>
                  </div>
                  <div className="text-gray-600 mb-8 text-sm uppercase tracking-wider group-hover:text-blue-200 transition-colors duration-300">Per Year</div>
                  <div className="h-px bg-gray-100 mb-8 group-hover:bg-blue-700 transition-colors duration-300"></div>
                  <p className="text-gray-600 mb-8 leading-relaxed group-hover:text-blue-100 transition-colors duration-300">The functional goal of technical content is to help people use a product successfully.</p>
                  <button className="w-full bg-white text-blue-600 py-4 rounded-lg hover:bg-blue-900 transition-all duration-300 font-medium text-sm uppercase tracking-wider shadow-md hover:shadow-lg border-2 border-blue-600 hover:border-white hover:text-white">
                    Purchase Now
                  </button>
                </div>
              </div>

              {/* Personal Plan - Yearly */}
              <div className="bg-white rounded-xl shadow-lg p-10 hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-800 hover:bg-gradient-to-b hover:from-blue-900 hover:to-blue-800 group">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 group-hover:text-white transition-colors duration-300">Personal</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-5xl font-bold text-blue-600 group-hover:text-white transition-colors duration-300">$133</span>
                    <span className="text-gray-500 ml-1 group-hover:text-blue-200 transition-colors duration-300">/yr</span>
                  </div>
                  <div className="text-gray-600 mb-8 text-sm uppercase tracking-wider group-hover:text-blue-200 transition-colors duration-300">Per Year</div>
                  <div className="h-px bg-gray-100 mb-8 group-hover:bg-blue-700 transition-colors duration-300"></div>
                  <p className="text-gray-600 mb-8 leading-relaxed group-hover:text-blue-100 transition-colors duration-300">The functional goal of technical content is to help people use a product successfully.</p>
                  <button className="w-full bg-white text-blue-600 py-4 rounded-lg hover:bg-blue-900 transition-all duration-300 font-medium text-sm uppercase tracking-wider shadow-md hover:shadow-lg border-2 border-blue-600 hover:border-white hover:text-white">
                    Purchase Now
                  </button>
                </div>
              </div>

              {/* Platinum Plan - Yearly */}
              <div className="bg-white rounded-xl shadow-lg p-10 hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-800 hover:bg-gradient-to-b hover:from-blue-900 hover:to-blue-800 group">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 group-hover:text-white transition-colors duration-300">Platinum</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-5xl font-bold text-blue-600 group-hover:text-white transition-colors duration-300">$599</span>
                    <span className="text-gray-500 ml-1 group-hover:text-blue-200 transition-colors duration-300">/yr</span>
                  </div>
                  <div className="text-gray-600 mb-8 text-sm uppercase tracking-wider group-hover:text-blue-200 transition-colors duration-300">Per Year</div>
                  <div className="h-px bg-gray-100 mb-8 group-hover:bg-blue-700 transition-colors duration-300"></div>
                  <p className="text-gray-600 mb-8 leading-relaxed group-hover:text-blue-100 transition-colors duration-300">The functional goal of technical content is to help people use a product successfully.</p>
                  <button className="w-full bg-white text-blue-600 py-4 rounded-lg hover:bg-blue-900 transition-all duration-300 font-medium text-sm uppercase tracking-wider shadow-md hover:shadow-lg border-2 border-blue-600 hover:border-white hover:text-white">
                    Purchase Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* News Feeds Section */}
        <section className="news-feeds-section py-20 bg-gradient-to-b from-blue-900 to-blue-800">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-[42px] font-bold text-white gilroy-bold mb-6">News Feeds</h2>
              <p className="text-blue-100 text-lg max-w-3xl mx-auto">
                Does any industry face a more complex audience journey and marketing sales process than B2B technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* News Item 1 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop&q=60" 
                    alt="Design/SEO" 
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-1/3 bottom-0"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">Design/SEO</h3>
                  <p className="text-gray-600">A series of iOS 7 inspired vector icons.</p>
                </div>
              </div>

              {/* News Item 2 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop&q=60" 
                    alt="Design/SEO" 
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-1/3 bottom-0"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">Design/SEO</h3>
                  <p className="text-gray-600">A series of iOS 7 inspired vector icons.</p>
                </div>
              </div>

              {/* News Item 3 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60" 
                    alt="Design/SEO" 
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-1/3 bottom-0"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">Design/SEO</h3>
                  <p className="text-gray-600">A series of iOS 7 inspired vector icons.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicePage;