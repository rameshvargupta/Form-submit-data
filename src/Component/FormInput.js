import React, { useContext} from 'react'
import { Button, TextField } from '@mui/material'
import { multiData } from '../Store'
import { Link } from 'react-router-dom'

const FormInput = () => {
const {inputData,setinputData}=useContext(multiData)

     return (

      // api "https://64cba1b92eafdcdc85191959.mockapi.io/form"
    <div className='form1'>
      <h1 style={{color:"red",textAlign:"center"}}>Fill your Details(1)</h1>

      <TextField label="First Name" id='FirstName' required margin='normal'variant='outlined' 
       color='secondary' value={inputData.first} name='first' 
       onChange={(e)=>setinputData({...inputData,first:e.target.value})} /> <br />

     <TextField label="Last Name" required margin='normal'variant='outlined' color='secondary'
     value={inputData.last} name='last' onChange={(e)=>setinputData({...inputData,last:e.target.value})} 
      /> <br /> 

     <TextField label="Email Id" required margin='normal'variant='outlined' color='secondary'
     value={inputData.email} name='email' onChange={(e)=>setinputData({...inputData,email:e.target.value})}
     /> <br /> 

    <Link to={"/SecondForm"}> <Button variant='contained' color='success'>Next</Button></Link>
 


    </div>
  )
}

export default FormInput
