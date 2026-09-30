import Typography from "@/components/Typography/Typography";
import { useTranslation } from "@/i18n/LanguageProvider";

export default function ChildForm({
	firstName,
	lastName,
	birthday,
	updateFields,
}: FormProps<"childData">) {
	const { t } = useTranslation();

	function handleChange(value: {}) {
		updateFields({
			childData: { firstName, lastName, birthday, ...value },
		});
	}

	return (
		<div>
			<Typography type="h2">{t("contact.childData.title")}</Typography>

			<label>{t("contact.childData.firstName")}</label>
			<input
				value={firstName}
				required
				onChange={(e) => handleChange({ firstName: e.target.value })}
				placeholder={t("contact.childData.placeholders.firstName")}
			/>
			<label>{t("contact.childData.lastName")}</label>
			<input
				value={lastName}
				required
				onChange={(e) => handleChange({ lastName: e.target.value })}
				placeholder={t("contact.childData.placeholders.lastName")}
			/>
			<label>{t("contact.childData.birthday")}</label>
			<input
				value={birthday}
				required
				type="date"
				onChange={(e) =>
					handleChange({
						birthday: e.target.value,
					})
				}
			/>
		</div>
	);
}
