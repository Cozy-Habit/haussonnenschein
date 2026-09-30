import Typography from "@/components/Typography/Typography";
import { useTranslation } from "@/i18n/LanguageProvider";

export default function CareForm({
	startDate,
	endDate,
	updateFields,
}: FormProps<"careData">) {
	const { t } = useTranslation();

	function handleChange(value: {}) {
		updateFields({
			careData: { startDate: startDate, endDate, ...value },
		});
	}

	return (
		<div>
			<Typography type="h2">{t("contact.careData.title")}</Typography>

			<label>{t("contact.careData.startDate")}</label>
			<input
				value={startDate}
				required
				type="date"
				onChange={(e) =>
					handleChange({
						startDate: e.target.value,
					})
				}
			/>
			<label>{t("contact.careData.endDate")}</label>
			<input
				value={endDate}
				required
				type="date"
				onChange={(e) =>
					handleChange({
						endDate: e.target.value,
					})
				}
			/>
		</div>
	);
}
