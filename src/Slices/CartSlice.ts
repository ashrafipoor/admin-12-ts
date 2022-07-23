import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CartState {
  value: CartItem[];
}
export interface CartItem {
  productId: number;
  productName: string;
  productPrice: number;
}
const initialState: CartState = {
  value: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state: CartState, action: PayloadAction<CartItem>) => {
      let temp = [...state.value];
       temp.push(action.payload);
      state.value = temp;
    },
    removeFromCart: (state: CartState, action: PayloadAction<number>) => {
      let temp = [...state.value];
      const index = temp.findIndex(function (item: CartItem) {
        return item.productId === action.payload;
      });
      console.log(index)
      if (index >= 0) temp.splice(index, 1);
      state.value = temp;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
