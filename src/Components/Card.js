import { useEffect, useMemo, useState } from 'react'
import panier from '../ressources/assets/panier.png'

function Card() {
	const [card, setCard] = useState(0)

	const plantsAdd = useMemo(
		() => [
			{ name: 'Monstera', price: 8 },
			{ name: 'Lierre', price: 10 },
			{ name: 'Bouquet de Fleurs', price: 18 },
		],
		[]
	)

	const total = useMemo(() => {
		return plantsAdd.reduce((acc, plant) => acc + plant.price, 0)
	}, [plantsAdd])

	useEffect(() => {
		setCard(total)
	}, [total])

	return (
		<div className="card">
			<div className="card-header">
				<img src={panier} alt="panier" className="img-panier" />
				<h3>Récapitulatif de votre panier</h3>
			</div>
			<div className="list-card">
				{card !== 0 ? (
					<>
						<ul>
							<li>{plantsAdd[0].name}</li>
							<li>{plantsAdd[1].name}</li>
							<li>{plantsAdd[2].name}</li>
						</ul>
						<ul>
							<li>{plantsAdd[1].price}€</li>
							<li>{plantsAdd[2].price}€</li>
							<li>{plantsAdd[0].price}€</li>
						</ul>
					</>
				) : (
					<div className="empty-card">
						Ajoutez des plantes à votre panier :)
					</div>
				)}
			</div>
			<div className="total">
				<p>Total {card}€</p>
				{card !== 0 && (
					<p className="delete-card" onClick={() => setCard(0)}>
						Vider le panier
					</p>
				)}
			</div>
		</div>
	)
}

export default Card
