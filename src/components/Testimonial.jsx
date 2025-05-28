import React from 'react';

const Testimonial = ({ quote, author, position, image }) => {
  return (
    <div className="testimonial-item p-8 bg-white rounded-lg shadow-lg">
      <div className="quote mb-6">
        <i className="fas fa-quote-left text-4xl text-blue-600 opacity-20"></i>
        <p className="text-gray-600 mt-4">{quote}</p>
      </div>
      <div className="author flex items-center">
        <img 
          src={image} 
          alt={author} 
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-gray-900">{author}</h4>
          <p className="text-sm text-gray-600">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial; 