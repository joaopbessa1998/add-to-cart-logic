import React from "react"


export const Product = (props) => {

    const {id, productName, price, productImage } = props.data 

    return (
        <div className='product'>
            <img src={productImage} />
            <div className='description'>
                <h2>{productName}</h2>
                <p>{price}</p>
            </div>
            <button className="addToCartBttn">Add to cart</button>
        </div>
    )
}