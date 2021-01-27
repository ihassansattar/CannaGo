import React from 'react'
import { useHistory } from "react-router-dom";

import {FaAngleRight} from 'react-icons/fa'

const ProductCard = ({price, img, name}) => {
    let history = useHistory();
    const selectedItem = () => {
        history.push("/selecteditem");    
    }
    return (
        <div className="product-card">
            <div className="product-card-img">
                <img src={img} alt="" className="productImg"/>
                <span className="product-price">$ {price}</span>
            </div>
            <div className="product-card-info">
                <h3>{name}</h3>
                <a onClick={selectedItem} className="product-btn">
                    <FaAngleRight/>
                </a>
            </div>
        </div>
    )
}

export default ProductCard
