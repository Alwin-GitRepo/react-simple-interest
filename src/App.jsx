import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {

  const [Amount,setAmount]=useState('')
  const [Rate,setRate]=useState('')
  const [Year,setYear]=useState('')
  const [Interest,setInterest]=useState('')

  console.log(Amount);
  console.log(Rate);
  console.log(Year);

  const Calculate=(e)=>{
    let result=(Amount*Rate*Year)/100
    console.log(result);
    setInterest(result);
  }

  const Reset=()=>{
     setAmount('')
     setRate('')
     setYear('')
     setInterest('') 
  }

  return (
    <div className="App">
      <div className="container">
        <div className="head">
          <h1 style={{marginBottom : 1 + "rem"}}>Simple Interest Calculator</h1>
          <p>The Simple Interest Calculator calculates the interest and end balance based on the simple interest formula. Click the tabs to calculate the different parameters of the simple interest formula. In real life, most interest calculations involve compound Interest. To calculate compound interest, use the Interest Calculator.</p>
        </div>
        <div className="card">
          <h1 className='symbol'>&#8377;</h1>
          <p className='text'>Total Simple Interest : {Interest}</p>
        </div>
        <div className="input">
          <TextField value={Amount} onChange={e=>setAmount(e.target.value)} id="outlined-basic" label="Amount" variant="outlined" />
          <TextField value={Rate} onChange={e=>setRate(e.target.value)} id="outlined-basic" label="Rate of Interest" variant="outlined" />
          <TextField value={Year} onChange={e=>setYear(e.target.value)} id="outlined-basic" label="Number of Years" variant="outlined" />
        </div>
        <div className="btn">
          <Button onClick={Calculate} variant="contained" color='success'>CALCULATE</Button>
          <Button onClick={Reset} variant="contained" color='error'>RESET</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
