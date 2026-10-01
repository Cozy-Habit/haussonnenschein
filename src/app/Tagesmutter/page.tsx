"use client";

import { Section, ColorfulText } from "@/components";
import { useTranslation } from "@/i18n/LanguageProvider";
import Image from "next/image";

export default function Tagesmutter() {
	const { t } = useTranslation();

	return (
		<>
			<ColorfulText type="h1" text={t("childminder.title")} />
			<Section
				backgroundColor="creme"
				text={t("childminder.aboutMe.content")}
				image={
					<Image
						width={284}
						height={365.64}
						alt=""
						src="/assets/tagesmutter/01.png"
						priority
					/>
				}
				title={t("childminder.aboutMe.title")}
			/>
			<Section
				backgroundColor="white"
				text={
					<>
						{t("childminder.qualifications.content")}
						<br />
						<br />

						{t("childminder.qualifications.items")
							.split(";")
							.map((item) => (
								<span key={item}>
									{`- ${item}`}
									<br />
								</span>
							))}
					</>
				}
				image={
					<Image
						width={284}
						height={365.64}
						alt=""
						src="/assets/tagesmutter/02.png"
						priority
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
						width={284}
						height={365.64}
						alt=""
						src="/assets/tagesmutter/03.png"
					/>
				}
				title={t("childminder.family.title")}
			/>
			<Section
				backgroundColor="white"
				text={t("childminder.familyDog.content")}
				image={
					<Image
						width={284}
						height={365.64}
						alt=""
						src="/assets/tagesmutter/04.png"
					/>
				}
				title={t("childminder.familyDog.title")}
				isReverse={true}
			/>
		</>
	);
}
