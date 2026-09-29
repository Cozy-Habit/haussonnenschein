import Typography from "../Typography/Typography";
import styles from "./Title.module.scss";

export default function Title({ text }: { text: string }) {
	return (
		<Typography type="h1" fontFamily="lilita" className={styles.title}>
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
