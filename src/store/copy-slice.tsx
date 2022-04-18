import { createSlice } from "@reduxjs/toolkit";

interface Copys_obj {
	text: {
		name: string;
		value: string;
	};
}

interface TypeState {
	copys: Copys_obj[];
	textarea: string;
	error: string;
}

const initialState: TypeState = {
	copys: [],
	textarea:
		'{{ $Test1 := "Te xt" }}\n{{ $Test2 := "Teeeeeext" }}\n{{ $Test3 := "Texxxxxt" }}\n{{ $Test4 := "Tettttt" }}',
	error: "",
};

const copySlice = createSlice({
	name: "copy",
	initialState,
	reducers: {
		// Stores text objects from textarea
		createCopy(state: { copys: Copys_obj[]; textarea: string }, action: { payload: string }) {
			const textObj = action.payload
				.split("\n")
				.filter((text) => text.includes("{{"))
				.map((text) => {
					const newText = text.replace(/\s+/g, " ").trim();
					let value = "";
					let sentence = "";

					if (newText.includes('= "')) {
						sentence = newText.split('= "')[1].split('" }}')[0];
					}
					const textArr = newText.split(" ");
					const name = textArr[1].slice(1);

					value = (sentence ? sentence : textArr[3].includes('""') ? "" : textArr[3])
						.replaceAll('\\"', '"')
						.replaceAll("\\'", "'");
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

export const copyActions = copySlice.actions;

export default copySlice;
