import {useContext} from 'react'

import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcons'
import { CartContext } from '../../store/cart-context';

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext)

    const numberOfItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    return (
        <button className={classes.button} onClick={props.onClick} >
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Seu Carrinho</span>
            <span className={classes.badge}>{numberOfItems}</span>
        </button>
    )
}

export default HeaderCartButton;