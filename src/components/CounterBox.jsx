import React from 'react';

const CounterBox = ({ icon, count, title, iconBgColor }) => {
  return (
    <div className="counter-box text-center p-[35px] border-3 border-white/10">
      <div className={`icon h-[75px] w-[75px] text-[30px] text-white inline-flex items-center justify-center ${iconBgColor} rounded-full mb-5 mx-auto`}>
        {icon}
      </div>
      <span className="block text-4xl font-bold text-white mb-2">{count}</span>
      <h6 className="text-lg font-semibold text-white/90">{title}</h6>
    </div>
  );
};

export default CounterBox; 