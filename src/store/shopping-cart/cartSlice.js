import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    // ========= Add Items ========== //
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );

      //   increase state quantity whether item.id existing or not
      state.totalQuantity++;

      if (!existingItem) {
        // =======
        // Note: If you use just redux you should not mutate the state array instead clone the array,
        // but if you use redux toolkit that will not be a problem because redux toolkit
        // clone the array behind the scene
        // ======= //

        state.cartItems.push({
          id: newItem.id,
          title: newItem.title,
          image01: newItem.image01,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        // increase the existingItem total price and quantity
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.price);
      }

      // keep adding each item price to the total price(* it quantity summed)
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );

      // console.log(state.cartItems);
    },

    // ========= Add Items ========== //
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      state.totalQuantity--;

      if (existingItem.quantity === 1) {
        // if existingItem.quantity is one and you click on it
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
      } else {
        // decrease the existingItem total price and quantity
        // if the existingItem's quanty is more than 1
        existingItem.quantity--;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) - Number(existingItem.price);
      }

      // keep removing each item price from the total price(* it quantity summed)
      state.totalAmount = state.cartItems.reduce(
        // thereby the new quantity times each item price
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
    },

    // ========= Add Items ========== //
    deleteItem(state, action) {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
        state.totalQuantity = state.totalQuantity - existingItem.quantity;
      }

      state.totalAmount = state.cartItems.reduce(
        // thereby the new quantity times each item price
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
    },
  },
});

// cartSlice.actions returns the reducers' actions
export const cartActions = cartSlice.actions;

// cartSlice State
export default cartSlice;
