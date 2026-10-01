import Typography from "../Typography/Typography";
import TypographyProps from "../Typography/Typography.types";
import styles from "./ColorfulText.module.scss";

export default function ColorfulText({
	text,
	align = "center",
	type,
	as,
}: {
	text: string;
	align?: "center" | "left" | "right";
} & Pick<TypographyProps, "as" | "type">) {
	return (
		<Typography
			type={type}
			as={as}
			fontFamily="lilita"
			className={`${styles.text} ${styles[`text--${align}`]}`}
		>
			{text.split("").map((char, index) => {
				const colorIndex = (index % 4) + 1;
				return (
					<span
						key={index}
						style={{ color: `var(--accent_${colorIndex})` }}
					>
						{char.toUpperCase()}
					</span>
				);
			})}
		</Typography>
	);
}
