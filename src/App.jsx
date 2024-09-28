import React, { useState } from 'react'
function App() {
  const [input, setInput] = useState({
    principal: '',
    interest: '',
    loan: ''
  });
  const [ans, setAns] = useState(0);
  function handleChange(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }
  function calculateMortgage() {
    let P = (input.principal);
    let n = (input.loan) * 12;
    let r = (input.interest) / (100 * 12);
    let res = P * (r * Math.pow((1 + r), (n))) / (Math.pow(1 + r, n) - 1);
    setAns(res);
    setInput({
      principal: '',
      interest: '',
      loan: ''
    });
  }

  return (
    <div>

      <div className='flex flex-col p-6 '>
        <h1 className='text-xl text-slate-600' >Mortgage Calculator </h1>
        <label htmlFor="principle">Principle Load Amount</label>
        <input type="float" name="principal" id="principal" className='bg-cyan-300 w-96 h-12 p-4' value={input.principal}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="interest">Interest Rate</label>
        <input type="float" name="interest" id="interest" className='bg-cyan-300 w-96 h-12 p-4' value={input.interest} onChange={(e) => handleChange(e)} /> %
        <label htmlFor="loan">Length of Loan</label>
        <input type="float" name="loan" id="loan" className='bg-cyan-300 w-96 h-12 p-4' value={input.loan} onChange={(e) => handleChange(e)} /> Years
        <button className='bg-red-500 w-32' onClick={calculateMortgage} >Calculate</button>
        <p>Your Monthly mortgage Payment will be {ans}</p>
      </div>
    </div>
  )
}
export default App