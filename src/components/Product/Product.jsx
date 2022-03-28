import React from 'react'
import "./Product.css"
 function Product(props) {
     const {image,title,category}=props;
  return (
    <div className='product'>
       <img src={image} alt={title} />
       <p>{title}</p>
    </div>
  )
}
export default Product;