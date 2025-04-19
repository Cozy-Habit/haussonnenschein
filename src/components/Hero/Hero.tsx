import Typography from "../Typography/Typography";
import styles from "./Hero.module.scss";

const Hero = () => {
	return (
		<div className={styles.hero}>
			<img
				src="/assets/home/hero.svg"
				alt="Haus Sonnenschein Überschrift und Logo"
			/>
			<Typography type="h2" as="h1">
				Kindertagespflege in Sankt Augustin U3
			</Typography>
			<div className={styles["hero__images"]}>
				<img
					className={styles["hero__img1"]}
					src="/assets/home/hero_01.svg"
				/>
				<img
					className={styles["hero__img2"]}
					src="/assets/home/hero_02.svg"
				/>
				<img
					className={styles["hero__img3"]}
					src="/assets/home/hero_03.svg"
				/>
				<img
					className={styles["hero__img4"]}
					src="/assets/home/hero_04.svg"
				/>
			</div>
		</div>
	);
};

export default Hero;
