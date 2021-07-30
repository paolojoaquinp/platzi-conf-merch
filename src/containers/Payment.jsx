import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { PayPalButton } from 'react-paypal-button-v2';
import AppContext from '../context/AppContext';
import { handleSumTotal } from '../utils/Amount.js';
import config from '../config';
import '../styles/components/Payment.css';

const Payment = () => {
    const { state, addNewOrder } = useContext(AppContext);
    const { cart, buyer } = state;
    const history = useHistory();
    const paypalOptions = {
        clientId: config.clientIDPayPal,
        intent: 'capture',
        currency: 'USD'
    };

    const buttonStyles = {
        layout: 'vetical',
        shape: 'rect'
    }

    const handlePaymentSuccess = (data) => {
        // console.log(data);
        if (data.status === 'COMPLETED') {
            const newOrder = {
                buyer: buyer,
                product: cart,
                payment: data,
            }
            addNewOrder(newOrder);
            history.push('/checkout/success');
        }
    }

    return (
        <div className="Payment">
            <div className="Payment__content">
                <h3>Resumen del pedido:</h3>
                {cart.map((item,index) => (
                    <div className="Payment__item" key={index}>
                        <div className="Payment__element">
                            <span>${` `}{item.price}</span>
                            <h4>{item.title}</h4>
                        </div>
                    </div>
                ))  }
                <div className="Payment__pedido">
                    <PayPalButton 
                        paypalOptions={paypalOptions}
                        buttonStyles={buttonStyles}
                        amount={handleSumTotal(cart)}
                        onStart={() => console.log('Start Payment')}
                        onSuccess={data => handlePaymentSuccess(data)}
                        onError={error => console.log(error)}
                        onCancel={data => console.log(data)}
                    />
                </div>
            </div>
        </div>
    )
}

export default Payment;
