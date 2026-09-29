"use client";

import Typography from "@/components/Typography/Typography";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./MenuItem.module.scss";
import clsx from "clsx";
import MenuItemProps from "./MenuItem.types";
import { useIsMobile } from "../../../../hooks";

function MenuItem({ href, label, onClick }: MenuItemProps) {
	const pathname = usePathname();
	const isMobile = useIsMobile();
	const isActive = pathname === href;

	return (
		<li>
			<Link href={href} className={styles.menuItem} onClick={onClick}>
				<Typography
					type={isMobile ? "h1" : "h2"}
					fontFamily="lilita"
					as="span"
					className={clsx({
						[styles["menuItem--active"]]: isActive,
					})}
				>
					{isActive ? label.toUpperCase() : label}
				</Typography>
			</Link>
		</li>
	);
}

export default MenuItem;
