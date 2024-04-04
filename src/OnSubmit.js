// OnSubmit.js
import React, { useState } from 'react';

function OnSubmit() {
  const [inputValue, setInputValue] = useState('');
  const [submittedValue, setSubmittedValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedValue(inputValue);
    setInputValue('');
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Masukkan teks"
        />
        <button type="submit">Submit</button>
      </form>
      <p>Nilai yang disubmit: {submittedValue}</p>
    </div>
  );
}

export default OnSubmit;
