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
	role,
	variant = "button",
	...props
}: ButtonProps) => {
	if (variant === "link")
		return (
			<a
				{...props}
				role={role}
				aria-label={ariaLabel}
				aria-labelledby={ariaLabelledBy}
				aria-describedby={ariaDescribedBy}
				className={clsx(styles.button, className)}
			>
				{children}
			</a>
		);

	return (
		<button
			{...props}
			role={role}
			aria-label={ariaLabel}
			aria-labelledby={ariaLabelledBy}
			aria-describedby={ariaDescribedBy}
			className={clsx(styles.button, className)}
		>
			{children}
		</button>
	);
};

export default Button;
