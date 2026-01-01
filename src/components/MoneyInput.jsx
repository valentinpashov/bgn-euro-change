import React from 'react';
import './MoneyInput.css'; 

const MoneyInput = ({ label, value, onChange, placeholder }) => {
  return (
    <div className="input-container">
      <label className="input-label"> {label} </label>
      <input type="number" value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} step="0.01" className="custom-input"/>
    </div>
  );
};

export default MoneyInput;