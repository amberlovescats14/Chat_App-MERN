import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="navbar bg-dark">
      <h1>
        <a href="index.html"><i className="fas fa-code"></i> Amber Jones</a>
      </h1>
      <ul>
        <li>
          <Link to='/'>
            <i className='fas fa-code'/> PACE
          </Link>
        </li>
        <li>
          <Link to='/register'>
            Register
          </Link>  
        </li>
        <li>
          <Link to='/login'>
            Login
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar

//RACF 