import React from 'react';
import './ChangeResult.css'; 

const ChangeResult = ({ bgn, eur }) => {
  if (bgn <= 0) return null;

  return (
    <div className="result-card">
      <h3 className="result-title">Ресто за връщане:</h3>
      
      <div className="result-row" style={{ marginBottom: '10px' }}>
        <span className="label-text">В лева:</span>
        <span className="amount-bgn">{bgn} лв.</span>
      </div>

      <div className="divider"></div>

      <div className="result-row">
        <span className="label-text">В евро:</span>
        <span className="amount-eur">{eur} €</span>
      </div>
    </div>
  );
};

export default ChangeResult;