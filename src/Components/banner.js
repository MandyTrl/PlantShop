import Cart from "./cart";

function Banner() {
   const title = "La maison jungle"
   return (
      <div>
         <h1> {title} </h1>
         <p>Ici achetez toutes les plantes dont vous avez toujours rêvé 🌵🌱🎍</p>
         <Cart />
      </div>
   )
 }

 export default Banner;