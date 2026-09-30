import Typography from "@/components/Typography/Typography";
import { useTranslation } from "@/i18n/LanguageProvider";

export default function AddressForm({
	city,
	houseNumber,
	postalCode,
	street,
	updateFields,
}: FormProps<"addressData">) {
	const { t } = useTranslation();

	function handleChange(value: {}) {
		updateFields({
			addressData: {
				city,
				houseNumber,
				postalCode,
				street,
				...value,
			},
		});
	}

	return (
		<div>
			<Typography type="h2">{t("contact.addressData.title")}</Typography>

			<label>{t("contact.addressData.street")}</label>
			<input
				value={street}
				required
				onChange={(e) => handleChange({ street: e.target.value })}
				placeholder={t("contact.addressData.placeholders.street")}
			/>
			<label>{t("contact.addressData.houseNumber")}</label>
			<input
				value={houseNumber}
				required
				onChange={(e) => handleChange({ houseNumber: e.target.value })}
				placeholder={t("contact.addressData.placeholders.houseNumber")}
			/>
			<label>{t("contact.addressData.city")}</label>
			<input
				value={city}
				required
				onChange={(e) => handleChange({ city: e.target.value })}
				placeholder={t("contact.addressData.placeholders.city")}
			/>
			<label>{t("contact.addressData.postalCode")}</label>
			<input
				value={postalCode}
				type="number"
				required
				onChange={(e) => handleChange({ postalCode: e.target.value })}
				placeholder={t("contact.addressData.placeholders.postalCode")}
			/>
		</div>
	);
}
