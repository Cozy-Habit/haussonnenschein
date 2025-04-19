import Clouds from "./components/Clouds/Clouds";
import MenuItem from "./components/MenuItem";
import styles from "./Navbar.module.scss";

const Navbar = () => {
	return (
		<header className={styles.wrapper}>
			<nav className={styles.navbar}>
				<Clouds />
				<ul id="menuItems" className={styles["navbar__menu"]}>
					<MenuItem href="/" label="Home" />
					<MenuItem href="/Tagesmutter" label="Tagesmutter" />
					<MenuItem href="/Raeumlichkeiten" label="Räumlichkeiten" />
					<MenuItem href="/Betreuung" label="Betreuung" />
					<MenuItem href="/Kontakt" label="Kontakt" />
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
