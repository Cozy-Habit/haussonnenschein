"use client";

import { Section, Title } from "@/components";
import { useTranslation } from "@/i18n/LanguageProvider";
import Image from "next/image";

export default function Tagesmutter() {
	const { t } = useTranslation();

	return (
		<>
			<Title text={t("childminder.title")} />
			<Section
				backgroundColor="creme"
				text={t("childminder.aboutMe.content")}
				image={
					<Image
						width={400}
						height={400}
						alt=""
						src="/assets/tagesmutter/01.svg"
					/>
				}
				title={t("childminder.aboutMe.title")}
			/>
			<Section
				backgroundColor="white"
				text={
					<>
						{[
							t("childminder.qualifications.content"),
							<br />,
							<br />,
							<ul>
								{t("childminder.qualifications.items")
									.split(";")
									.map((item) => (
										<li key={item}>{item}</li>
									))}
							</ul>,
						]}
					</>
				}
				image={
					<Image
						width={400}
						height={400}
						alt=""
						src="/assets/tagesmutter/02.svg"
					/>
				}
				title={t("childminder.qualifications.title")}
				isReverse={true}
			/>
			<Section
				backgroundColor="creme"
				text={t("childminder.family.content")}
				image={
					<Image
						width={400}
						height={400}
						alt=""
						src="/assets/tagesmutter/03.svg"
					/>
				}
				title={t("childminder.family.title")}
			/>
			<Section
				backgroundColor="white"
				text={t("childminder.familyDog.content")}
				image={
					<Image
						width={400}
						height={400}
						alt=""
						src="/assets/tagesmutter/04.svg"
					/>
				}
				title={t("childminder.familyDog.title")}
				isReverse={true}
			/>
		</>
	);
}
