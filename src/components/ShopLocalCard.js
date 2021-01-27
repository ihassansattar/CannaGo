import React from 'react'

const ShopLocalCard = ({ img, name, hours }) => {
    return (
        <div className="shop-local-card">
            <h2>{name}</h2>
            <div className="shop-local-card-wrapper">
                <a href='/onlinestore'><img src={img} alt="" className="slideImg" /></a>
                <div className="shop-local-card-info">
                    <span>Store’s Pricing: $</span>
                    <span>Hours Today: {hours}</span>
                </div>
            </div>
        </div>
    )
}

export default ShopLocalCard
