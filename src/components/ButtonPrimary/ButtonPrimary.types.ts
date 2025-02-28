import { ReactElement } from "react";
import { ButtonProps } from "../Button/Button.types";
import IconProps from "../Icon/Icon.types";

export default interface ButtonPrimaryProps
  extends Omit<ButtonProps, "children"> {
  text: string;
  iconLeft: ReactElement<IconProps>;
}
