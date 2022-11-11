import Cart from "./cart";
import logo from '../ressources/logo.png'

function Banner() {
   const title = "La maison jungle"
   return (
      <div>
         <div className= "banner">
            <img src={logo} alt= "La maison jungle" className= "lmj-logo" />
            <h1> {title} </h1>
         </div>
         <p>Ici achetez toutes les plantes dont vous avez toujours rêvé 🌵🌱🎍</p>
         <Cart />
      </div>
   )
 }

 export default Banner;