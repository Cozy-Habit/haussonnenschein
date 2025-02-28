import SectionProps from "./Section.types";
import styles from "./Section.module.scss";
import clsx from "clsx";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import Icon from "../Icon/Icon";
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
        styles[`section--${backgroundColor}`]
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
            {headline && title && <h3>{title}</h3>}
            {!headline && title && <h2>{title}</h2>}
            <span>{text}</span>
            <ButtonPrimary
              href={buttonHref}
              text={buttonText}
              iconLeft={<Icon icon="arrow_right" />}
            />
          </div>
          {image}
        </div>
      </div>
    </div>
  );
};

export default Section;
