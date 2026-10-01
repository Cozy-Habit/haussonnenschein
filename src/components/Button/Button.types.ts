import { ButtonOwnProps } from "@mui/base";
import { AriaRole, MouseEvent, ReactNode } from "react";

export interface CommonProps {
	ariaDescribedBy?: string;
	ariaLabel?: string;
	ariaLabelledBy?: string;
	className?: string;
	role?: AriaRole;
	children: ReactNode;
}

export interface BaseButtonProps extends Omit<ButtonOwnProps, "href"> {
	variant?: "button";
	onClick?: (event: MouseEvent<HTMLElement>) => void;
	type?: "submit" | "button";
}

export interface LinkProps {
	variant: "link";
	href: string;
	onClick?: (event: MouseEvent<HTMLElement>) => void;
}

export type ButtonProps = (BaseButtonProps | LinkProps) & CommonProps;
