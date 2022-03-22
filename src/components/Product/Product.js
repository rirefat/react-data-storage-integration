import React from 'react';
import { addToCart, loadMore, removeFromCart } from '../Utilities/functions';
import './Product.css'

const Product = (props) => {
    const {id,title, image,description, category, rating,price} = props.product;
    const finalDescription = description.slice(0, 60);
    const showedTitle = title.slice(0,20);
   
    return (
        <div className='single-product'>
            <img src={image} alt="" />
            <h2>{showedTitle}... <span className='load-more-btn' onClick={()=>loadMore(title)}>FULL TITLE</span></h2>
            <p><strong>Description: </strong>{finalDescription}.... <strong onClick={()=>loadMore(description)} className="load-more-btn">Know More</strong></p>
            <p><strong>Category: </strong>{category}</p>
            <p><strong>Rating: </strong>{rating.rate}</p>
            <h3>Price: ${price}</h3>
            <div className="btn-area">
                <button onClick={()=>addToCart(id)}>Add To Cart</button>
                <button onClick={()=>removeFromCart(id)}>Remove From Cart</button>
            </div>
        </div>
    );
};

export default Product;