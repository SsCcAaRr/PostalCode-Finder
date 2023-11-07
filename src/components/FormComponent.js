import React, { useState } from 'react';

const FormComponent = ({ onSearch }) => {
  const [postalCode, setPostalCode] = useState('');

  const handleFormSubmit = () => {
    onSearch(postalCode);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter the Pin Code here"
        value={postalCode}
        onChange={(e) => setPostalCode(e.target.value)}
      />
      <button onClick={handleFormSubmit}>Search</button>
    </div>
  );
};

export default FormComponent;
