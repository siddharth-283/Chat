import React from 'react'
import Add from '../img/addAvatar.png'
const Register = () => {
  return (
    <div>
      <div className="formContainer">
              <div className="formWrapper">
                  <span className="logo">Sidd Chat</span>
                  <span className="title">Register</span>
                  <form action="">
                      <input type="text" placeholder='display name'/>
                      <input type="email" placeholder='email'/>
                      <input type="password" placeholder='password'/>
                      <input style={{display:"none"}} type="file" id="flie"/>
                      <label htmlFor="flie">
                          <img src={Add} alt="" />
                          <span>Add an avatar</span>
                      </label>
                      <button>Sign up</button>
                  </form>
                  <p>You do have account? Login</p>
            </div>
        </div>
    </div>
  )
}

export default Register
