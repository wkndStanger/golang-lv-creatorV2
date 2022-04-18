import React from "react";
import { RootStateOrAny, useSelector } from "react-redux";
// import { copyActions } from "../../store/copy-slice";

import classes from "./Inputs.module.css";

type CopyObj = {
	text: {
		name: string;
		value: string;
	};
};

const Inputs = () => {
	const copys = useSelector((state: RootStateOrAny) => state.copy.copys);

	const inputCopyHandler = (str: string) => {
		navigator.clipboard.writeText(str);
	};

	return (
		<>
			{copys.map((obj: CopyObj, index: React.Key | null | undefined) => {
				return (
					<div className={classes.variables} key={index}>
						<div className={classes["on-focus"]}>
							<input
								type="text"
								name="name"
								value={obj.text.name}
								onClick={inputCopyHandler.bind(null, obj.text.name)}
								readOnly
							/>
							<div className={classes["copy-alert"]}>Copyed!</div>
						</div>
						<div className={classes["on-focus"]}>
							<input
								type="text"
								name="value"
								value={obj.text.value}
								onClick={inputCopyHandler.bind(null, obj.text.value)}
								readOnly
							/>
							<div className={classes["copy-alert"]}>Copyed!</div>
						</div>
					</div>
				);
			})}
		</>
	);
};

export default Inputs;
