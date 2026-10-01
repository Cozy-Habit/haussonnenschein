"user client";

import clsx from "clsx";
import styles from "./Button.module.scss";
import { ButtonProps, LinkProps, CommonProps } from "./Button.types";
import Link from "next/link";

function isLink(props: ButtonProps): props is LinkProps & CommonProps {
	return props.variant === "link";
}

const Button = (props: ButtonProps) => {
	const {
		ariaDescribedBy,
		ariaLabel,
		ariaLabelledBy,
		children,
		className,
		role,
	} = props;

	if (isLink(props)) {
		return (
			<Link
				{...props}
				href={props.href}
				role={role}
				aria-label={ariaLabel}
				aria-labelledby={ariaLabelledBy}
				aria-describedby={ariaDescribedBy}
				className={clsx(styles.button, className)}
			>
				{children}
			</Link>
		);
	}

	return (
		<button
			type="button"
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
