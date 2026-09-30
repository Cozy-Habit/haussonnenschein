import { ReactElement } from "react";
import type { ButtonProps } from "../Button/Button.types";
import IconProps from "../Icon/Icon.types";

// ButtonPrimaryProps had issues infering the type of the ButtonProps property because
// ButtonProps is a union type and extending an interface with a union type causes issues for some reason

export type ButtonPrimaryProps = ButtonProps & {
	iconLeft?: ReactElement<IconProps>;
};

//before: interface ButtonPrimaryProps extends ButtonProps -> interface cannot extend union types
//idea: Omit<ButtonProps, "children" -> to remove the children property from ButtonProps
//Problem: Omit will confuse typescript as it turns it into one big object type so the information on the union type is lost
//Solution: use the intersection type & to combine the two types, but this won't work for interfaces
