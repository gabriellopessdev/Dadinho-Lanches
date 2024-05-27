import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import {CartContext} from '../../store/cart-context'
import { useContext,useState } from 'react';
import CartItem from './CartItem';
import  Checkout from './Checkout';

export default function Cart (props) {
    const [isCheckout, setIsCheckout] = useState();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [didSubmit, setDidSubtmit] = useState(false);

    const cartCtx = useContext(CartContext)

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id)
    }

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({...item, amount: 1})
    }
    const orderHandler = () => {
        setIsCheckout(true)
    }

    const submitOrderHandler = async(userData) => {
       await fetch('https://projeto-novo-1552130917101-default-rtdb.firebaseio.com/orders.json', {
        method: 'POST',
        body: JSON.stringify({
            user:userData,
            orderItems: cartCtx.items
        })
       })
       setIsSubmitting(false)
       setDidSubtmit(true)
       cartCtx.clearCart()
    }

    const cartItems = (
        <ul className={classes['cart-items']}>
            {cartCtx.items.map((item) => (
                <CartItem 
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                 />
            ))}
        </ul>
    )

    const modalActions =  ( <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Fechar</button>
        {hasItems && <button className={classes.button} onClick={orderHandler}>
            Pedir
        </button>}
    </div> )

    const cartModalContent = (<>
        {cartItems}
        <div className={classes.total}>
            <span>Valor Total</span>
            <span>{totalAmount}</span>
        </div>
        {isCheckout && <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />}
        {!isCheckout && modalActions}
        </>);
    
    const isSubmittingModalContent = <p>Fazendo Pedido</p>;

    const  didSubmitContentModal = (
        <>
            <p>Ordem Feita com Sucesso!</p>
            <div className={classes.actions}>
            <button className={classes.button} onClick={props.onClose}>
                Fechar
            </button>
            </div>
         </>
    )
    
    return (
        <Modal onClose={props.onClose}>
            {!isSubmitting && !didSubmit && cartModalContent}
            {isSubmitting && isSubmittingModalContent}
            {!isSubmitting && didSubmit && didSubmitContentModal}
        </Modal>
    )
}