import { ReactElement } from "react";

export default interface SectionProps {
  headline?: string;
  title?: string;
  backgroundColor: "white" | "creme";
  text: ReactElement | string;
  image: ReactElement;
  buttonText: string;
  buttonHref: string;
  isReverse?: boolean;
}
