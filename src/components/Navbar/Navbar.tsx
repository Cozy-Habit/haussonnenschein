"use client";
import { useState } from "react";
import Clouds from "./components/Clouds/Clouds";
import MenuItem from "./components/MenuItem/MenuItem";
import styles from "./Navbar.module.scss";
import clsx from "clsx";
import Icon from "../Icon/Icon";
import { useTranslation } from "@/i18n/LanguageProvider";

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const { lang, setLang, t, supportedLang } = useTranslation();

	const handleHamburgerClick = () => {
		if (open) {
			setOpen(false);
		} else {
			setOpen(true);
		}
	};

	return (
		<header className={styles.wrapper}>
			<nav className={styles.navbar}>
				<Clouds />
				<ul
					id="menuItems"
					className={clsx(styles["navbar__menu"], {
						[styles["navbar--open"]]: open,
					})}
				>
					<MenuItem
						href="/"
						label={t("nav.home")}
						onClick={() => setOpen(false)}
					/>
					<MenuItem
						href="/Tagesmutter"
						label={t("nav.childminder")}
						onClick={() => setOpen(false)}
					/>
					<MenuItem
						href="/Raeumlichkeiten"
						label={t("nav.premises")}
						onClick={() => setOpen(false)}
					/>
					<MenuItem
						href="/Betreuung"
						label={t("nav.care")}
						onClick={() => setOpen(false)}
					/>
					<MenuItem
						href="/Kontakt"
						label={t("nav.contact")}
						onClick={() => setOpen(false)}
					/>
				</ul>
				<button
					onClick={handleHamburgerClick}
					className={styles.navbar__button}
				>
					<Icon icon="hamburger" />
				</button>
			</nav>
			<div className={styles.languageSwitch} role="group" aria-label="Language">
				{supportedLang.map((language) => {
					return (
						<button
							key={language}
							type="button"
							className={styles.languageSwitch__option}
							aria-pressed={language === lang}
							onClick={() => setLang(language)}
						>
							{language.toUpperCase()}
						</button>
					);
				})}
			</div>
		</header>
	);
};

export default Navbar;
