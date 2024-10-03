import React, { useContext } from 'react'
import { multiData } from '../Store'
import { TextField,Button } from '@mui/material'
import { Link } from 'react-router-dom'
import PrintData from './PrintData'

const SecondForm = () => {
    const {inputData,setinputData,handelSubmit}=useContext(multiData)
  return (

      <div className='form1'>
      <h1 style={{color:"red",textAlign:"center"}}>Fill your Details(2)</h1>

      <TextField label="age" id='age' required margin='normal'variant='outlined' 
       color='secondary' value={inputData.age} name='age' 
       onChange={(e)=>setinputData({...inputData,age:e.target.value})} /> <br />

     <TextField label="mobile" required margin='normal'variant='outlined' color='secondary'
     value={inputData.mobile} name='mobile' onChange={(e)=>setinputData({...inputData,mobile:e.target.value})} 
      /> <br /> 

     <TextField label="address" required margin='normal'variant='outlined' color='secondary'
     value={inputData.address} name='address' onChange={(e)=>setinputData({...inputData,address:e.target.value})}
     /> <br /> 

    <Link to={"/FormInput"}> <Button variant='contained' color='success'>Back</Button></Link>
    <Button onClick={handelSubmit} variant='contained' color='success'>Submit</Button>
    <PrintData/>
    </div>
  )
}

export default SecondForm
