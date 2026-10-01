"use client";

import Typography from "@/components/Typography/Typography";
import { usePathname } from "next/navigation";
import styles from "./MenuItem.module.scss";
import clsx from "clsx";
import MenuItemProps from "./MenuItem.types";
import { useIsMobile } from "../../../../hooks";
import { useRouter } from "next/navigation";
import Button from "@/components/Button/Button";
import ColorfulText from "@/components/ColorfulText/ColorfulText";

function MenuItem({ href, label, onClick }: MenuItemProps) {
	const pathname = usePathname();
	const isMobile = useIsMobile();
	const isActive = pathname === href;

	return (
		<li>
			<Button
				className={styles.menuItem}
				onClick={onClick}
				href={href}
				variant="link"
			>
				{isActive ? (
					<ColorfulText type="h2" as="span" text={label} />
				) : (
					<Typography type="h2" fontFamily="lilita" as="span">
						{label}
					</Typography>
				)}
			</Button>
		</li>
	);
}

export default MenuItem;
