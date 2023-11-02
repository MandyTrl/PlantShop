import { useEffect, useState } from 'react'
import panier from '../ressources/assets/panier.png'

function Cart({ shoppingCart, updateCart }) {
	const [total, setTotal] = useState(0)

	useEffect(() => {
		setTotal(shoppingCart.reduce((acc, plant) => acc + plant.price, 0))
	}, [shoppingCart])

	return (
		<div className="cart">
			<div className="cart-header">
				<img src={panier} alt="panier" className="img-panier" />
				<h3>Récapitulatif de votre panier</h3>
			</div>
			<div className="list-cart">
				{total !== 0 ? (
					<>
						<ul>
							{shoppingCart.map((plant) => (
								<li key={plant.id}>{plant.name}</li>
							))}
						</ul>
						<ul>
							{shoppingCart.map((plant) => (
								<li key={plant.id}>{plant.price}€</li>
							))}
						</ul>
					</>
				) : (
					<div className="empty-cart">
						Ajoutez des plantes à votre panier :)
					</div>
				)}
			</div>
			<div className="total">
				<p>Total {total}€</p>
				{total !== 0 && (
					<p className="delete-cart" onClick={() => updateCart([])}>
						Vider le panier
					</p>
				)}
			</div>
		</div>
	)
}

export default Cart
