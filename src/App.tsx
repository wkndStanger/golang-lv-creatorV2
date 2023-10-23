import TextareaCard from "./components/Cards/TextareaCard";
import LowerTextAreaCard from "./components/Cards/LowerTextArea";

import "./App.css";
import EditInputCard from "./components/Cards/EditInputCard";

function App() {
	return (
		<main className="center app">
			{/* <TextareaCard /> */}
			<LowerTextAreaCard />
			<EditInputCard />
		</main>
	);
}

export default App;
