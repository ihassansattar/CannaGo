import React from 'react'
import {BsArrowLeft} from 'react-icons/bs'

export default function GoBackButton() {
    return (
        <div>
            <a href="/" className="gobackbutton"><BsArrowLeft size={40} color="white"/></a>
        </div>
    )
}
