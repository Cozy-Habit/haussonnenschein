"user client";
import Button from "../Button/Button";
import ButtonPrimaryProps from "./ButtonPrimary.types";
import styles from "./ButtonPrimary.module.scss";

const ButtonPrimary = ({
  iconLeft,
  text,
  ...buttonProps
}: ButtonPrimaryProps) => {
  return (
    <Button className={styles.buttonPrimary} {...buttonProps}>
      {text} {iconLeft}
    </Button>
  );
};

export default ButtonPrimary;
