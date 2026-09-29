"use client";
import { Section, Hero, Title } from "@/components";
import { useTranslation } from "@/i18n/LanguageProvider";

export default function Home() {
	const { t } = useTranslation();

	return (
		<>
			<Hero />
			<Section
				backgroundColor="white"
				headline={<Title text={t("childminder.title")} />}
				text={t("home.childminder.content")}
				image={<img src="/assets/home/01.svg" />}
				buttonText={t("home.childminder.cta")}
				buttonHref="/Tagesmutter"
			/>

			<Section
				isReverse={true}
				backgroundColor="creme"
				headline={<Title text={t("premises.title")} />}
				text={t("home.premises.content")}
				image={<img src="/assets/home/02.svg" />}
				buttonText={t("home.premises.cta")}
				buttonHref="/Raeumlichkeiten"
			/>

			<Section
				backgroundColor="white"
				headline={<Title text={t("care.title")} />}
				text={t("home.care.content")}
				image={<img src="/assets/home/03.svg" />}
				buttonText={t("home.care.cta")}
				buttonHref="/Betreuung"
			/>

			<Section
				isReverse={true}
				backgroundColor="creme"
				headline={<Title text={t("contact.title")} />}
				text={t("home.contact.content")}
				buttonText={t("home.contact.cta")}
				buttonHref="/Kontakt"
			/>
		</>
	);
}
