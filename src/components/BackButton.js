import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'

export default function BackButton() {
  return (
    <div>
      <a href="/" className="backbutton"><BsArrowLeft size={40} color="white" /></a>
    </div>
  )
}
