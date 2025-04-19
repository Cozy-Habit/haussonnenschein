import Link from "next/link";
import Sonne from "@/svg/Sonne";
import styles from "./Footer.module.scss";
import Typography from "../Typography/Typography";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Sonne />

			<nav>
				<ul className={styles["footer__list"]}>
					<li>
						<Link href="/">
							<Typography type="body-semibold">Home</Typography>
						</Link>
					</li>
					<li>
						<Link href="/Tagesmutter">
							<Typography type="body-semibold">
								Tagesmutter
							</Typography>
						</Link>
					</li>
					<li>
						<Link href="/Raeumlichkeiten">
							<Typography type="body-semibold">
								Räumlichkeiten
							</Typography>
						</Link>
					</li>
					<li>
						<Link href="/Betreuung">
							<Typography type="body-semibold">
								Betreuung
							</Typography>
						</Link>
					</li>
					<li>
						<Link href="/Kontakt">
							<Typography type="body-semibold">
								Kontakt
							</Typography>
						</Link>
					</li>
					<li>
						<Link href="/Impressum">
							<Typography type="body-semibold">
								Impressum
							</Typography>
						</Link>
					</li>
				</ul>
			</nav>
			<div className={styles["footer__divider"]}></div>
			<Typography type="body-regular">
				Design by Sophia Precker
			</Typography>
		</footer>
	);
};

export default Footer;
