"use client";

import Link from "next/link";
import Sonne from "@/svg/Sonne";
import styles from "./Footer.module.scss";
import Typography from "../Typography/Typography";
import { useTranslation } from "@/i18n/LanguageProvider";

const Footer = () => {
	const { t } = useTranslation();

	return (
		<footer className={styles.footer}>
			<Sonne />

			<nav>
				<ul className={styles["footer__list"]}>
					<li>
						<Link href="/">
							<Typography type="body-semibold">
								{t("footer.nav.home")}
							</Typography>
						</Link>
					</li>
					<li>
						<Link href="/Tagesmutter">
							<Typography type="body-semibold">
								{t("footer.nav.childminder")}
							</Typography>
						</Link>
					</li>
					<li>
						<Link href="/Raeumlichkeiten">
							<Typography type="body-semibold">
								{t("footer.nav.premises")}
							</Typography>
						</Link>
					</li>
					<li>
						<Link href="/Betreuung">
							<Typography type="body-semibold">
								{t("footer.nav.care")}
							</Typography>
						</Link>
					</li>
					<li>
						<Link href="/Kontakt">
							<Typography type="body-semibold">
								{t("footer.nav.contact")}
							</Typography>
						</Link>
					</li>
					<li>
						<Link href="/Impressum">
							<Typography type="body-semibold">
								{t("footer.nav.legalNotice")}
							</Typography>
						</Link>
					</li>
				</ul>
			</nav>
			<div className={styles["footer__divider"]}></div>
			<Typography type="body-regular">{t("footer.credits")}</Typography>
		</footer>
	);
};

export default Footer;
