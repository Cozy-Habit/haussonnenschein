import IconMap32 from "./icons/index";

type Icon32 = keyof typeof IconMap32;

export default interface IconProps {
  icon: Icon32;
}
