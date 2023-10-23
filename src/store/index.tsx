import { configureStore } from "@reduxjs/toolkit";
import copySlice from "./copy-slice";
import copySlice2 from "./LowGoConvert";

const store = configureStore({
	reducer: {
		// copy: copySlice.reducer,
		copy: copySlice2.reducer,
	},
});

export default store;
