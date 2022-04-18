import { RootStateOrAny } from "react-redux";

import { useSelector } from "react-redux";
import Inputs from "../Inputs/Inputs";

import Card from "../UI/Card";
import classes from "./EditInputCard.module.css";

const EditInputCard = () => {
	const copys = useSelector((state: RootStateOrAny) => state.copy.copys);

	if (copys.length === 0) return null;

	return (
		<Card>
			<form className={classes.inputForm}>
				<h2>Edit Inputs Here:</h2>
				<Inputs />
			</form>
		</Card>
	);
};

export default EditInputCard;
