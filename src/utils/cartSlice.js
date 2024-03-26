import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  //a slice can have multiple reducer functions therefore we use reducers here
  reducers: {
    addItem: (state, action) => {
      // Redux Toolkit uses immer BTS (library)
      //vanilla (older) Redux => never mutate state
      /**
       * const newState = [...state]
       * newState.items.push(action.payload);
       * return newState; //mandoatory
       *
       * Redux Toolkit
       * We have to mutate the state
       * reduxtoolkit doesn't force to return the state
       */
      //VERY IMPORTANT
      console.log("stae", state);

      //state = { items: [] }; //mutating the state directly
      //console.log("stateAfterMutating", state);

      state.items.push(action.payload);
      //console.log("currentSatte", current(state));
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    //originalState = {items: ["pizza"]}
    clearCart: (state, action) => {
      //RTK - either Mutate the existing  state or return a new State
      //state.items.length = 0; // originalState = []
      console.log("localState", state);
      console.log("currentSatte", current(state));
      state = [];
      console.log("localState", state);
      //console.log("currentSatte", current(state));

      return { items: [] }; // this new object will be replaced inside originalState = { items: [] }
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
