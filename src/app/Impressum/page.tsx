"use client";

import { useTranslation } from "@/i18n/LanguageProvider";
import styles from "./Impressum.module.scss";
import { Typography, Title } from "@/components";

export default function Impressum() {
	const { t } = useTranslation();
	return (
		<div className={styles.impressum}>
			<Title type="h1" text={t("legalNotice.title")} />
			<div className={styles["impressum__container"]}>
				<Typography type="h2">
					{t("legalNotice.addressHeading")}
				</Typography>
				<Typography type="body-regular">
					{t("legalNotice.name")}
				</Typography>
				<Typography type="body-regular">
					{t("legalNotice.address")}
				</Typography>
				<Typography type="body-regular">
					{t("legalNotice.phoneNumber")}
				</Typography>
				<Typography type="body-regular">
					{t("legalNotice.email")}
				</Typography>
				<Typography type="body-regular">
					{t("legalNotice.jobTitle")}
				</Typography>
			</div>
		</div>
	);
}
