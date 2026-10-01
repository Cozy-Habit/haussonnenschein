"use client";

import { useLayoutEffect, useState } from "react";

export function useWindowSize() {
	const [size, setSize] = useState([0, 0]);
	useLayoutEffect(() => {
		function updateSize() {
			setSize([window.innerWidth, window.innerHeight]);
		}
		window.addEventListener("resize", updateSize);
		updateSize();
		return () => window.removeEventListener("resize", updateSize);
	}, []);
	return size;
}

export function useIsMobile() {
	const [width] = useWindowSize();
	const [isMobile, setIsMobile] = useState(false);

	if (width < 820) {
		if (!isMobile) {
			setIsMobile(true);
		}
	} else {
		if (isMobile) {
			setIsMobile(false);
		}
	}

	return isMobile;
}
