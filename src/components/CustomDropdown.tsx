import React, { useContext, useState } from 'react';
import StoreContext from '../store/StoreContext';
import { Option } from '../utilities';



 interface customProps  {
  options: Option[]
}


  

const CustomDropdown = ({options}: customProps) => {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  // const { options } = useContext(StoreContext)


  const selectedOption = options[selectedOptionIndex];
  // console.log( options && options)

  const selectOption = (index: number) => {
    setSelectedOptionIndex(index);
    setIsOpen(false);
  };

  const onShowModal = () => {
    // Implementation for showing modal
  };

  return (
    <div className="relative w-full flex justify-end items-start   ">
  

      {/* CustomDropdown button */}
      <button
        onClick={() => { setIsOpen(!isOpen); console.log('clicked') }}
        className={`flex items-center justify-between capitalize w-[100%]  px-1 sm:px-4 py-2 text-sm font-medium text-gray-700 bg-cards rounded-md shadow-md hover:bg-gray-50 focus:outline-none ${isOpen && 'focus:ring-1'} focus:ring-primary focus:ring-offset-2`}
      >
        {   selectedOption.label}
        <svg
          className="w-4 h-4 "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* CustomDropdown options */}
      <div
        className={`absolute top-10  w-[100%] mt-2 bg-white rounded-md shadow-lg ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <ul
          className="p-1 overflow-auto text-base leading-6 shadow-xs max-h-56 focus:outline-none sm:text-sm sm:leading-5"
          tabIndex={-1}
          role="menu"
          aria-label="CustomDropdown menu"
          aria-orientation="vertical"
        >
          {options.map((option, index) => (
            <li
              key={option.id}
              onClick={() => selectOption(index)}
              className={`text-secondary  cursor-default text-left hover:bg-gray-200 select-none relative py-2 pl-3 pr-9 ${
                index === selectedOptionIndex ? 'bg-gray-300' : ''
              }`}
              role="menuitem"
            >
              <span className="text-secondary capitalize">{option.label}</span>
              {/* <span class="text-gray-500 text-sm">{option.path}</span> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CustomDropdown
