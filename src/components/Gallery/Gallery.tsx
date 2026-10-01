import styles from "./Gallery.module.scss";
import Image from "next/image";

var arr_alt = [
	["gallery_01.png", "Wohnzimmer"],
	["gallery_02.png", "Wohnzimmer"],
	["gallery_03.png", "Wohnzimmer"],
	["gallery_04.png", "Wohnzimmer"],
	["gallery_05.png", "Wohnzimmer"],
	["gallery_06.png", "Wohnzimmer"],
	["gallery_07.png", "Wohnzimmer"],
	["gallery_08.png", "Wohnzimmer"],
	["gallery_09.png", "Wohnzimmer"],
];

const path = "/assets/gallery/";

const Gallery = () => {
	return (
		<div className={styles.gallery}>
			<div className={styles["gallery__container"]}>
				{arr_alt.map((item, key) => {
					return (
						<Image
							key={key}
							className={styles["gallery__img"]}
							src={path + item[0]}
							alt={item[1]}
							height={318.43}
							width={247.34}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Gallery;
