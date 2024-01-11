import {PRODUCTS} from '../../products';
import {ShopContext} from '../../context/shop-context';
import { useContext } from 'react';
import CartItem from './cart-item';

export const Cart = () => {

    const { cartItems} = useContext(ShopContext);

    return (
        <div style={{ paddingTop: '160px'}}>
            <div className="cart">
                <div>
                    <h1>Your cart items</h1>
                </div>
                <div className="cartItems">
                    {PRODUCTS.map((product) => {
                        if (cartItems[product.id] !== 0) {
                            return <CartItem data={product} />
                        }
                    })}
                </div>
            </div>
        </div>
    )
}