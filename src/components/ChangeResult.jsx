import React from 'react';

const ChangeResult = ({ bgn, eur }) => {
  if (bgn <= 0) return null;

  return (
    <div style={{
      marginTop: '25px',
      padding: '20px',
      backgroundColor: '#e3f2fd', 
      border: '1px solid #90caf9',
      borderRadius: '10px',
      animation: 'fadeIn 0.5s ease-in-out'
    }}>
      <h3 style={{ margin: '0 0 15px 0', color: '#1565c0' }}>Ресто за връщане:</h3>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
        <span style={{ fontSize: '18px', color: '#555' }}>В лева:</span>
        <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#2e7d32' }}>{bgn} лв.</span>
      </div>

      <div style={{ width: '100%', height: '1px', background: '#bbdefb', margin: '10px 0' }}></div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span style={{ fontSize: '18px', color: '#555' }}>В евро:</span>
        <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#1565c0' }}>{eur} €</span>
      </div>
    </div>
  );
};

export default ChangeResult;