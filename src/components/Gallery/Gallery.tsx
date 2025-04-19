import styles from "./Gallery.module.scss";

var arr_alt = [
	["gallery_01.svg", "Wohnzimmer"],
	["gallery_02.svg", "Wohnzimmer"],
	["gallery_03.svg", "Wohnzimmer"],
	["gallery_04.svg", "Wohnzimmer"],
	["gallery_05.svg", "Wohnzimmer"],
	["gallery_06.svg", "Wohnzimmer"],
	["gallery_07.svg", "Wohnzimmer"],
	["gallery_08.svg", "Wohnzimmer"],
	["gallery_09.svg", "Wohnzimmer"],
];

const path = "/assets/gallery/";

const Gallery = () => {
	return (
		<div className={styles.gallery}>
			<div className={styles["gallery__container"]}>
				{arr_alt.map((item, key) => {
					return (
						<img
							key={key}
							className={styles["gallery__img"]}
							src={path + item[0]}
							alt={item[1]}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Gallery;
