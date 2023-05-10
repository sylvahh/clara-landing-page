import React from 'react';
type dropdownProps = {
  showDrawer: boolean;
  setShowDrawer: any;
};
const SubNavDropdown = ({ showDrawer, setShowDrawer }: dropdownProps) => {
  return (
    <div
      onMouseLeave={() => setShowDrawer(false)}
      className={`${
        showDrawer
          ? ' opacity-100  transform -translate-y-0'
          : ' delay-300 opacity-0 translate-y-full'
      } fixed top-[70%] left-1/2 -translate-x-1/2 transition-all duration-300 ease-in-out w-[90%] h-full bg-white shadow-md z-50`}
    >
          <div className='flex justify-center items-center  w-full h-full'>
              <h1 className='font-bold text-2xl'>content goes here </h1>
     </div>
    </div>
  );
};

export default SubNavDropdown;
