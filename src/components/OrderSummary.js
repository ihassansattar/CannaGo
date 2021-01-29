import React from 'react'
const OrderSummary = () => {
    return (
        <div className="order-summary-cont">
            <div className="order-summary-head">
                <p>Order Summary</p>
            </div>
            <div className="order-summary-body">
                <div className="order-summary-order">
                    <p>Just CBD Wax x 2</p>
                    <p>$25.10</p>
                </div>
                <div className="order-summary-order">
                    <p>Just CBD Wax 10ml</p>
                    <p>$15.00</p>
                </div>
                <div className="order-summary-order">
                    <p>Service Fee</p>
                    <p>$5.00</p>
                </div>
                <div className="order-summary-order">
                    <p>State Tax</p>
                    <p>$4.83</p>
                </div>
            </div>
            <div className="order-summary-total">
                <div className="order-summary-order">
                    <p>Total Amount</p>
                    <p className="total-amount">$49.93</p>
                </div>
            </div>
        </div>
    )
}
export default OrderSummary;
