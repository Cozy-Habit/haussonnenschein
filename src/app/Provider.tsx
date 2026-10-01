"use client";

import { LanguageProvider } from "@/i18n/LanguageProvider";
import { MotionConfig } from "framer-motion";

export default function Provider({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<MotionConfig reducedMotion="user">
			<LanguageProvider>{children}</LanguageProvider>
		</MotionConfig>
	);
}
