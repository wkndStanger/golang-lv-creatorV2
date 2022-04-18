import classes from "./Button.module.css";

type Props = {
	className?: any;
	onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
	children: React.ReactNode;
};

const Button = (props: Props) => {
	return (
		<button className={`${classes.button} ${props.className}`} onClick={props.onClick}>
			{props.children}
		</button>
	);
};

export default Button;
