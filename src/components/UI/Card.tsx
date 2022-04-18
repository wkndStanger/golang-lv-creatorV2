import classes from "./Card.module.css";

type Props = {
	className?: any;
	children: React.ReactNode;
};

const Card = (props: Props) => {
	return <section className={`${classes.card} ${props.className}`}>{props.children}</section>;
};

export default Card;
