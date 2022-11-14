import { plantList } from '../datas/plantList';
import CareScale from './careScale';

function ShoppingList() {
	const categories = plantList.reduce( //applique la méthode reduce au tableau "plantList"
		( acc, plant ) => //qui applique une fonction "acc" qui sert d'accumulateur et qui traite chaque valeur 
		//du tableau "plantList" nommée "plant"
			acc.includes( plant.category ) ? acc : acc.concat( plant.category ), //est-ce que la catégorie de la
		//plante ("pant.category") est dans le tableau "acc.includes" ?
		//si "true" : le tab "acc" est retourné tel quel
		//si "false" : "acc.concat( plant.category )" la catégorie de la plante est ajoutée à l'accumulateur
		//grace à la méthode .concat() afin d'éviter les doublons
			[]
	)

	return (
		<div>
			<ul>
				{categories.map( ( cat ) => (
					<li key={ cat }>{ cat }</li>
				))}
			</ul>
			<ul className= "lmj-plant-list">
				{plantList.map( ( plant ) => (
					<li key={ plant.id } className= "lmj-plant-item">
						{ plant.name }
						{ plant.isSpecialOffer && <div className= "lmj-sales">Soldes</div> }
					</li>
				))}
			</ul>
			<CareScale scaleValue= {plant.light} />
		</div>
	)
}

export default ShoppingList
