"use client";

import Typography from "@/components/Typography/Typography";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./MenuItem.module.scss";
import clsx from "clsx";
import MenuItemProps from "./MenuItem.types";
import { useIsMobile } from "../../../../hooks";
import { useRouter } from "next/navigation";
import Button from "@/components/Button/Button";

function MenuItem({ href, label, onClick }: MenuItemProps) {
	const pathname = usePathname();
	const [activeClassName, setActiveClassName] = useState(false);
	const isMobile = useIsMobile();
	const router = useRouter();

	const handleClick = () => {
		router.push(href);
		onClick && onClick();
	};

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
			<Button className={styles.menuItem} onClick={handleClick}>
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
			</Button>
		</li>
	);
}

export default MenuItem;
