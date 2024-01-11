import React from 'react'

export default function CartItem(props) {

    const {id, productName, price, productImage} = props.data;

  return (
    <div className='cartItem'>
        <img src={productImage} />
        <div className='description'>
            <p>{productName}</p>
            <p>{price}</p>
        </div>
    </div>
  )
}
