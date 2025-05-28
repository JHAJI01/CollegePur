import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Header from "../components/Header";
import { CheckCircle, Clock, Users, Shield } from "lucide-react";

const ServiceDetailsPage = () => {
  const location = useLocation();
  const serviceId = location.pathname.split('/').pop();
  const [activeTab, setActiveTab] = useState('monthly');
  const [showVideo, setShowVideo] = useState(false);

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
                Service Details
              </h1>
              <nav className="text-[24px] text-blue-400 mt-2 gilroy-bold">
                <Link to="/" className="text-blue-400 hover:text-blue-600 transition-colors cursor-pointer">Home</Link>
                <span className="mx-3 text-blue-300">|</span>
                <span className="text-blue-400">Details</span>
              </nav>
            </div>
          </div>
        </div>

        {/* Service Details Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap items-center justify-center">
              <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                <div className="services-details-imgs mb-8 relative">
                  <div className="img-one mb-6 relative z-10">
                    <img 
                      src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop&q=60"
                      alt="Service Image 1"
                      className="w-4/5 mx-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="img-two absolute top-1/4 right-0 z-0">
                    <img 
                      src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop&q=60"
                      alt="Service Image 2"
                      className="w-4/5 ml-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-4">
                <div className="service-details-text-block">
                  <div className="section-title with-right-border mb-10">
                    <span className="text-blue-600 text-base uppercase font-bold pb-0.5 relative tracking-wider pr-[100px] before:content-[''] before:absolute before:right-0 before:top-1/2 before:h-0.5 before:w-[70px] before:bg-blue-600 before:-translate-y-1/2">
                      Search Engine Optimization
                    </span>
                    <h2 className="text-[42px] font-bold text-[#002249] font-gilroy-bold lg:text-[32px] -mt-1">
                      Nothing to do anything.
                    </h2>
                  </div>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Does any industry face a more complex audience journey and marketing sales process than B2B technology? Consider the number of people who influence a sale, the length of the decision-making cycle, the competing interests of the people who purchase, implement, manage, and use the technology. It's a lot meaningful content here.
                  </p>
                  <div className="service-support-btn mt-10 bg-[#ff5f6e] text-center py-5 px-10 relative inline-block z-[5] before:content-[''] before:absolute before:left-0 before:top-0 before:w-1 before:h-full before:bg-white before:opacity-20">
                    <div className="flex items-center justify-center space-x-3">
                      <div>
                        <p className="text-white text-sm">Make A Call</p>
                        <span className="text-white text-xl font-bold">897 876 76 56 4</span>
                      </div>
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                        <i className="fa fa-phone text-[#ff5f6e] text-xl"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Video Section */}
        <section className="intro-video-area relative py-20 bg-blue-900">
          <div className="absolute inset-0 z-[-1] bg-[#00152de6] opacity-90"></div>
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2">
                <div className="text-white">
                  <span className="text-blue-400 text-base uppercase font-bold pb-0.5 relative tracking-wider pr-[100px] before:content-[''] before:absolute before:right-0 before:top-1/2 before:h-0.5 before:w-[70px] before:bg-blue-400 before:-translate-y-1/2">
                    Intro Video
                  </span>
                  <h2 className="text-[42px] font-bold text-white font-gilroy-bold lg:text-[32px] -mt-1 mb-6">
                    How we growth our business.
                  </h2>
                  <p className="text-blue-100 mb-4 leading-relaxed">
                    The introduction of cloud and mobile technologies into enterprise software.
                  </p>
                  <p className="text-blue-100 mb-8 leading-relaxed">
                    Whether you are building an enterprise web portal or a state-of-the-art website, you always need the right modern tools. Well-built and maintained PHP frameworks provide those tools in abundance, allowing maintained PHP frameworks provide those tools in abundance, allowing developers to save time, re-use code, and streamline the back end. As software development tools continuously.
                  </p>
                  <div className="flex space-x-4">
                    <Link 
                      to="/services/service-details" 
                      className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 inline-block"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 relative">
                <div className="relative rounded-lg overflow-hidden shadow-2xl">
                  {showVideo ? (
                    <iframe
                      width="100%"
                      height="400"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-[400px]"
                    ></iframe>
                  ) : (
                    <>
                      <img 
                        src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop&q=60"
                        alt="Video Thumbnail"
                        className="w-full h-[400px] object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button 
                          onClick={() => setShowVideo(true)}
                          className="w-20 h-20 bg-white rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Left Column - Service Details */}
              <div className="lg:col-span-2">
                {/* Additional Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 py-12">
          {/* Early Birds Plan */}
          <div className="bg-white rounded-xl shadow-lg p-10 hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-800 hover:bg-gradient-to-b hover:from-blue-900 hover:to-blue-800 group">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 group-hover:text-white transition-colors duration-300">Early Birds</h3>
              <div className="flex items-baseline justify-center mb-2">
                <span className="text-5xl font-bold text-blue-600 group-hover:text-white transition-colors duration-300 gilroy-bold">
                  ${activeTab === 'monthly' ? '9' : '56'}
                </span>
                <span className="text-gray-500 ml-1 group-hover:text-blue-200 transition-colors duration-300">
                  /{activeTab === 'monthly' ? 'mo' : 'yr'}
                </span>
              </div>
              <div className="text-gray-600 mb-8 text-sm uppercase tracking-wider group-hover:text-blue-200 transition-colors duration-300">
                Per {activeTab === 'monthly' ? 'Month' : 'Year'}
              </div>
              <div className="h-px bg-gray-100 mb-8 group-hover:bg-blue-700 transition-colors duration-300"></div>
              <p className="text-gray-600 mb-8 leading-relaxed group-hover:text-blue-100 transition-colors duration-300">The functional goal of technical content is to help people use a product successfully.</p>
              <button className="w-full bg-white text-blue-600 py-4 rounded-lg hover:bg-blue-900 transition-all duration-300 font-medium text-sm uppercase tracking-wider shadow-md hover:shadow-lg border-2 border-blue-600 hover:border-white hover:text-white">Purchase Now</button>
            </div>
          </div>

          {/* Team Plan */}
          <div className="bg-white rounded-xl shadow-lg p-10 hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-800 hover:bg-gradient-to-b hover:from-blue-900 hover:to-blue-800 group">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 group-hover:text-white transition-colors duration-300">Team</h3>
              <div className="flex items-baseline justify-center mb-2">
                <span className="text-5xl font-bold text-blue-600 group-hover:text-white transition-colors duration-300 gilroy-bold">
                  ${activeTab === 'monthly' ? '32' : '99'}
                </span>
                <span className="text-gray-500 ml-1 group-hover:text-blue-200 transition-colors duration-300">
                  /{activeTab === 'monthly' ? 'mo' : 'yr'}
                </span>
              </div>
              <div className="text-gray-600 mb-8 text-sm uppercase tracking-wider group-hover:text-blue-200 transition-colors duration-300">
                Per {activeTab === 'monthly' ? 'Month' : 'Year'}
              </div>
              <div className="h-px bg-gray-100 mb-8 group-hover:bg-blue-700 transition-colors duration-300"></div>
              <p className="text-gray-600 mb-8 leading-relaxed group-hover:text-blue-100 transition-colors duration-300">The functional goal of technical content is to help people use a product successfully.</p>
              <button className="w-full bg-white text-blue-600 py-4 rounded-lg hover:bg-blue-900 transition-all duration-300 font-medium text-sm uppercase tracking-wider shadow-md hover:shadow-lg border-2 border-blue-600 hover:border-white hover:text-white">Purchase Now</button>
            </div>
          </div>

          {/* Personal Plan */}
          <div className="bg-white rounded-xl shadow-lg p-10 hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-800 hover:bg-gradient-to-b hover:from-blue-900 hover:to-blue-800 group">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 group-hover:text-white transition-colors duration-300">Personal</h3>
              <div className="flex items-baseline justify-center mb-2">
                <span className="text-5xl font-bold text-blue-600 group-hover:text-white transition-colors duration-300 gilroy-bold">
                  ${activeTab === 'monthly' ? '69' : '133'}
                </span>
                <span className="text-gray-500 ml-1 group-hover:text-blue-200 transition-colors duration-300">
                  /{activeTab === 'monthly' ? 'mo' : 'yr'}
                </span>
              </div>
              <div className="text-gray-600 mb-8 text-sm uppercase tracking-wider group-hover:text-blue-200 transition-colors duration-300">
                Per {activeTab === 'monthly' ? 'Month' : 'Year'}
              </div>
              <div className="h-px bg-gray-100 mb-8 group-hover:bg-blue-700 transition-colors duration-300"></div>
              <p className="text-gray-600 mb-8 leading-relaxed group-hover:text-blue-100 transition-colors duration-300">The functional goal of technical content is to help people use a product successfully.</p>
              <button className="w-full bg-white text-blue-600 py-4 rounded-lg hover:bg-blue-900 transition-all duration-300 font-medium text-sm uppercase tracking-wider shadow-md hover:shadow-lg border-2 border-blue-600 hover:border-white hover:text-white">Purchase Now</button>
            </div>
          </div>

          {/* Platinum Plan */}
          <div className="bg-white rounded-xl shadow-lg p-10 hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-800 hover:bg-gradient-to-b hover:from-blue-900 hover:to-blue-800 group">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 group-hover:text-white transition-colors duration-300">Platinum</h3>
              <div className="flex items-baseline justify-center mb-2">
                <span className="text-5xl font-bold text-blue-600 group-hover:text-white transition-colors duration-300 gilroy-bold">
                  ${activeTab === 'monthly' ? '99' : '599'}
                </span>
                <span className="text-gray-500 ml-1 group-hover:text-blue-200 transition-colors duration-300">
                  /{activeTab === 'monthly' ? 'mo' : 'yr'}
                </span>
              </div>
              <div className="text-gray-600 mb-8 text-sm uppercase tracking-wider group-hover:text-blue-200 transition-colors duration-300">
                Per {activeTab === 'monthly' ? 'Month' : 'Year'}
              </div>
              <div className="h-px bg-gray-100 mb-8 group-hover:bg-blue-700 transition-colors duration-300"></div>
              <p className="text-gray-600 mb-8 leading-relaxed group-hover:text-blue-100 transition-colors duration-300">The functional goal of technical content is to help people use a product successfully.</p>
              <button className="w-full bg-white text-blue-600 py-4 rounded-lg hover:bg-blue-900 transition-all duration-300 font-medium text-sm uppercase tracking-wider shadow-md hover:shadow-lg border-2 border-blue-600 hover:border-white hover:text-white">Purchase Now</button>
            </div>
          </div>
        </div>

        {/* News Feeds Section */}
        <section className="news-feeds-section py-20 bg-gradient-to-b from-blue-900 to-blue-800">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-[60px] font-bold text-white font-gilroy-bold lg:text-[42px] mb-6">News Feeds</h2>
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

export default ServiceDetailsPage; 