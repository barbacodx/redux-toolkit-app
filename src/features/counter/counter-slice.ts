//DUCKS PATTERN
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
    value:number;
}

const initialState = {
    value: 0,
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
      //increment
      incremented(state) {
         //it's immutable
          state.value++;
      },
        //amounted - payload is a number, object, array ecc..
       amountAdded(state, action: PayloadAction<number>) {
          state.value += action.payload;
       },
      //decrement
        decremented(state) {
          state.value--;

        },


    }
});

export const { incremented, decremented, amountAdded } = counterSlice.actions;
export default counterSlice.reducer;