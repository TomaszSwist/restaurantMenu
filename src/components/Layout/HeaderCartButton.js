import { useContext } from 'react'

import CartIcon from '../UI/CartIcon'
import CartContext from '../../store/cart-context'

import classes from './HeaderCartButton.module.css'

const HeaderCartButton = props => {
	const cartCtx = useContext(CartContext)

    const numberOfCartItems = cartCtx.items.reduce((accu, item) => {
        return (accu + item.amount)
    }, 0)

	return (
		<button className={classes.button} onClick={props.onShowCart}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={classes.badge}>{numberOfCartItems}</span>
		</button>
	)
}

export default HeaderCartButton
