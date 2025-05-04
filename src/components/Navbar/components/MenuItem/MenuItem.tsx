"use client";

import Typography from "@/components/Typography/Typography";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./MenuItem.module.scss";
import clsx from "clsx";
import MenuItemProps from "./MenuItem.types";
import { useIsMobile } from "../../../../hooks";

function MenuItem({ href, label, onClick }: MenuItemProps) {
	const pathname = usePathname();
	const [activeClassName, setActiveClassName] = useState(false);
	const isMobile = useIsMobile();

	useEffect(() => {
		// remove trailing slash
		let myPathname = pathname;
		if (pathname.endsWith("/") && pathname !== "/") {
			myPathname = pathname.slice(0, -1);
		}
		// active or not active thats the question
		const isActive = myPathname == href;
		setActiveClassName(isActive);
	}, [href, pathname]);

	console.log(activeClassName);
	return (
		<li>
			<Link href={href} className={styles.menuItem} onClick={onClick}>
				<Typography
					type={isMobile ? "h1" : "h2"}
					fontFamily="lilita"
					as="span"
					className={clsx({
						[styles["menuItem--active"]]: activeClassName,
					})}
				>
					{activeClassName ? label.toUpperCase() : label}
				</Typography>
			</Link>
		</li>
	);
}

export default MenuItem;
