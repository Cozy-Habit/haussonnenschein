"user client";
import Button from "../Button/Button";
import { ButtonPrimaryProps } from "./ButtonPrimary.types";
import styles from "./ButtonPrimary.module.scss";
import { BaseButtonProps, LinkProps } from "../Button/Button.types";

const ButtonPrimary = ({
	iconLeft,
	children,
	...buttonProps
}: ButtonPrimaryProps) => {
	return (
		<Button className={styles.buttonPrimary} {...buttonProps}>
			{children}
			{iconLeft}
		</Button>
	);
};

export default ButtonPrimary;
