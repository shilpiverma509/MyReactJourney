import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  //a store has only reducer object hence we use "reducer" here
  reducer: {
    cart: cartReducer,
  },
});
console.log(appStore);

export default appStore;
