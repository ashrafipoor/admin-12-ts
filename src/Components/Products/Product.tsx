import { CartItem } from "../../Slices/CartSlice";
import type { RootState } from '../../app/store'

import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from './../../Slices/CartSlice';
import { useEffect, useState } from "react";

const Product: React.FC<CartItem> = ({ productId, productName, productPrice }) => {
    const carts = useSelector((state: RootState) => state.cart.value)
    const dispatch = useDispatch()
    const [storeIndex, setStoreIndex] = useState(-1);
    useEffect(() => {
        const index = carts.findIndex(function (item: CartItem) {
            return item.productId === productId;
        });
        setStoreIndex(index);
    })
    const add = () => {
        const data: CartItem = { productId, productName, productPrice };
        const index = carts.findIndex(function (item: CartItem) {
            return item.productId === productId;
        });
        if (index < 0) dispatch(addToCart(data));

    }

    return (
        <div className="w-40 flex flex-col items-center  shadow-md border-2 border-sky-300 rounded-md m-10 p-4">
            <h1>{productName}</h1>
            <h4>{productId}</h4>
            <h5>{productPrice}</h5>
            {(storeIndex < 0) ?
                <button className="btn" onClick={add}>Add</button>
                :
                <button className="btn btn-error" onClick={() => dispatch(removeFromCart(productId))}>remove</button>
            }
        </div>
    )
}
export default Product;