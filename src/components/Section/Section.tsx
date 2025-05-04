import SectionProps from "./Section.types";
import styles from "./Section.module.scss";
import clsx from "clsx";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import Icon from "../Icon/Icon";
import Typography from "../Typography/Typography";
const Section = ({
	backgroundColor,
	headline,
	image,
	text,
	title,
	buttonText,
	buttonHref,
	isReverse = false,
}: SectionProps) => {
	return (
		<div
			className={clsx(
				styles.sectionWrapper,
				styles[`sectionWrapper--${backgroundColor}`]
			)}
		>
			<div className={styles.section}>
				{headline && <h2>{headline}</h2>}
				<div className={styles.section__content}>
					<div
						className={clsx(styles.section__text, {
							[styles["section--isReverse"]]: isReverse,
						})}
					>
						{headline && title && (
							<Typography type="h3" fontFamily="lilita">
								{title}
							</Typography>
						)}
						{!headline && title && (
							<Typography type="h2" fontFamily="lilita">
								{title}
							</Typography>
						)}
						<Typography type="body-semibold">{text}</Typography>
						{buttonText && (
							<ButtonPrimary
								variant="link"
								href={buttonHref}
								iconLeft={<Icon icon="arrow_right" />}
							>
								{buttonText}
							</ButtonPrimary>
						)}
					</div>
					<div className={styles["section__img"]}>{image}</div>
				</div>
			</div>
		</div>
	);
};

export default Section;
