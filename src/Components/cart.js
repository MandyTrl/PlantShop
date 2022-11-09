function Cart() {

   const plantsAdd = [
      { name: "Monstera", price: "8" }, 
      { name: "Lierre", price: "10" }, 
      { name: "Bouquet de Fleurs", price: "18" }
   ]

   let total
   
   for(let i in plantsAdd){
      total =+ plantsAdd[i].price
   }

   return (
      <div>
         <ul>
            <li> {plantsAdd[0].name} , {plantsAdd[0].price} </li>
            <li> {plantsAdd[1].name} , {plantsAdd[1].price} </li>
            <li> {plantsAdd[2].name} , {plantsAdd[2].price} </li>
         </ul>
         <div>
            Total : {total}€
         </div>
      </div>
   )
 }

 export default Cart;