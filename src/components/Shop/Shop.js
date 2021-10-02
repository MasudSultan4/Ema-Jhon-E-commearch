import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from './../Product/Product';
import "./Shop.css";

const Shop = () => {
    const [products,setProduct] = useState([]);
    const [cart,setCart] = useState([]);
    const [displayProduct,setDisplayProduct] = useState([]);


    const handalToCart = product =>{
         const newCart = [...cart,product]
         setCart(newCart)
         addToDb(product.key);
    }


    useEffect(() => {
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => {

            setProduct(data)
            setDisplayProduct(data)
        })
    },[])

    useEffect(() => {
       if(products.length){
        const saveCart = getStoredCart();
        const storedCart = [];
        for(const key in saveCart){
            const addProduct  = products.find(product =>product.key === key);
            if(addProduct){
                const quantity = saveCart[key];
                addProduct.quantity = quantity;
                storedCart.push(addProduct)

            }
        }
        setCart(storedCart);
       }
    },[products])

    const handalSeach = event =>{
        const searchText = event.target.value;
        const macthedProduct = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
        setDisplayProduct(macthedProduct)
    }

    return (
       <div>
           <div className="search-container">
               <input type="text" onChange={handalSeach} placeholder="Search-Porduct"/>
            </div>
            <div className="shop-container">
            <div className="product-container">
                {
                    displayProduct.map(product => <Product 
                        product={product}
                        key={product.key}
                        handalToCart ={handalToCart}
                        ></Product>)
                }
                
            </div>
            <div className="cart-container">
                
               
                <Cart cart={cart}>
                    <Link to="/review">
                        <button className="btn-regular">Review your Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
       </div>
    );
};

export default Shop;