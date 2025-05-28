import React from 'react';

const TeamMember = ({ image, name, position }) => {
  return (
    <div className="team-member text-center">
      <div className="member-photo relative overflow-hidden group rounded-lg">
        <img
          src={image}
          alt={name}
          className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="social-icons absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-blue-400 transition-colors duration-300">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white hover:text-blue-400 transition-colors duration-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white hover:text-blue-400 transition-colors duration-300">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <h4 className="text-xl font-semibold mt-4 mb-2">{name}</h4>
      <p className="text-gray-600">{position}</p>
    </div>
  );
};

export default TeamMember; 