import IconProps from "./Icon.types";
import IconMap from "./icons";
import styles from "./Icon.module.scss";

const Icon = ({ icon }: IconProps) => {
	const Icon = IconMap[icon];

	return <Icon className={styles.icon} />;
};

export default Icon;
