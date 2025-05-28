import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import ScrollToTop from "../components/ScrollToTop";
import { Eye, MessageCircle, Calendar, ArrowRight, Play } from "lucide-react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import sidebarAd2 from '../assets/sidebar-ad-2.webp';

const Blog = () => {
  const isDarkMode = useSelector((state) => state.ui.isDarkMode);

  return (
    <>
      <Header />
      <ScrollToTop />
      <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
        {/* Topbar */}
        <div className="header-topbar hidden sm:block border-b-2 border-[#ebebeb] py-4 bg-[#a9c7ec]">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <a href="tel:+1234567890" className="flex items-center text-[#002249] hover:text-[#0c59db] transition-colors">
                  <i className="fas fa-phone-alt mr-2"></i>
                  +123 456 7890
                </a>
                <a href="mailto:info@example.com" className="flex items-center text-[#002249] hover:text-[#0c59db] transition-colors">
                  <i className="fas fa-envelope mr-2"></i>
                  info@example.com
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <a href="#" className="text-[#002249] hover:text-[#0c59db] transition-colors">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-[#002249] hover:text-[#0c59db] transition-colors">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-[#002249] hover:text-[#0c59db] transition-colors">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-[#002249] hover:text-[#0c59db] transition-colors">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Page Title Area */}
        <div className="page-title-area bg-white relative z-10 text-center pt-[280px] pb-[120px]">
        <div className="container mx-auto px-6">
            <h2 className="title text-[80px] mb-[10px] font-bold text-[#002249] gilroy-bold">News Standard</h2>
            <ul className="breadcrumb-nav flex items-center justify-center space-x-2">
              <li className="text-2xl font-bold text-[#69a1bb]">
                <a href="/" className="text-[#69a1bb] hover:text-[#0c59db] transition-all duration-300">Home</a>
              </li>
              <li className="text-2xl font-bold text-[#69a1bb]">/</li>
              <li className="text-2xl font-bold text-[#69a1bb]">Blog Standard</li>
            </ul>
          </div>
        </div>

        {/* Blog Area */}
        <section className="section-gap pt-[120px] pb-[120px]">
        <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-between">
              <div className="w-full lg:w-8/12">
                <div className="blog-standard">
                  {/* Single Blog Standard */}
                  <div className="single-blog-standard mb-30">
                    <div className="blog-standard-content border-2 border-[#ededed] p-10">
                      <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop&q=60" alt="blog" className="w-full rounded-lg h-[400px] object-cover mb-8" />
                      <a href="#" className="cat text-blue-600 font-medium">Business</a>
                      <h2 className="title text-2xl font-bold mt-2 mb-4">Lorem ipsum dolor sit amet, consecte cing elit, sed do eiusmod tempor.</h2>
                      <ul className="post-meta flex space-x-6 text-sm text-gray-500 mb-4">
                        <li className="flex items-center"><Eye className="w-4 h-4 mr-2" /> 232 Views</li>
                        <li className="flex items-center"><MessageCircle className="w-4 h-4 mr-2" /> 35 Comments</li>
                        <li className="flex items-center"><Calendar className="w-4 h-4 mr-2" /> 24th March 2019</li>
                      </ul>
                      <p className="text-gray-600 mb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidi-dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                      <div className="blog-standard-footer flex justify-between items-center">
                        <div className="footer-left flex items-center">
                          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60" alt="" className="w-10 h-10 rounded-full mr-3 object-cover" />
                          <a href="#" className="text-gray-700"><span className="text-gray-500">by</span> Hetmayar</a>
                        </div>
                        <div className="footer-right">
                          <a href="#" className="text-blue-600 flex items-center hover:text-blue-700">
                            Read More <ArrowRight className="w-4 h-4 ml-2" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Video Blog */}
                  <div className="single-blog-standard mb-30">
                    <div className="blog-standard-content border-2 border-[#ededed] p-10">
                      <div className="relative mb-8">
                        <img src="https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?w=800&auto=format&fit=crop&q=60" alt="blog" className="w-full rounded-lg h-[400px] object-cover" />
                        <a className="video-popup absolute inset-0 flex items-center justify-center" href="https://www.youtube.com/watch?v=t8mvutAh4AE">
                          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                            <Play className="w-6 h-6 text-blue-600" />
                          </div>
                        </a>
                      </div>
                      <a href="#" className="cat text-blue-600 font-medium">Business</a>
                      <h2 className="title text-2xl font-bold mt-2 mb-4">Adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</h2>
                      <ul className="post-meta flex space-x-6 text-sm text-gray-500 mb-4">
                        <li className="flex items-center"><Eye className="w-4 h-4 mr-2" /> 232 Views</li>
                        <li className="flex items-center"><MessageCircle className="w-4 h-4 mr-2" /> 35 Comments</li>
                        <li className="flex items-center"><Calendar className="w-4 h-4 mr-2" /> 24th March 2019</li>
                      </ul>
                      <p className="text-gray-600 mb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidi-dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                      <div className="blog-standard-footer flex justify-between items-center">
                        <div className="footer-left flex items-center">
                          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=60" alt="" className="w-10 h-10 rounded-full mr-3 object-cover" />
                          <a href="#" className="text-gray-700"><span className="text-gray-500">by</span> Hetmayar</a>
                        </div>
                        <div className="footer-right">
                          <a href="#" className="text-blue-600 flex items-center hover:text-blue-700">
                            Read More <ArrowRight className="w-4 h-4 ml-2" />
                          </a>
                        </div>
                      </div>
                        </div>
                      </div>
                      
                  {/* Third Blog Post */}
                  <div className="single-blog-standard mb-30">
                    <div className="blog-standard-content border-2 border-[#ededed] p-10">
                      <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop&q=60" alt="blog" className="w-full rounded-lg h-[400px] object-cover mb-8" />
                      <a href="#" className="cat text-blue-600 font-medium">Technology</a>
                      <h2 className="title text-2xl font-bold mt-2 mb-4">Magna aliqua. Ut enim ad minim venia m, quis nostrud exercitation ullamco</h2>
                      <ul className="post-meta flex space-x-6 text-sm text-gray-500 mb-4">
                        <li className="flex items-center"><Eye className="w-4 h-4 mr-2" /> 232 Views</li>
                        <li className="flex items-center"><MessageCircle className="w-4 h-4 mr-2" /> 35 Comments</li>
                        <li className="flex items-center"><Calendar className="w-4 h-4 mr-2" /> 24th March 2019</li>
                      </ul>
                      <p className="text-gray-600 mb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidi-dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                      <div className="blog-standard-footer flex justify-between items-center">
                        <div className="footer-left flex items-center">
                          <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=60" alt="" className="w-10 h-10 rounded-full mr-3 object-cover" />
                          <a href="#" className="text-gray-700"><span className="text-gray-500">by</span> Hetmayar</a>
                        </div>
                        <div className="footer-right">
                          <a href="#" className="text-blue-600 flex items-center hover:text-blue-700">
                            Read More <ArrowRight className="w-4 h-4 ml-2" />
                          </a>
                        </div>
                      </div>
                    </div>
              </div>
              
              {/* Pagination */}
                  <ul className="page-pagination blog-pagination mt-12 flex justify-center space-x-2">
                    <li><a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border hover:bg-blue-600 hover:text-white"><ArrowRight className="w-4 h-4 rotate-180" /></a></li>
                    <li><a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border bg-blue-600 text-white">01</a></li>
                    <li><a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border hover:bg-blue-600 hover:text-white">02</a></li>
                    <li><a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border hover:bg-blue-600 hover:text-white">...</a></li>
                    <li><a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border hover:bg-blue-600 hover:text-white">10</a></li>
                    <li><a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border hover:bg-blue-600 hover:text-white"><ArrowRight className="w-4 h-4" /></a></li>
                  </ul>
                </div>
              </div>

              {/* Sidebar */}
              <div className="w-full lg:w-4/12 mt-12 lg:mt-0 lg:pl-8">
                <div className="blog-sidebar">
                  {/* About Widget */}
                  <div className="widget about-widget border-2 border-[#ededed] p-[35px_40px] mb-[30px]">
                    <h4 className="widget-title text-[20px] pl-10 relative mb-[30px] font-bold text-[#002249] gilroy-bold before:content-[''] before:absolute before:h-1 before:w-1 before:left-[21px] before:top-3 before:bg-[#0c59db] after:content-[''] after:absolute after:h-1 after:w-[18px] after:left-0 after:top-3 after:bg-[#0c59db]">About Me</h4>
                    <div className="about-content text-center">
                      <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=60" alt="" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
                      <h6 className="title text-lg font-bold mb-2 text-[#002249] gilroy-bold">Rosalina D. Willaimson</h6>
                      <p className="text-[#616161] mb-4 font-['Karla']">Lorem ipsum dolor sit amet, consecte-tur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                      <div className="social-links flex justify-center space-x-2">
                        <a href="#" className="h-10 w-10 bg-[#002249] text-white flex items-center justify-center hover:bg-red-600 transition-all duration-300">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="h-10 w-10 bg-[#002249] text-white flex items-center justify-center hover:bg-red-600 transition-all duration-300">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="h-10 w-10 bg-[#002249] text-white flex items-center justify-center hover:bg-red-600 transition-all duration-300">
                          <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" className="h-10 w-10 bg-[#002249] text-white flex items-center justify-center hover:bg-red-600 transition-all duration-300">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
            </div>
                </div>
              </div>
              
                  {/* Search Widget */}
                  <div className="widget search-widget border-2 border-[#ededed] p-[35px_40px] mb-[30px]">
                    <h4 className="widget-title text-[20px] pl-10 relative mb-[30px] font-bold text-[#002249] gilroy-bold before:content-[''] before:absolute before:h-1 before:w-1 before:left-[21px] before:top-3 before:bg-[#0c59db] after:content-[''] after:absolute after:h-1 after:w-[18px] after:left-0 after:top-3 after:bg-[#0c59db]">Search</h4>
                    <form className="search-form">
                      <input type="text" placeholder="Search..." className="w-full px-4 py-2 border border-[#ededed] rounded-lg focus:outline-none focus:border-blue-600" />
                      <button type="submit" className="w-full mt-2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        <i className="fas fa-search mr-2"></i> Search
                      </button>
                    </form>
              </div>
              
                  {/* Popular Feeds Widget */}
                  <div className="widget news-feed-widget border-2 border-[#ededed] p-[35px_40px] mb-[30px]">
                    <h4 className="widget-title text-[20px] pl-10 relative mb-[30px] font-bold text-[#002249] gilroy-bold before:content-[''] before:absolute before:h-1 before:w-1 before:left-[21px] before:top-3 before:bg-[#0c59db] after:content-[''] after:absolute after:h-1 after:w-[18px] after:left-0 after:top-3 after:bg-[#0c59db]">Popular Feeds</h4>
                    <div className="news-feed-items font-['Karla']">
                      <div className="news-feed-item relative pl-[100px] mb-[30px] pb-[30px] border-b border-[#e3eeff]">
                        <img src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=100&auto=format&fit=crop&q=60" alt="feed" className="absolute left-0 top-0 w-20 h-20 rounded-full object-cover transition-all duration-300 ease-out hover:opacity-80" />
                      <div>
                          <a href="#" className="text-lg font-medium text-[#616161] hover:text-red-600">Lorem ipsum dolor sit cing elit, sed do.</a>
                          <span className="text-sm text-[#616161] block mt-1"><Calendar className="w-4 h-4 inline mr-1" />24th March 2019</span>
                        </div>
                      </div>
                      <div className="news-feed-item relative pl-[100px] mb-[30px] pb-[30px] border-b border-[#e3eeff]">
                        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=100&auto=format&fit=crop&q=60" alt="feed" className="absolute left-0 top-0 w-20 h-20 rounded-full object-cover transition-all duration-300 ease-out hover:opacity-80" />
                        <div>
                          <a href="#" className="text-lg font-medium text-[#616161] hover:text-red-600">Lorem ipsum dolor sit cing elit, sed do.</a>
                          <span className="text-sm text-[#616161] block mt-1"><Calendar className="w-4 h-4 inline mr-1" />24th March 2019</span>
                      </div>
                    </div>
                      <div className="news-feed-item relative pl-[100px]">
                        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=100&auto=format&fit=crop&q=60" alt="feed" className="absolute left-0 top-0 w-20 h-20 rounded-full object-cover transition-all duration-300 ease-out hover:opacity-80" />
                        <div>
                          <a href="#" className="text-lg font-medium text-[#616161] hover:text-red-600">Lorem ipsum dolor sit cing elit, sed do.</a>
                          <span className="text-sm text-[#616161] block mt-1"><Calendar className="w-4 h-4 inline mr-1" />24th March 2019</span>
                </div>
              </div>
                    </div>
                </div>

                  {/* Categories Widget */}
                  <div className="widget categories-widget border-2 border-[#ededed] p-[35px_40px] mb-[30px]">
                    <h4 className="widget-title text-[20px] pl-10 relative mb-[30px] font-bold text-[#002249] gilroy-bold before:content-[''] before:absolute before:h-1 before:w-1 before:left-[21px] before:top-3 before:bg-[#0c59db] after:content-[''] after:absolute after:h-1 after:w-[18px] after:left-0 after:top-3 after:bg-[#0c59db]">Categories</h4>
                    <ul className="categories-list space-y-2">
                      <li>
                        <a href="#" className="flex items-center justify-between text-[#616161] hover:text-red-600 transition-colors">
                          <span>Business</span>
                          <span className="text-sm">(15)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center justify-between text-[#616161] hover:text-red-600 transition-colors">
                          <span>Technology</span>
                          <span className="text-sm">(10)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center justify-between text-[#616161] hover:text-red-600 transition-colors">
                          <span>Design</span>
                          <span className="text-sm">(8)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center justify-between text-[#616161] hover:text-red-600 transition-colors">
                          <span>Development</span>
                          <span className="text-sm">(12)</span>
                        </a>
                      </li>
                    </ul>
              </div>
              
                  {/* Never Miss News Widget */}
                  <div className="widget social-links border-2 border-[#ededed] p-[35px_40px] mb-[30px]">
                    <h4 className="widget-title text-[20px] pl-10 relative mb-[30px] font-bold text-[#002249] gilroy-bold before:content-[''] before:absolute before:h-1 before:w-1 before:left-[21px] before:top-3 before:bg-[#0c59db] after:content-[''] after:absolute after:h-1 after:w-[18px] after:left-0 after:top-3 after:bg-[#0c59db]">Never Miss News</h4>
                    <ul className="flex justify-center space-x-2">
                      <li>
                        <a href="#" className="h-10 w-10 bg-[#002249] text-white flex items-center justify-center hover:bg-red-600 transition-all duration-300">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="h-10 w-10 bg-[#002249] text-white flex items-center justify-center hover:bg-red-600 transition-all duration-300">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="h-10 w-10 bg-[#002249] text-white flex items-center justify-center hover:bg-red-600 transition-all duration-300">
                          <i className="fab fa-behance"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="h-10 w-10 bg-[#002249] text-white flex items-center justify-center hover:bg-red-600 transition-all duration-300">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                    </ul>
                </div>

                  {/* Instagram Feeds Widget */}
                  <div className="widget instagram-feed-widget border-2 border-[#ededed] p-[35px_40px] mb-[30px]">
                    <h4 className="widget-title text-[20px] pl-10 relative mb-[30px] font-bold text-[#002249] gilroy-bold before:content-[''] before:absolute before:h-1 before:w-1 before:left-[21px] before:top-3 before:bg-[#0c59db] after:content-[''] after:absolute after:h-1 after:w-[18px] after:left-0 after:top-3 after:bg-[#0c59db]">Instagram Feeds</h4>
                    <ul className="grid grid-cols-3 gap-2">
                      <li>
                        <a href="#" className="block transition-all duration-300 ease-out hover:opacity-80">
                          <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&auto=format&fit=crop&q=60" alt="instagram" className="w-full h-[100px] object-cover transition-all duration-300 ease-out" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block transition-all duration-300 ease-out hover:opacity-80">
                          <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&auto=format&fit=crop&q=60" alt="instagram" className="w-full h-[100px] object-cover transition-all duration-300 ease-out" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block transition-all duration-300 ease-out hover:opacity-80">
                          <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&auto=format&fit=crop&q=60" alt="instagram" className="w-full h-[100px] object-cover transition-all duration-300 ease-out" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block transition-all duration-300 ease-out hover:opacity-80">
                          <img src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=200&auto=format&fit=crop&q=60" alt="instagram" className="w-full h-[100px] object-cover transition-all duration-300 ease-out" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block transition-all duration-300 ease-out hover:opacity-80">
                          <img src="https://images.unsplash.com/photo-1560343090-f0409e92791a?w=200&auto=format&fit=crop&q=60" alt="instagram" className="w-full h-[100px] object-cover transition-all duration-300 ease-out" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block transition-all duration-300 ease-out hover:opacity-80">
                          <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=60" alt="instagram" className="w-full h-[100px] object-cover transition-all duration-300 ease-out" />
                        </a>
                      </li>
                    </ul>
              </div>
              
                  {/* Tags Widget */}
                  <div className="widget tags-widget border-2 border-[#ededed] p-[35px_40px] mb-[30px]">
                    <h4 className="widget-title text-[20px] pl-10 relative mb-[30px] font-bold text-[#002249] gilroy-bold before:content-[''] before:absolute before:h-1 before:w-1 before:left-[21px] before:top-3 before:bg-[#0c59db] after:content-[''] after:absolute after:h-1 after:w-[18px] after:left-0 after:top-3 after:bg-[#0c59db]">Popular Tags</h4>
                    <ul className="flex flex-wrap gap-2 font-['Karla']">
                      <li>
                        <a href="#" className="bg-[#f5faff] text-[#616161] text-[12px] leading-[30px] px-5 font-bold transition-all duration-300 ease-out hover:text-red-600">Popular</a>
                      </li>
                      <li>
                        <a href="#" className="bg-[#f5faff] text-[#616161] text-[12px] leading-[30px] px-5 font-bold transition-all duration-300 ease-out hover:text-red-600">design</a>
                      </li>
                      <li>
                        <a href="#" className="bg-[#f5faff] text-[#616161] text-[12px] leading-[30px] px-5 font-bold transition-all duration-300 ease-out hover:text-red-600">ux</a>
                      </li>
                      <li>
                        <a href="#" className="bg-[#f5faff] text-[#616161] text-[12px] leading-[30px] px-5 font-bold transition-all duration-300 ease-out hover:text-red-600">usability</a>
                      </li>
                      <li>
                        <a href="#" className="bg-[#f5faff] text-[#616161] text-[12px] leading-[30px] px-5 font-bold transition-all duration-300 ease-out hover:text-red-600">develop</a>
                      </li>
                      <li>
                        <a href="#" className="bg-[#f5faff] text-[#616161] text-[12px] leading-[30px] px-5 font-bold transition-all duration-300 ease-out hover:text-red-600">icon</a>
                      </li>
                      <li>
                        <a href="#" className="bg-[#f5faff] text-[#616161] text-[12px] leading-[30px] px-5 font-bold transition-all duration-300 ease-out hover:text-red-600">business</a>
                      </li>
                      <li>
                        <a href="#" className="bg-[#f5faff] text-[#616161] text-[12px] leading-[30px] px-5 font-bold transition-all duration-300 ease-out hover:text-red-600">consult</a>
                      </li>
                    </ul>
              </div>
              
                  {/* Advertisement Widget */}
                  <div className="widget ad-widget bg-white p-4 mb-[30px] rounded-lg shadow-md">
                    <div className="relative w-[350px] h-[600px] mx-auto">
                      <img 
                        src={sidebarAd2}
                        alt="advertisement" 
                        className="w-full h-full object-cover rounded-lg"
                        style={{
                          verticalAlign: 'middle',
                          borderStyle: 'none',
                          overflowClipMargin: 'content-box',
                          overflow: 'clip'
                        }}
                      />
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <div className="bg-[#0c59db] w-40 h-32 rounded-lg flex flex-col items-center justify-center mb-4">
                          <span className="block text-white text-[16px] gilroy-bold">350x600</span>
                          <span className="text-white text-[24px] mt-2 gilroy-bold">Add Banner</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Blog;
