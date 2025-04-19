import clsx from "clsx";
import styles from "./Typography.module.scss";
import TypographyProps, { TypographyTypes } from "./Typography.types";

const deriveFromType = (type: TypographyTypes) => {
	switch (type) {
		case "h1":
			return "h1";
		case "h2":
			return "h2";
		case "h3":
			return "h3";
		case "body-regular":
		case "body-semibold":
			return "p";
		default:
			return "span";
	}
};

const Typography = ({
	type,
	as,
	fontFamily = "inter",
	children,
	className,
}: TypographyProps) => {
	const Element = as ?? deriveFromType(type);
	const classname = clsx(
		className,
		styles.typography,
		styles[`typography--${type}`],
		styles[`typography--${fontFamily}`]
	);

	return <Element className={classname}>{children}</Element>;
};

export default Typography;
