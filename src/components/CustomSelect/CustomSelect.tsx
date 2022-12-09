import React, { useState } from 'react';

interface CustomSelectProps {
  options: string[];
  defaultValue: string;
  onChange: (option: string) => void;
}

const CustomSelect = ({ options, defaultValue, onChange }: CustomSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultValue);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange(option);
  };

  return (
    <div className="custom-select">
      <div className={`selected-option ${isOpen ? 'is-open' : ''}`} onClick={toggleOpen}>
        {selectedOption}
      </div>
      {isOpen && (
        <div className="options">
          {options.map((option) => (
            <div key={option} className="option" onClick={() => selectOption(option)}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
