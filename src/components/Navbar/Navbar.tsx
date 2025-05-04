"use client";
import { useState } from "react";
import Clouds from "./components/Clouds/Clouds";
import MenuItem from "./components/MenuItem/MenuItem";
import styles from "./Navbar.module.scss";
import clsx from "clsx";
import Icon from "../Icon/Icon";

const Navbar = () => {
	const [open, setOpen] = useState(false);

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
						label="Home"
						onClick={() => setOpen(false)}
					/>
					<MenuItem
						href="/Tagesmutter"
						label="Tagesmutter"
						onClick={() => setOpen(false)}
					/>
					<MenuItem
						href="/Raeumlichkeiten"
						label="Räumlichkeiten"
						onClick={() => setOpen(false)}
					/>
					<MenuItem
						href="/Betreuung"
						label="Betreuung"
						onClick={() => setOpen(false)}
					/>
					<MenuItem
						href="/Kontakt"
						label="Kontakt"
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
		</header>
	);
};

export default Navbar;
