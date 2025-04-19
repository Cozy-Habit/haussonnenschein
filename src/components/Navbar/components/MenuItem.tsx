"use client";

import Typography from "@/components/Typography/Typography";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./MenuItem.module.scss";
import clsx from "clsx";

function MenuItem({ href, label }: { href: string; label: string }) {
	const pathname = usePathname();
	const [activeClassName, setActiveClassName] = useState(false);

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
			<Link href={href}>
				<Typography
					className={clsx(styles.menuItem, {
						[styles["menuItem--active"]]: activeClassName,
					})}
					type="h2"
					fontFamily="lilita"
					as="span"
				>
					{activeClassName ? label.toUpperCase() : label}
				</Typography>
			</Link>
		</li>
	);
}

export default MenuItem;
