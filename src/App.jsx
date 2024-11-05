import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './App.css'
import { useState } from 'react';

function App() {

  const [Principle , setPrinciple] = useState("")
  const [rate , setRate] = useState("")
  const [year, setYear] = useState("")

  const [isPrinciple , setIsPrinciple] = useState(true) 
  const [isRate , setIsRate] = useState(true)
  const [isYear , setIsYear] = useState(true)
  const [interest , setInterest] = useState(0)
  

  const validate = (e)=>{
    // console.log(e.target.value);
    // console.log(e.target.name);

    const {name , value} = e.target
    console.log(name);
    console.log(value);
    
    // match(regular expression) - match returns an array when the value matches with the regular expression else return null

    // ^[0-9a-zA-Z@]*{MIN,MAX}$

    // console.log(value.match('^[0-9]*$'));
    

    if(!!value.match('^[0-9]*$')){
      if(name =='principle'){
        setPrinciple(value)
        setIsPrinciple(true)
      }
      else if(name =='rate'){
        setRate(value)
        setIsRate(true)
      }
      else{
        setYear(value)
        setIsYear(true)
      }
    }
    else{
      if(name =='principle'){
        setPrinciple(value)
        setIsPrinciple(false)
      }
      else if(name =='rate'){
        setRate(value)
        setIsRate(false)
      }
      else{
        setYear(value)
        setIsYear(false)
      }

    }


  }

  const handleReset = ()=>{
    setPrinciple("")
    setRate("")
    setYear("")
    setIsPrinciple(true)
    setIsRate(true)
    setIsYear(true)
    setInterest(0)
  }

  const calculate = ()=>{
    setInterest((Principle * rate * year)/100)
  }


  return (
    <>
      <div className='bg-dark d-flex align-items-center justify-content-center' style={{height:'100vh' , width:'100%'}}>

        <div className='bg-light p-5 rounded-2' style={{width:'500px'}}>
          <h1>Simple Interest App</h1>
          <p>Calculate your simple interest easily</p>

          <div className='bg-warning p-3 mt-4 d-flex align-items-center justify-content-center rounded flex-column' style={{height:'150px'}}>
            <h1>{interest}</h1>
            <p>Total simple interest</p>
          </div>

          <div className='my-3'>
          <TextField id="outlined-basic" className='w-100' value={Principle} name='principle' label="₹ Principle amount" variant="outlined" onChange={(e)=>validate(e)}  />
          { isPrinciple==false && <p className='text-danger'>*Invalid Input</p>}
          </div>

          <div className='mb-3'>
          <TextField id="outlined-basic" className='w-100' value={rate} name='rate' label="Rate of Interest (%)" variant="outlined" onChange={(e)=>validate(e)} />
          { isRate==false && <p className='text-danger'>*Invalid Input</p>}
          </div>

          <div className='mb-3'>
          <TextField id="outlined-basic" className='w-100' value={year} name='year' label="Year (Yr)" variant="outlined" onChange={(e)=>validate(e)} />
         { isYear==false && <p className='text-danger'>*Invalid Input</p>}
          </div>

          <div className='mb-3 d-flex justify-content-between'>

          <Button disabled={isPrinciple && isRate && isYear? false: true} variant="contained" style={{width:'190px'}} className='p-3' color='success' onClick={calculate} >Calculate</Button>

          <Button variant="outlined" style={{width:'190px'}} className='p-3' onClick={handleReset}>Reset</Button>

          </div>
          
        </div>
      </div>
    </>
  )
}

export default App
