export const getBasketTotal = (basket) =>
  basket.reduce((amount, item) => {
    return amount + item.price;
  }, 0);

export const initialState = {
  basket: [],
}; 

const Reducer = (state = initialState, action) => {
  switch (action.type) {
      case "ADD_TO_BASKET":
        return { ...state, basket: [...state.basket, action.item] };

        case "EMPTY_BASKET":
          return { ...state, basket: [], };
 
        case "REMOVE_FROM_BASKET":
          const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

          let newBasket = [...state.basket];
    
          if (index >= 0) {
            newBasket.splice(index, 1);
          } else{
            console.warn(`can not remove the item becouse the ${action.id}is not exist`)
          }
          return { ...state, basket: newBasket };
    default:
      return state;
  }                                                              
};

export default Reducer;