import React from 'react';

const BlogPost = ({ image, date, title, excerpt, author, authorImage }) => {
  return (
    <div className="blog-post bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-[250px] object-cover"
          loading="lazy"
        />
        <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded">
          {date}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3">
          <a href="#" className="text-gray-900 hover:text-blue-600 transition-colors duration-300">
            {title}
          </a>
        </h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
            <img
              src={authorImage}
              alt={author}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <span className="text-gray-800">{author}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogPost; 