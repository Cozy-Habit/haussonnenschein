import { useId } from "react";
import InputFieldProps from "./InputField.types";
import styles from "./InputField.module.scss";
import { useController, UseControllerProps } from "react-hook-form";
import { IFormInput } from "../Form/Form.types";
import clsx from "clsx";
import Typography from "../Typography/Typography";

const InputField = ({
	label,
	placeholder,
	type = "text",
	inputType = "input",
	className,
	...props
}: InputFieldProps & Partial<UseControllerProps<IFormInput>>) => {
	const uuid = useId();
	const { field, fieldState } = useController(props);
	const Input = inputType === "input" ? "input" : "textarea";

	return (
		<div className={clsx(styles.inputField, className)}>
			<label htmlFor={uuid}>
				<Typography type="body-regular">{label}</Typography>
			</label>
			<Input
				{...field}
				placeholder={placeholder}
				type={type}
				className={clsx(styles.inputField__input, {
					[styles["inputField--error"]]: fieldState.invalid,
					[styles["inputField--textarea"]]: inputType === "textarea",
				})}
			/>
			{
				<Typography
					type="body-semibold"
					className={styles.inputField__error}
				>
					{fieldState.error?.message}
				</Typography>
			}
		</div>
	);
};

export default InputField;
