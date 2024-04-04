// OnChange.js
import React, { useState } from 'react';

function OnChange() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Masukkan teks"
      />
      <p>Nilai input: {inputValue}</p>
    </div>
  );
}

export default OnChange;
