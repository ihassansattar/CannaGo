import React from 'react'
import CartItemCard from './CartItemCard'
import Image1 from '../images/cart-image1.png'
import Image2 from '../images/cart-image2.png'
import OrderSummary from './OrderSummary'
import {useHistory} from "react-router-dom";
const CartItems = () => {
    let history = useHistory();
    const checkout = () => {
        history.push("/checkout");
    }
    return (
        <div className="cart-items">
            <div className="cart-cont">
                <div className="cart-cards-cont">
                    <CartItemCard img={Image1} title="Just CBD Wax" price="$12.55"/>
                    <CartItemCard img={Image2} title="Just CBD Wax 10ml" price="$15.00"/>
                </div>
                <div className="cart-btn-cont">
                    <button className="cart-btn-continue">Continue Shopping</button>
                    <button onClick={checkout} className="cart-btn-next">NEXT</button>
                </div>
            </div>
            <OrderSummary/>
        </div>
    )
}
export default CartItems