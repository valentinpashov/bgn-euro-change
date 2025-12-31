import { useState } from 'react';
import './App.css';
import MoneyInput from './components/MoneyInput';
import ChangeResult from './components/ChangeResult';

function App() {
  const [bill, setBill] = useState('');     
  const [given, setGiven] = useState('');   
  
  const rate = 1.95583;
  const billNum = parseFloat(bill);
  const givenNum = parseFloat(given);

  let changeBGN = 0;
  let changeEUR = 0;

  if (!isNaN(billNum) && !isNaN(givenNum) && givenNum >= billNum) {
    const diff = givenNum - billNum;
    changeBGN = diff.toFixed(2);
    changeEUR = (diff / rate).toFixed(2);
  }

  return (
    <div className="app-container">
      <div className="card">
        <h1>💶 Ресто Калкулатор</h1>
        <p style={{ color: '#666', marginBottom: '20px' }}>Автоматично изчисляване по курс 1.95583</p>

        <MoneyInput 
          label="Сметка (лв)" 
          value={bill} 
          onChange={setBill} 
          placeholder="Напр. 15.50"
        />

        <MoneyInput 
          label="Дадена сума (лв)" 
          value={given} 
          onChange={setGiven} 
          placeholder="Напр. 20.00"
        />

        <ChangeResult bgn={changeBGN} eur={changeEUR} />
      </div>
    </div>
  )
}

export default App;