"use client";

import { Gallery, Title } from "@/components";
import { useTranslation } from "@/i18n/LanguageProvider";

export default function Raeumlichkeiten() {
	const { t } = useTranslation();
	return (
		<>
			<Title text={t("premises.title")} />
			<Gallery />
		</>
	);
}
