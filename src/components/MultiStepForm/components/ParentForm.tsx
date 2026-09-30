"use client";

import Typography from "@/components/Typography/Typography";
import { useTranslation } from "@/i18n/LanguageProvider";

export default function ParentForm({
	email,
	firstName,
	lastName,
	phone,
	updateFields,
}: FormProps<"parentData">) {
	const { t } = useTranslation();

	function handleChange(value: {}) {
		updateFields({
			parentData: { email, firstName, lastName, phone, ...value },
		});
	}

	return (
		<div>
			<Typography type="h2">{t("contact.parentData.title")}</Typography>

			<label>{t("contact.parentData.firstName")}</label>
			<input
				value={firstName}
				required
				onChange={(e) => handleChange({ firstName: e.target.value })}
				placeholder={t("contact.parentData.placeholders.firstName")}
			/>
			<label>{t("contact.parentData.lastName")}</label>
			<input
				value={lastName}
				required
				onChange={(e) => handleChange({ lastName: e.target.value })}
				placeholder={t("contact.parentData.placeholders.lastName")}
			/>
			<label>{t("contact.parentData.email")}</label>
			<input
				value={email}
				required
				onChange={(e) => handleChange({ email: e.target.value })}
				placeholder={t("contact.parentData.placeholders.email")}
			/>
			<label>{t("contact.parentData.phone")}</label>
			<input
				value={phone}
				required
				onChange={(e) => handleChange({ phone: e.target.value })}
				placeholder={t("contact.parentData.placeholders.phone")}
			/>
		</div>
	);
}
