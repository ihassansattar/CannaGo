import React, { useState } from 'react'
import Profile from '../components/Profile'
import CustomInput from '../components/CustomInput'
import avatar from '../images/avatar.png'

import greenPhone from '../images/greenPhone.png'
import maple from '../images/maple2.png'

import { Link } from 'react-router-dom'

function _openPicker() {
  alert('Image Picker')
}

export default function SignupScreen() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const submitHandler = (e) => {
    e.preventDefault();
  }
  return (
    <section className="section">
      <form className="in-section">
        <Profile onClick={_openPicker} src={avatar} />
        <div className="align-row shortWidth">
          <CustomInput placeholder="First Name" type="text" iconType="user" half />
          <CustomInput placeholder="Last Name" type="text" iconType="user" half />
        </div>
        <div className="align-row shortWidth">
          <CustomInput placeholder="Date of Birth" type="text" iconType="user" half />
          <CustomInput placeholder="Delivery Zip" type="number" iconType="user" half />
        </div>
        <CustomInput placeholder="Email Address" type="email" iconType="email" />
        <CustomInput placeholder="Password" type="password" iconType="password" />
        <CustomInput placeholder="Retype password" type="password" iconType="password" />
        <CustomInput placeholder="Mobile number" type="number" iconType="user" />
        <div className="align-row pos-start">
          <input type="checkbox" id="agreeTerms" name="agreeTerms" />
          <label htmlFor="agreeTerms" id="agreeLabel"> By checking this I agree to CannaGo's <a href='/' style={{ color: '#61D273' }}> Terms & Conditions</a> </label>
        </div>
        <button className="btn-primary">Create Account</button>

      </form>

      <div className="greenArea2"><img src={greenPhone} alt="green" className="greenPhone" /></div>
      <div className="mapleArea"><img src={maple} alt="green" className="maple" /></div>
      <div className="mapleArea2"><img src={greenPhone} alt="green" className="greenPhone2" /></div>
    </section>
    // <div>
    //   <form className="form1" onSubmit={submitHandler}>
    //     <div>
    //       <label htmlFor="email">Email Address</label>
    //       <input
    //         type="email"
    //         id="email"
    //         placeholder="Enter email"
    //         required
    //         onChange={(e) => setEmail(e.target.value)}
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="password">Email Address</label>
    //       <input
    //         type="password"
    //         id="password"
    //         placeholder="Enter password"
    //         required
    //         onChange={(e) => setPassword(e.target.value)}
    //       />
    //     </div>
    //     <div>
    //       <label />
    //       <button className="primary" type="submit">Sign In</button>
    //     </div>
    //     <div>
    //       <label />
    //       <div>
    //         New customer? {' '} <Link to="/register">Create your account</Link>
    //       </div>
    //     </div>
    //   </form>
    // </div>
  )
}
