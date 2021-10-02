import React from 'react';
import useCart from '../../Hooks/useCart';
import useProduct from '../../Hooks/useProduct';
import { deleteFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [products] = useProduct();
    const [cart,setCart] = useCart(products);

    const handleRemoved = key =>{
        const newCart = cart.filter(product => product.key !== key)
        setCart(newCart)
        deleteFromDb(key)
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    cart.map(product => <ReviewItem 
                        key={product.key}
                        product={product}
                        handleRemoved={handleRemoved}
                        ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>


        </div>
    );
};

export default OrderReview;