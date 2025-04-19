import { ButtonOwnProps } from "@mui/base";
import { AriaRole, MouseEvent, ReactNode } from "react";

interface CommonProps {
  ariaDescribedBy?: string;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  className?: string;
  role?: AriaRole;
}

export interface BaseButtonProps extends ButtonOwnProps, CommonProps {
  onClick: (event: MouseEvent<HTMLElement>) => void;
  type?: "submit" | 'button';
}

export interface LinkProps extends CommonProps {
  href?: string;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  children: ReactNode;
}

export type ButtonProps = BaseButtonProps | LinkProps;
