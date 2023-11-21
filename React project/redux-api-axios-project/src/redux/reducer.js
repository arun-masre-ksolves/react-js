import { ADD_TO_CART, EMPTY_CART } from "./constant";

export const cartData = (data = [], action) => {

  switch (action.type) {
    case ADD_TO_CART:
      console.log("ADD_TO_CART condition", action);
      return [action.data, ...data];

    case "REMOVE_FROM_CART":
      console.log("REMOVE_FROM_CART condition", action);
      const indexToRemove = data.findIndex((item) => item.id === action.data);

      if (indexToRemove !== -1) {
        const updatedCart = [...data];

        if (updatedCart[indexToRemove].quantity > 1) {
          updatedCart[indexToRemove].quantity -= 1;
        } else {
          updatedCart.splice(indexToRemove, 1);
        }

        return updatedCart;
      }

      return data;

    case EMPTY_CART:
      console.log("Empty cart", action);
      data.length = [];
      return [...data];

    default:
      return data;
  }
};
