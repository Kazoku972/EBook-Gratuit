import React, { forwardRef } from 'react';

const Page = forwardRef(({ number, children, density, isDarkMode }, ref) => {
  return (
    <div 
      className={`h-full w-full overflow-hidden shadow-inner relative flex flex-col items-center text-center px-4 py-6 transition-all duration-500 ${
        isDarkMode 
          ? 'bg-[#1a1a1a] shadow-none' 
          : 'bg-[#F9F7F2]'
      }`} 
      ref={ref} 
      data-density={density || 'soft'}
      data-page={number}
    >
      <div className="h-full w-full flex flex-col items-center justify-start overflow-y-auto pointer-events-none">
        {children}
      </div>
      <div 
        className={`absolute right-4 text-xs font-medium transition-colors duration-500 ${
          isDarkMode ? 'text-gray-600' : 'text-gray-400'
        }`}
        style={{ top: '96%' }}
      >
        {number}
      </div>
    </div>
  );
});

export default Page;
