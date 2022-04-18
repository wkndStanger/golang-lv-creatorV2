import { useRef, useEffect } from "react";
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import { copyActions } from "../../store/copy-slice";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./TextareaCard.module.css";

const TextareaCard = () => {
	const textCopyRef = useRef<HTMLTextAreaElement>(null);
	const textarea = useSelector((state: RootStateOrAny) => state.copy.textarea);
	const errorStore = useSelector((state: RootStateOrAny) => state.copy.error);
	const dispatch = useDispatch();

	// FIXME: THis is not working
	useEffect(() => {
		textCopyRef.current!.value = textarea;
	}, [textarea]);

	const addTextHandler = () => {
		const enteredText = textCopyRef.current!.value.trim();
		if (textCopyRef.current!.value.trim().length === 0) {
			return dispatch(copyActions.foundError("Please enter text into the text area!"));
		}
		dispatch(copyActions.foundError(null));
		dispatch(copyActions.createCopy(enteredText));
	};

	const copyHandler = () => navigator.clipboard.writeText(textarea);

	return (
		<Card className={classes.hero}>
			<h1>Golang LV Reflector</h1>
			<label htmlFor="textarea">Insert the Golang HTML Copy you wish to convert</label>
			<textarea name="textarea" id="textarea" ref={textCopyRef}></textarea>
			<div className={classes["btn-create"]}>
				<Button onClick={copyHandler}>Copy</Button>
				<Button onClick={addTextHandler}>Create Inputs!</Button>
			</div>
			{errorStore && <p>{errorStore}</p>}
		</Card>
	);
};

export default TextareaCard;
