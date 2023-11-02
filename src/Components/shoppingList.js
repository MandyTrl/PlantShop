import CareScale from './CareScale'
import plantList from './../datas/plantList'
import panier from '../ressources/assets/panier.png'

function ShoppingList({ shoppingCart, updateCart }) {
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category), //est-ce que la catégorie de la
		//plante ("plant.category") est dans le tableau "acc.includes" ?
		//si "true" : le tab "acc" est retourné tel quel
		//si "false" : "acc.concat( plant.category )" la catégorie de la plante est ajoutée à l'accumulateur
		//la méthode .concat() évite les doublons
		[]
	)

	return (
		<div>
			<ul className="categories">
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className="lmj-plant-list">
				{plantList.map((plant) => (
					<li key={plant.id} className="plant-item">
						<img src={plant.cover} alt={plant.cover} className="plant-img" />
						<p className="price">{plant.price}€</p>
						<p className="plant-name">{plant.name}</p>
						{plant.isSpecialOffer && <div className="sales">Soldes</div>}
						<div className="plant-container">
							<div
								className="btn-panier"
								onClick={() => updateCart([...shoppingCart, plant])}>
								<img src={panier} alt="panier" className="img-panier" />
							</div>
							<div>
								<CareScale careType="water" scaleValue={plant.light} />
								<CareScale careType="light" scaleValue={plant.light} />
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList
