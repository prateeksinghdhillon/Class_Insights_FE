import React, { useState } from 'react';

// Dropdown component
export default function CustomDropdown({ options, onSelect ,name}) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
   
    const value = event.target.value;
    setSelectedOption(value);
    onSelect(value);
  };

  return (
    <select value={selectedOption} onChange={handleSelectChange} name={name}> 
      <option value="">Select an option</option>
      {options.map((option,index) => (
        <option key={index} value={option.name}>
          {option.name}
        </option>
      ))}
    </select>
  );
}
