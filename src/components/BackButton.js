import React from 'react'
import {BsArrowLeft} from 'react-icons/bs'
import {useHistory} from "react-router-dom";
export default function BackButton() {
    let history = useHistory();
    const goBack = () => {
        history.goBack();
    }
    return (
        <div>
            <a onChange={goBack} className="backbutton"><BsArrowLeft size={40} color="white"/></a>
        </div>
    )
}
