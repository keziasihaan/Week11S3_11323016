import React from 'react';

function OnClick() {
  const handleClick = () => {
    alert('Tombol di-klik!');
  };

  return (
    <div>
      <button onClick={handleClick}>Klik saya</button>
    </div>
  );
}

export default OnClick;
