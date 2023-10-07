import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'

const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);

    const handelRemoveFormCart = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }
    const handelClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className='review-container'>
                <h1>Orders page: {cart.length}</h1>
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handelRemoveFormCart={handelRemoveFormCart}
                    >
                    </ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    handelClearCart={handelClearCart}
                >
                    <Link to="/checkout">
                        <button className='btn-review-order'>Proceed Checkout <FontAwesomeIcon icon={faCreditCard} /></button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;