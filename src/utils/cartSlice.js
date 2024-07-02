import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",  // name can be anything
  initialState: {
    // initial value of store, initialState is an obj
    items: [],
  },
  reducers: {
    // it is obj, we will write reduces functions for each action, it has different types of actions
    addItem: (state, action) => {
      // we will modify the state based on action
      // mutating the state here
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      // () it is a reducer function
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0; // it means items becomes empty [], state = []
      // return {items: []} // it is also applicable
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;  // here we export one reducer
