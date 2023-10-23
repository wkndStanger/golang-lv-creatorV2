import { createSlice } from "@reduxjs/toolkit";

interface Copy_obj {
	text: {
		name: string;
		value: string;
	};
}

interface TypeState {
	copys: Copy_obj[];
	textarea: string;
	error: string;
}

const initialState: TypeState = {
	copys: [],
	textarea:
		'Test1\nTest2\nTest3\nTest4',
	error: "",
};

const copySlice2 = createSlice({
	name: "copy",
	initialState,
	reducers: {
		// Stores text objects from textarea
		createCopy(state: { copys: Copy_obj[]; textarea: string }, action: { payload: string }) {
			const textObj = action.payload
				.split("\n")
                
				// .filter((text) => text.includes(","))
                
				.map((text) => {
					const newText = text.replace(",", "").trim();
                    
					let value = "";
					
					const textArr = newText;

					const name = textArr;
                    
					value = textArr;
                  
                    return {
						text: { name, value },
					};
				});

			state.copys = textObj;
            
			const updatedCopy = textObj
				.map((copy) => `{{ $${copy.text.name} := $.${copy.text.name} }}`)
				.filter((copy) => copy !== "{{ $ := $. }}");
			state.textarea = updatedCopy.join("\n");
		},

		foundError(state, action) {
			state.error = action.payload;
		},
	},
});

export const copyActions = copySlice2.actions;

export default copySlice2;
