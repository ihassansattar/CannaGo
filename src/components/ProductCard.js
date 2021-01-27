import React from 'react'

import { FaAngleRight } from 'react-icons/fa'

const ProductCard = ({ price, img, name }) => {
    return (
        <div className="product-card">
            <div className="product-card-img">
                <img src={img} alt="" className="productImg" />
                <span className="product-price">$ {price}</span>
            </div>
            <div className="product-card-info">
                <h3>{name}</h3>
                <a href="/" className="product-btn">
                    <FaAngleRight />
                </a>
            </div>
        </div>
    )
}

export default ProductCard
