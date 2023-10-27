import monstera from '../ressources/assets/monstera.jpg'
import ficuslyrata from '../ressources/assets/ficuslyrata.avif'
import pothosargente from '../ressources/assets/potoargente.avif'
import yucca from '../ressources/assets/yucca.jpeg'
import olivier from '../ressources/assets/olivier.avif'
import geranium from '../ressources/assets/geranium.png'
import basilic from '../ressources/assets/basilic.jpg'
import aloe from '../ressources/assets/aloe.webp'
import succulent from '../ressources/assets/succulent.jpeg'

const plantList = [
	{
		name: 'monstera',
		category: 'Classique',
		id: '1ed',
		isBestSale: true,
		light: 2,
		water: 3,
		cover: monstera,
	},
	{
		name: 'ficus lyrata',
		category: 'Classique',
		id: '2ab',
		light: 3,
		water: 1,
		cover: ficuslyrata,
	},
	{
		name: 'pothos argenté',
		category: 'Classique',
		id: '3sd',
		light: 1,
		water: 2,
		cover: pothosargente,
	},
	{
		name: 'yucca',
		category: 'Classique',
		id: '4kk',
		light: 3,
		water: 1,
		cover: yucca,
	},
	{
		name: 'olivier',
		category: 'Extérieur',
		id: '5pl',
		light: 3,
		water: 1,
		cover: olivier,
	},
	{
		name: 'géranium',
		category: 'Extérieur',
		id: '6uo',
		light: 2,
		water: 2,
		cover: geranium,
	},
	{
		name: 'basilique',
		category: 'Extérieur',
		id: '7ie',
		isBestSale: true,
		light: 2,
		water: 3,
		cover: basilic,
	},
	{
		name: 'aloe',
		category: 'Plante grasse',
		id: '8fp',
		light: 2,
		water: 1,
		cover: aloe,
	},
	{
		name: 'succulente',
		category: 'Plante grasse',
		id: '9vn',
		light: 2,
		water: 1,
		cover: succulent,
	},
]

export default plantList
