import React, { useRef, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Information.css';

const Information = () => {
    const { state, addToBuyer } = useContext(AppContext);
    const { cart } = state;
    const form = useRef(null);
    const history = useHistory();

    const handleSubmit = () => {
        const formData = new FormData(form.current);
        const buyer = {
            'name': formData.get('name'),
            'email': formData.get('email'),
            'address': formData.get('address'),
            'apto': formData.get('apto'),
            'city': formData.get('city'),
            'country': formData.get('country'),
            'state': formData.get('state'),
            'cp': formData.get('cp'),
            'phone': formData.get('phone'),
        }
        addToBuyer(buyer);
        history.push('/checkout/payment');
    }

    return (
        <div className="Information">
            <div className="Information__content">
                <div className="Information__head">
                    <h2>Informacion de Contacto</h2>
                </div>
                <div className="Information__form">
                    <form ref={form}>
                        <input type="text" placeholder="Nombre Completo" name="name" />
                        <input type="text" placeholder="Correo Electrónico" name="email" />
                        <input type="text" placeholder="Dirección" name="address" />
                        <input type="text" placeholder="Apto" name="apto" />
                        <input type="text" placeholder="Ciudad" name="city" />
                        <input type="text" placeholder="País" name="country" />
                        <input type="text" placeholder="Estado" name="state" />
                        <input type="text" placeholder="Ciudad" name="city" />
                        <input type="text" placeholder="Código Postal" name="cp" />
                        <input type="text" placeholder="Teléfono" name="phone" />
                    </form>
                </div>
                <div className="Information__buttons">
                    <div className="Information__back">
                        <Link to="/checkout">
                            Regresar
                        </Link>
                    </div>
                    <div className="Information__next">
                        <button type="button" onClick={handleSubmit}>Pagar</button>
                    </div>
                </div>
            </div>
            <div className="Information__sidebar">
                <h3>Pedido:</h3>
                {cart.map((item,index) => (
                    <div className="Information__item" key={index}>
                        <div className="Information__element">
                            <h4>{item.title}</h4>
                            <span>$ {item.price} </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Information;