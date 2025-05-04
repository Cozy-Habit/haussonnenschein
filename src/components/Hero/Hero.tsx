import Image from "next/image";
import Typography from "../Typography/Typography";
import styles from "./Hero.module.scss";

const Hero = () => {
	return (
		<div className={styles.hero}>
			<Image
				width={500}
				height={250}
				src="/assets/home/hero.svg"
				alt="Haus Sonnenschein Überschrift und Logo"
				className={styles["hero__img0"]}
			/>
			<Typography type="h2" as="h1" className={styles.hero__title}>
				Kindertagespflege in Sankt Augustin U3
			</Typography>
			<div className={styles["hero__images"]}>
				<Image
					alt="Haus Sonnenschein"
					width={400}
					height={400}
					priority
					className={styles["hero__img1"]}
					src="/assets/home/hero_01.svg"
				/>
				<Image
					alt=""
					width={400}
					height={400}
					priority
					className={styles["hero__img2"]}
					src="/assets/home/hero_02.svg"
				/>
				<Image
					alt=""
					width={400}
					height={400}
					className={styles["hero__img3"]}
					src="/assets/home/hero_03.svg"
				/>
				<Image
					alt=""
					width={400}
					height={400}
					className={styles["hero__img4"]}
					src="/assets/home/hero_04.svg"
				/>
			</div>
		</div>
	);
};

export default Hero;
