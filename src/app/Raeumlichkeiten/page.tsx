"use client";

import { Gallery, ColorfulText } from "@/components";
import { useTranslation } from "@/i18n/LanguageProvider";

export default function Raeumlichkeiten() {
	const { t } = useTranslation();
	return (
		<>
			<ColorfulText type="h1" text={t("premises.title")} />
			<Gallery />
		</>
	);
}
