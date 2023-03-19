import { Fragment, useState } from 'react'
import Cart from './components/Cart/Cart'

import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'

function App() {
	const [cartClicked, setCartClicked] = useState(false)

	const showCartHandler = () => {
		setCartClicked(true)
	}
	const hideCartHandler = () => {
		setCartClicked(false)
	}

	return (
		<Fragment>
			<Cart />
			<Header />
			<main>
				<Meals />
			</main>
		</Fragment>
	)
}

export default App
