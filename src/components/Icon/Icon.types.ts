import IconMap32 from "./32x32/index";

type Icon32 = keyof typeof IconMap32;

export default interface IconProps {
  icon: Icon32;
}
