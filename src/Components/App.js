import { useState } from 'react'
import '../ressources/App.css'
import Banner from './Banner'
import Cart from './Cart'
import Footer from './Footer'
import ShoppingList from './ShoppingList'

function App() {
	const [shoppingCart, setShoppingCart] = useState([])
	return (
		<div className="App">
			<Banner />
			<div className="main">
				<Cart shoppingCart={shoppingCart} />
				<ShoppingList
					shoppingCart={shoppingCart}
					updateCart={setShoppingCart}
				/>
			</div>
			<Footer />
		</div>
	)
}

export default App
