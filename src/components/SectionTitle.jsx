import React from 'react';

const SectionTitle = ({ tag, title }) => {
  return (
    <div className="section-title text-center mb-[60px]">
      <span className="text-blue-600 font-semibold block mb-2">{tag}</span>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900">{title}</h2>
    </div>
  );
};

export default SectionTitle; 