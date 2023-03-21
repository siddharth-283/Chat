import React from 'react'
import Add from "../img/user1.jpg"

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Sidd Chat</span>
      <div className="user">
        <img src={Add} alt="" />
        <span>John</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
