import React from 'react'
import {useHistory} from "react-router-dom";
const CheckoutForm = () => {
    let history = useHistory();
    const submitHandler = e => {
        e.preventDefault();
        history.push("/orderexperience");
    }
    return (
        <div className="checkout-form-cont">
            <form className="checkout-form" onSubmit={submitHandler}>
                <div className="checkout-form-title">
                    <p>Order Summary</p>
                </div>
                <div className="checkout-form-detailed">
                    <div className="checkout-form-details">
                        <p>Just CBD Wax x 2</p>
                        <p>$25.10</p>
                    </div>
                    <div className="checkout-form-details">
                        <p>Just CBD Wax 10ml</p>
                        <p>$15.00</p>
                    </div>
                    <div className="checkout-form-details">
                        <p>Service Fee</p>
                        <p>$5.00</p>
                    </div>
                    <div className="checkout-form-details">
                        <p>State Tax</p>
                        <p>$4.83</p>
                    </div>
                </div>
                <div className="checkout-form-details">
                    <p>Total Amount</p>
                    <p className="total-amount">$49.93</p>
                </div>
                <p className="checkout-form-text">Promo Code</p>
                <div className="checkout-form-pr">
                    <div className="checkout-form-promo">
                        <input placeholder="Type here"/>
                        <button>Apply</button>
                    </div>
                </div>
                <p className="checkout-form-text margin-top-2">Card Number</p>
                <div className="checkout-form-pr">
                    <div className="checkout-form-promo">
                        <input placeholder="XXXX XXXX XXXX 1278"/>
                    </div>
                </div>
                <div className="checkout-form-cardd">
                    <div className="checkout-form-card">
                        <p >Expiration Date</p>
                        <input placeholder="06/22"/>
                    </div>
                    <div className="checkout-form-card">
                        <p>CVC</p>
                        <input placeholder="071"/>
                    </div>
                </div>
                <p className="checkout-form-text margin-top-2">Drop Off Address</p>
                <div className="checkout-form-pr">
                    <div className="checkout-form-promo">
                        <input placeholder="Street Address"/>
                    </div>
                </div>
                <div className="checkout-form-address">
                    <input placeholder="City"/>
                    <input placeholder="GA"/>
                    <input placeholder="Zip Code"/>
                </div>
                <p className="checkout-form-text margin-top-2">Special Request</p>
                <div className="checkout-form-specialr">
                    <div className="checkout-form-special-request">
                        <input placeholder="The gate code is #1234"/>
                    </div>
                </div>
                <button className="checkout-form-submit" type="submit">Check Out</button>
            </form>
        </div>
    )
}
export default CheckoutForm;