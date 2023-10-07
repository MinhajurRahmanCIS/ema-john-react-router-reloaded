import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
  const { img, name, seller, price, ratings } = props.product;

  const handelAddCart = props.handelAddCart;

  return (
    <div className='product'>
      <img src={img} alt="" />
      <div className='product-info'>
        <h2>{name}</h2>
        <p><b>Price:</b> {price}</p>
        <p><b>Manufacturer:</b> {seller}</p>
        <p><b>Ratings:</b> {ratings}</p>
      </div>
      <button onClick={() => handelAddCart(props.product)} className='btn-cart'>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
    </div>
  );
};

export default Product;