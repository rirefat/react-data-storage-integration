import React from 'react';
import { addToCart, loadMore, removeFromCart } from '../Utilities/functions';
import './Product.css'

const Product = (props) => {
    const {id,title, image,description, category, rating,price} = props.product;
    const finalDescription = description.slice(0, 60);
   
    return (
        <div className='single-product'>
            <img src={image} alt="" />
            <h2>{title}</h2>
            {/* <h2>{()=>loadMore(title)}</h2> */}
            <p><strong>Description: </strong>{finalDescription}.... <strong onClick={()=>loadMore(description)} className="load-more-btn">Know More</strong></p>
            <p><strong>Category: </strong>{category}</p>
            <p><strong>Rating: </strong>{rating.rate}</p>
            <h3>Price: ${price}</h3>
            <button onClick={()=>addToCart(id)}>Add To Cart</button>
            <button onClick={()=>removeFromCart(id)}>Remove From Cart</button>
        </div>
    );
};

export default Product;