"use client";

import Image from "next/image";
import { Title, Typography } from "@/components";
import styles from "./page.module.scss";
import { useTranslation } from "@/i18n/LanguageProvider";

export default function Betreuung() {
	const { t } = useTranslation();
	return (
		<>
			<Title text={t("care.title")} />
			<div className={styles.sectionWrapper}>
				<div className={styles.section}>
					<Typography type="h1" as="h2" fontFamily="lilita">
						{t("care.acclimatization.title")}
					</Typography>
					<Typography type="body-semibold">
						{t("care.acclimatization.intro")}
					</Typography>
					<Typography type="h2" as="h3" fontFamily="lilita">
						{t("care.acclimatization.basicPhaseTitle")}
					</Typography>
					<Typography type="body-semibold">
						{t("care.acclimatization.basicPhaseText")}
					</Typography>

					<Typography type="h2" as="h3" fontFamily="lilita">
						{t("care.acclimatization.firstSeparationTitle")}
					</Typography>
					<Typography type="body-semibold">
						{t("care.acclimatization.firstSeparationText")}
					</Typography>

					<Typography type="h2" as="h3" fontFamily="lilita">
						{t("care.acclimatization.stabilizationTitle")}
					</Typography>
					<Typography type="body-semibold">
						{t("care.acclimatization.stabilizationText")}
					</Typography>

					<Typography type="h2" as="h3" fontFamily="lilita">
						{t("care.acclimatization.conclusionTitle")}
					</Typography>
					<Typography type="body-semibold">
						{t("care.acclimatization.conclusionText")}
					</Typography>
				</div>
			</div>
			<div className={styles.sectionWrapper}>
				<div className={styles.section}>
					<Typography type="h1" as="h2" fontFamily="lilita">
						{t("care.dailyRoutine.title")}
					</Typography>
					<Typography type="body-semibold">
						{t("care.dailyRoutine.content")}
					</Typography>
					<div className={styles.section__images}>
						<Image
							src="assets/betreuung/02.svg"
							alt=""
							width={360}
							height={300}
						/>
						<Image
							src="assets/betreuung/03.svg"
							alt=""
							width={360}
							height={300}
						/>
					</div>
				</div>
			</div>
			<div className={styles.sectionWrapper}>
				<div className={styles.section}>
					<Typography type="h1" as="h2" fontFamily="lilita">
						{t("care.carePeriod.title")}
					</Typography>
					<Typography type="body-semibold">
						{t("care.carePeriod.content")}
					</Typography>
				</div>
			</div>
			<div className={styles.sectionWrapper}>
				<div className={styles.section}>
					<Typography type="h1" as="h2" fontFamily="lilita">
						{t("care.illness.title")}
					</Typography>
					<Typography type="body-semibold">
						{t("care.illness.content")}
					</Typography>
				</div>
			</div>
			<div className={styles.sectionWrapper}>
				<div className={styles.section}>
					<Typography type="h1" as="h2" fontFamily="lilita">
						{t("care.mealPlan.title")}
					</Typography>
					<Typography type="body-semibold">
						{t("care.mealPlan.content")}
					</Typography>
					<Image
						src="assets/betreuung/01.svg"
						alt=""
						width={350}
						height={300}
					/>
				</div>
			</div>
			<div className={styles.sectionWrapper}>
				<div className={styles.section}>
					<Typography type="h1" as="h2" fontFamily="lilita">
						{t("care.educationalDocumentation.title")}
					</Typography>
					<Typography type="body-semibold">
						{t("care.educationalDocumentation.content")}
					</Typography>
				</div>
			</div>
			<div className={styles.sectionWrapper}>
				<div className={styles.section}>
					<Typography type="h1" as="h2" fontFamily="lilita">
						{t("care.parentCooperation.title")}
					</Typography>
					<Typography type="body-semibold">
						{t("care.parentCooperation.content")}
					</Typography>
				</div>
			</div>
			<div className={styles.sectionWrapper}>
				<div className={styles.section}>
					<Typography type="h1" as="h2" fontFamily="lilita">
						{t("care.events.title")}
					</Typography>
					<Typography type="body-semibold">
						{t("care.events.content")}
					</Typography>
					<div className={styles.section__images}>
						<Image
							src="assets/betreuung/04.svg"
							alt=""
							width={415}
							height={300}
						/>
						<Image
							src="assets/betreuung/05.svg"
							alt=""
							width={300}
							height={300}
						/>
					</div>
				</div>
			</div>
		</>
	);
}
