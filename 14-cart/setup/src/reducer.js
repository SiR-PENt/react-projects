const reducer = (state,action) => {
    if(action.type=== 'CLEAR_CART'){
        return {...state, cart: []};//overwriting the cart
    }
    if(action.type === 'REMOVE'){
        const newCart = state.cart.filter(item => item.id !== action.payload)
        return {...state, cart: newCart}
    }

    if(action.type === 'INCREASE'){

     let tempCart = state.cart.map(item => {
           //1. map through the buttons in the list.
            
         if(item.id === action.payload){
             return {...item, amount: item.amount + 1} //  2. If the btn id is equal to the id that is clciked, increment the item.amount.        
         }
         return item; //  3. If it isnt, return the item, i.e return the normal thing.
        })
    return {...state, cart:tempCart}//4. After the mapping process, update the state.
    }

    if(action.type === 'DECREASE'){
     let tempCart = state.cart.map(item => {
           //1. map through the buttons in the list.
            
         if(item.id === action.payload){
             return {...item, amount: item.amount - 1} //  2. If the btn id is equal to the id that is clciked, decrement the item.amount.        
         }
         return item; //  3. If it isnt, return the item, i.e return the normal thing.
        }).filter(item => !(item.amount < 0))
    return {...state, cart:tempCart}//4. After the mapping process, update the state.
    }
    if (action.type === 'GET_TOTALS'){
//1. destructure the total and amount property from the returned object in line 36, which is later returned at the end of everything
    let {total, amount} = state.cart.reduce((cartTotal, cartItem) => {
        //2. The reduce function takes two parameters. The accumulator and each of the object property that is being looped through
          const {price, amount} = cartItem;
          //3. Destructure the price and the amount as we loop through for we are going to use it later 
          const itemTotal = price * amount;//4. Miltiply the price with the amount of each item
          cartTotal.total += itemTotal;//sum it up with the previous cartTotal.total starting from zero in the accumulator as we loop through
          cartTotal.amount += amount;//sum up the amount with the previous cartTotal.amount starting from zero in the accumulator as we loop through
          return cartTotal;// return the cartTotal object
        }, {total:0, amount:0})
        total = parseFloat(total.toFixed(2));//always limit total to 2d.p
      return {...state, total, amount}
    }
    if (action.type === 'LOADING'){
        return {...state, loading:true};
    }
    if (action.type === 'DISPLAY_ITEMS'){
        return {...state, cart:action.payload, loading:false}
    }
    if(action.type === 'TOGGLE_AMOUNT'){
       const tempCart = state.cart.map(cartItem => {
           if(cartItem.id === action.payload.id){
               if (action.payload.type === 'inc'){
                 
                   return {...cartItem, amount: cartItem.amount + 1}
               }
            if (action.payload.type === 'dec'){
                
                   return {...cartItem, amount: cartItem.amount - 1 }
           }
       }
       return cartItem;
    }).filter(cartItem => cartItem.amount !== 0)
      return {...state, cart: tempCart}
    }
    throw new Error ('no matching type');//as per reducer must always return sth
}
export default reducer;