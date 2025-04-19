import HeadlineProps from "./Headline.types";
import styles from "./Headline.module.scss";

export default function Headline({ src, as, alt }: HeadlineProps) {
	const ElementTag = as ?? "h1";

	return (
		<div className={styles.headlineWrapper}>
			<ElementTag className={styles.headline}>{alt}</ElementTag>
			<img src={src} alt={alt} aria-hidden={true} />
		</div>
	);
}
