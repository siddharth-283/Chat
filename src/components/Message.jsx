import React from 'react'
import Img1 from '../img/user5.jpg'
import Img from '../img/user7.jpg'

const Message = () => {
  return (
    <div className='message owner'>
      
      <div className="messageInfo">
        <img src={Img1} alt="" />
        <span>Just Know</span>
      </div>

      <div className="messageContent">
        <p>hello</p>
        <img src={Img} alt="" />
      </div>

    </div>
  )
}

export default Message
