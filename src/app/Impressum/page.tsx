import styles from "./Impressum.module.scss";
import { Typography, Headline } from "@/components";

export default function Impressum() {
	return (
		<div className={styles.impressum}>
			<Headline src="/assets/headlines/impressum.svg" alt="Impressum" />

			<div className={styles["impressum__container"]}>
				<Typography type="h2">Anschrift Kindertagespflege</Typography>
				<Typography type="body-regular">Sandra Diner</Typography>
				<Typography type="body-regular">
					Niederpleiserstr. 97, 53757 Sankt Augustin
				</Typography>
				<Typography type="body-regular">0163 6912191</Typography>
				<Typography type="body-regular">
					kindertagespflege-haus-sonnenschein@web.de
				</Typography>
				<Typography type="body-regular">Freiberufler</Typography>
			</div>
		</div>
	);
}
