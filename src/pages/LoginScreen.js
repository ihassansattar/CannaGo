import React from 'react'
import BackButton from '../components/BackButton'
import LogoWithUserType from '../components/LogoWithUserType'
import CustomInput from '../components/CustomInput'
import WhiteButton from '../components/WhiteButton'
import clip from '../images/clip.png'
import greenPhone from '../images/greenPhone.png'
import maple from '../images/maple.png'


export default function LoginScreen() {
  return (
    <section className="section">
      <BackButton />
      <LogoWithUserType userType="for consumers" />
      {/* <form className="form"> */}
      <CustomInput placeholder="Email Address" type="email" iconType="email" />
      <CustomInput placeholder="Password" type="password" iconType="password" />
      <p className="s29 ml200">Forgot Password?</p>
      <button className="btn-primary mt50" type="submit">Signin</button>
      {/* </form> */}
      <p className="greyText s31 mt90">Don't have an account?</p>
      <a href='/signup' className="main s32 mb90">Sign up</a>
      <WhiteButton title="Want to drive with us?" />
      <WhiteButton title="Want to sell with us?" />
      <div className="clipArea"><img src={clip} alt="clip" className="clip" /></div>
      <div className="greenArea"><img src={greenPhone} alt="green" className="greenPhone" /></div>
      <div className="mapleArea"><img src={maple} alt="green" className="maple" /></div>
    </section>
  )
}
