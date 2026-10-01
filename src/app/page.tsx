"use client";
import { Section, Hero, ColorfulText, Testimonials } from "@/components";
import { useTranslation } from "@/i18n/LanguageProvider";

export default function Home() {
	const { t } = useTranslation();

	return (
		<>
			<Hero />
			<Testimonials />

			<Section
				backgroundColor="creme"
				headline={
					<ColorfulText type="h1" text={t("childminder.title")} />
				}
				text={t("home.childminder.content")}
				image={<img src="/assets/home/01.png" />}
				buttonText={t("home.childminder.cta")}
				buttonHref="/Tagesmutter"
			/>

			<Section
				isReverse={true}
				backgroundColor="white"
				headline={<ColorfulText type="h1" text={t("premises.title")} />}
				text={t("home.premises.content")}
				image={<img src="/assets/home/02.png" />}
				buttonText={t("home.premises.cta")}
				buttonHref="/Raeumlichkeiten"
			/>

			<Section
				backgroundColor="creme"
				headline={<ColorfulText type="h1" text={t("care.title")} />}
				text={t("home.care.content")}
				image={<img src="/assets/home/03.png" />}
				buttonText={t("home.care.cta")}
				buttonHref="/Betreuung"
			/>

			<Section
				isReverse={true}
				backgroundColor="white"
				headline={<ColorfulText type="h1" text={t("contact.title")} />}
				text={t("home.contact.content")}
				buttonText={t("home.contact.cta")}
				buttonHref="/Kontakt"
			/>
		</>
	);
}
