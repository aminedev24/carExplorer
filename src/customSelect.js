// CustomSelect.js

import React, { useState, useRef, useEffect } from 'react';
import './customSelect.css';

const CustomSelect = ({ label, value, onChange, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (optionValue) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="custom-select" ref={selectRef}>
      <label className={`year-label ${value ? 'selected' : ''}`} onClick={handleToggle}>
        {label}
      </label>
      <div className="year-input" onClick={handleToggle}>
        {value || ''}
      </div>
      <div className="arrow">&#9662;</div>
      {isOpen && (
        <div className="year-options-container">
          {options.map((option) => (
            <div
              key={option.value}
              className="year-option"
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
