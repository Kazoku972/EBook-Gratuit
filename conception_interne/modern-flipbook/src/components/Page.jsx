import React, { forwardRef } from 'react';

const Page = forwardRef((props, ref) => {
  return (
    <div className="bg-white overflow-hidden shadow-inner relative flex flex-col items-center text-center px-4 py-6" ref={ref} data-density={props.density || 'soft'}>
      <div className="flex-1 w-full flex flex-col items-center justify-start overflow-y-auto pointer-events-none">
        {props.children}
      </div>
      <div className="absolute bottom-2 right-4 text-xs text-gray-400 font-medium">
        {props.number}
      </div>
    </div>
  );
});

export default Page;
