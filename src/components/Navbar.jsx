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
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Team</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <section class="sec1"> </section>
      <section class="sec2"> </section>
      <section class="sec3"> </section>
      <section class="sec4"> </section>
      <section class="sec5"> </section>
    </>
  )
}