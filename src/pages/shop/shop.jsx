import React from "react"
import {PRODUCTS} from "../../products";
import { Product } from "./product";
import './shop.css'


export const Shop = () => {
    return (
        <div style={{ paddingTop: '160px', paddingLeft: '50px', paddingRight: '50px', marginBottom: '100px'}}>
            <div className='shop'>
                <div className='shopTitle'>
                    <h1>Shop</h1>
                </div>
                <div className='products'>
                    {PRODUCTS.map((product) => <Product data={product} />)}
                </div>
            </div>
        </div>
    )
}