import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='main'> 
        <Link to={'/FormInput'}>Form</Link>
        <Link to={'/About'}>About</Link>
        </div>
    )
}

export default Navbar
