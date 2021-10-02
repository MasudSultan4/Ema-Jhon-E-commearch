import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }

    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;
    return (
        <div>
            <h2>Order-Summary</h2>
            <h3>Items Ordered: {totalQuantity}</h3>
            <div className="oder-cost">

                    <p>Items: ${total}</p>
                    <p>Shipping & Handling:	$15</p>
                    <p>Total before tax: ${tax.toFixed(2)}</p>
                    <h3>Order Total: ${grandTotal.toFixed(2)}</h3>
                    {props.children}
                </div>
                
        </div>
    );
};

export default Cart;