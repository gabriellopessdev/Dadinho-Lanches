import classes from './Checkout.module.css';
import { useRef, useState } from 'react';

const isEmpty = value => value.trim() === '';
const isFiveChars = value => value.trim().length === 8;
 
const Checkout = (props) => {
    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
        street: true,
        city: true,
        postalCode: true
    });

    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const cityInputRef = useRef();
    const postalCodeInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredSteetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);

    setFormInputsValidity({
        name: enteredNameIsValid,
        street: enteredSteetIsValid,
        city: enteredCityIsValid,
        postalCode: enteredPostalCodeIsValid
    })

    const formIsValid = 
        enteredNameIsValid &&
        enteredSteetIsValid &&
        enteredCityIsValid && 
        enteredPostalCodeIsValid;

    if (!formIsValid) {
        return;
    }

    props.onConfirm({
        name:enteredName,
        street:enteredStreet,
        city:enteredCity,
        postalCode:enteredPostalCode
    });
  };

  const nameControlClasses = `${classes.control} 
    ${formInputsValidity.name ? '' : classes.invalid}`;
    const streetControlClasses = `${classes.control} 
    ${formInputsValidity.street ? '' : classes.invalid}`;
    const cityControlClasses = `${classes.control} 
    ${formInputsValidity.city ? '' : classes.invalid}`;
    const postalCodeControlClasses = `${classes.control} 
    ${formInputsValidity.postalCode ? '' : classes.invalid}`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor='name'>Seu Nome</label>
        <input type='text' id='name' ref={nameInputRef} />
        {!formInputsValidity.name && <p>Por favor informe um nome valido </p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor='street'>Endereço</label>
        <input type='text' id='street' ref={streetInputRef} />
        {!formInputsValidity.street && <p>Por favor informe um email valido</p>}
      </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor='postal'>CEP</label>
        <input type='text' id='postal' ref={postalCodeInputRef} />
        {!formInputsValidity.postalCode && <p>Por Favor informe um CEP valido</p>}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor='city'>Cidade</label>
        <input type='text' id='city' ref={cityInputRef} />
        {!formInputsValidity.city && <p>Por favor informe uma cidade valida</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancelar
        </button>
        <button className={classes.submit}>Confirmar</button>
      </div>
    </form>
  );
};

export default Checkout;