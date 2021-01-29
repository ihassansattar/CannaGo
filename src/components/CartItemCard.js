import React from 'react'
import Delete from '../images/delete-icon.png'
import QuantityCounter from './QuantityCounter'
import {useHistory} from "react-router-dom";
const CartItemCard = (props) => {
    let history = useHistory();
    const emptyCard = () => {
        history.push("/emptycart");

    }
    return (
        <div className="cart-card">
            <div className="cart-card-image">
                <img src={props.img} width="170" height="200"/>
            </div>
            <div className="cart-card-text">
                <p className="cart-card-title">{props.title}</p>
                <div className="cart-card-quantity">
                    <p className="cart-card-price">{props.price}</p>
                    <p className="cart-card-qu">Quantity</p>
                    <QuantityCounter/>
                </div>
                <div className="cart-card-remove">
                    <button onClick={emptyCard}>
                        <img src={Delete} className="delete-img"/>
                        <p>Remove</p>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default CartItemCard;