import Typography from "@/components/Typography/Typography";
import { useTranslation } from "@/i18n/LanguageProvider";

export default function MiscForm({
	message,
	referral,
	updateFields,
}: FormProps<"miscData">) {
	const { t } = useTranslation();

	function handleChange(value: {}) {
		updateFields({
			miscData: {
				message,
				referral,
				...value,
			},
		});
	}

	return (
		<div>
			<Typography type="h2">{t("contact.miscData.title")}</Typography>

			<label>{t("contact.miscData.message")}</label>
			<textarea
				value={message}
				onChange={(e) => handleChange({ message: e.target.value })}
				placeholder={t("contact.miscData.placeholders.message")}
			/>
			<label>{t("contact.miscData.referral")}</label>
			<select
				onChange={(e) => handleChange({ referral: e.target.value })}
			>
				{t("contact.miscData.options.referral")
					.split(";")
					.map((option) => (
						<option key={option}>{option}</option>
					))}
			</select>
		</div>
	);
}
