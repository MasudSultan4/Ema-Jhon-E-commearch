import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Rating from 'react-rating';
import './Product.css';

const Product = (props) => {
    const {img,name,price,stock,seller,star} =  props.product
    const element = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className="product">
            <div>
                 <img src={img} alt="" />
            </div>
            
            <div>
                <h4 className="product-name">{name}</h4>
                <p><small>by: {seller}</small></p>
                <p>Price:  {price}</p>
                <p>only {stock} left in stock - order soon</p>
            
                <Rating
                initialRating={star}
                 emptySymbol="far fa-star icon-color"
                 fullSymbol="fas fa-star icon-color"
                 readonly
                 ></Rating>
                <br />
                <button onClick={() => props.handalToCart(props.product)} className="btn-regular">{element} add to cart</button>
            </div>
        </div>
    );
};

export default Product;