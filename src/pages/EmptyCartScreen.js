import React from 'react'
import Navbar from '../components/Navbar'
import Plus from '../images/plus-sign.svg'
const EmptyCartScreen = () => {
    return (
        <div>
            <Navbar/>
            <img src={Plus}/>
        </div>
    )
}
export default EmptyCartScreen;