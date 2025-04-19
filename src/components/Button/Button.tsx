"user client";

import clsx from "clsx";
import styles from "./Button.module.scss";
import { ButtonProps } from "./Button.types";

const Button = ({
	ariaDescribedBy,
	ariaLabel,
	ariaLabelledBy,
	children,
	className,
	href,
	onClick,
	role,
	type = "button",
}: ButtonProps) => {
	const isLink = href;

	if (isLink)
		return (
			<a
				role={role}
				aria-label={ariaLabel}
				aria-labelledby={ariaLabelledBy}
				aria-describedby={ariaDescribedBy}
				onClick={onClick}
				href={href}
				className={clsx(styles.button, className)}
			>
				{children}
			</a>
		);
	else
		return (
			<button
				type={type}
				role={role}
				aria-label={ariaLabel}
				aria-labelledby={ariaLabelledBy}
				aria-describedby={ariaDescribedBy}
				onClick={onClick}
				className={clsx(styles.button, className)}
			>
				{children}
			</button>
		);
};

export default Button;
