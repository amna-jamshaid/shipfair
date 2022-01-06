import React from 'react'
import { Link, useHistory } from 'react-router-dom'

export const Header = () => {
  const history = useHistory();
  return (
    
    <header className='header'>
      <div>
        <Link className='links' to='/'>
          Home
        </Link>
      </div>

      <nav className='navbar'>

        
        <div>
        <Link  className='links' to ='/login'>
            Login
          </Link>
          <Link  className='links' to ='/signup'>
            Sign Up
          </Link>
          
        </div>
      </nav>
    </header>
      
      
    
    
  )
}

export default Header