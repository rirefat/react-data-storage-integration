import React from 'react';
import './Product.css'

const loadMore =(description)=>{
    alert(description);
}
const Product = (props) => {
    const {title, image,description, category, rating,price} = props.product;
    const finalDescription = description.slice(0, 60);
   
    return (
        <div className='single-product'>
            <img src={image} alt="" />
            <h2>{title}</h2>
            <p><strong>Description: </strong>{finalDescription}.... <strong onClick={()=>loadMore(description)} className="load-more-btn">Know More</strong></p>
            <p><strong>Category: </strong>{category}</p>
            <p><strong>Rating: </strong>{rating.rate}</p>
            <h3>Price: {price}</h3>
            <button>Add To Cart</button>
        </div>
    );
};

export default Product;