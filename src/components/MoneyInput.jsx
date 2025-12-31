import React from 'react';

const MoneyInput = ({ label, value, onChange, placeholder }) => {
  return (
    <div style={{ marginBottom: '15px', textAlign: 'left' }}>
      <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#333' }}>
        {label}
      </label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        step="0.01"
        style={{
          width: '100%',
          padding: '12px',
          fontSize: '16px',
          border: '1px solid #ccc',
          borderRadius: '8px',
          boxSizing: 'border-box'
        }}
      />
    </div>
  );
};

export default MoneyInput;