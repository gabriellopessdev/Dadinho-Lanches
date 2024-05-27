import {Fragment} from 'react'
import classes from './header.module.css'

import img from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
return (
    <Fragment>
        <header className={classes.header}>
            <h1>Dadinho Lanches</h1>
            <HeaderCartButton onClick={props.onShownCart} />
        </header>
        <div className={classes['main-image']}>
            <img src={img} alt="imagem header" />
        </div>
    </Fragment>
);
};

export default Header