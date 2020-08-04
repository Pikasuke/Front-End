import React from 'react';
import "./CheckoutProduct.css";
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBascket = (item) => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id,
        });
    }

    return (
        <div className="chekoutProduct">
            <img className="checkoutProduct__image" src={image} alt="image produit" />
            <div className="chekoutProduct__info">
                <p className="chekoutProduct__title"> {title} </p>
                <p className="chekoutProduct__price">
                    <small>€</small>
                    <strong>{price}</strong>
                </p>
                <div className="chekoutProduct__rating">
                    {
                        Array(rating).fill().map((_) =>
                            (<p>*</p>))
                    }
                </div>
                <button onClick={removeFromBascket}> Remove from basket </button>
            </div>
        </div>
    )
}

export default CheckoutProduct
