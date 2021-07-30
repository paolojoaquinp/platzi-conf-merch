import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';

import '../styles/components/Checkout.css';
import handleSumTotal from '../utils/Amount.js';

const Checkout = () => {
    const { state, removeFromCart } = useContext(AppContext);
    const { cart } = state;

    const handleRemove = (product,index) => () => {
        removeFromCart(product,index);
    }

    // const handleSumTotal = () => {
    //     const reducer = (cont, currentValue) => {
    //         return cont + currentValue.price;
    //     }
    //     const sum = cart.reduce(reducer, 0);
    //     return sum;
    // }

    return (
        <div className="Checkout">
            <div className="Checkout__content">
                <h3>Lista de Pedidos:</h3>
                <h3>{cart.length > 0 ? "Lista de Pedidos: " : "Sin Pedidos...."}</h3>
                {cart.map((item,index) => (
                    <div className="Checkout__item" key={index}>
                        <div className="Checkout__element">
                            <h4>{item.title}</h4>
                            <span>$ {item.price}</span>
                        </div>
                        <button type="button" onClick={handleRemove(item,index)}>
                            <i className="fas fa-trash-alt" title="Eliminar"></i>
                        </button>
                    </div>
                ))}
            </div>
            {cart.length > 0 && (
                <div className="Checkout__sidebar">
                    <h3>{`Precio Total: $${handleSumTotal(cart)}`}</h3>
                    <Link to="/checkout/information">
                        <button type="button">Continuar Pedido</button>
                    </Link>
                </div>
            )}
        </div>
    )
}

export default Checkout
