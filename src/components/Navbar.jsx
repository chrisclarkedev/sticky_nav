import React from 'react';



export default function Navbar() {
  return (
    <>
      <div className="nav">
        <div class="logo">
          <img src={require('./images/logo.png')} />
        </div>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#" class="active">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Team</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </>
  )
}