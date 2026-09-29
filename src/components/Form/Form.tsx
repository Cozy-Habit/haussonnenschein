"use client";

import { useForm } from "react-hook-form";
import InputField from "../InputField/InputField";
import Typography from "../Typography/Typography";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import Icon from "../Icon/Icon";
import styles from "./Form.module.scss";
import emailjs from "@emailjs/browser";
import { useEffect, useRef, useState } from "react";
import { IFormInput } from "./Form.types";
import { useTranslation } from "@/i18n/LanguageProvider";

const Form = () => {
	const { handleSubmit, control, formState, reset } = useForm<IFormInput>();
	const form = useRef<HTMLFormElement>(null);
	const [success, setSuccess] = useState(false);
	const { t } = useTranslation();

	const handleSubmitData = () => {
		if (form.current !== undefined && form.current !== null)
			emailjs
				.sendForm(
					"service_lisecdf",
					"template_upr3gqo",
					form.current,
					"6ejAO_oWgLdchGR_-",
				)
				.then(
					(result) => {
						console.log(result.text);
					},
					(error) => {
						console.log(error.text);
					},
				);
	};

	useEffect(() => {
		if (formState.isSubmitSuccessful) {
			console.log("reset");
			window.scrollTo(0, 0);
			setSuccess(true);
			reset({
				elternVorname: "",
				elternNachname: "",
				elternEmail: "",
				elternMobilnummer: "",
				kindVorname: "",
				kindNachname: "",
				kindGeburtstag: "",
				strasse: "",
				hausnummer: "",
				stadt: "",
				plz: "",
				message: "",
				start: "",
				ende: "",
			});
		}
	}, [formState]);

	return (
		<form
			onSubmit={handleSubmit(
				() => {
					setSuccess(false);
					handleSubmitData();
				},
				() => {
					setSuccess(false);
				},
			)}
			ref={form}
			className={styles.form}
		>
			{success && (
				<Typography
					type="body-semibold"
					className={styles.form__success}
				>
					{t("contact.success")}
				</Typography>
			)}
			<Typography type="h2">{t("contact.parentData.title")}</Typography>
			<div className={styles.form__section}>
				<InputField
					label={t("contact.parentData.firstName")}
					placeholder={t("contact.parentData.placeholders.firstName")}
					control={control}
					name="elternVorname"
					rules={{
						required: "Erforderlich",
					}}
				/>
				<InputField
					label={t("contact.parentData.lastName")}
					placeholder="Mustermann"
					control={control}
					name="elternNachname"
					rules={{
						required: "Erforderlich",
					}}
				/>
				<InputField
					label={t("contact.parentData.email")}
					type="email"
					placeholder="jonas.mustermann@mail.com"
					control={control}
					name="elternEmail"
					rules={{
						required: "Erforderlich",
					}}
				/>
				<InputField
					label={t("contact.parentData.phone")}
					type="tel"
					placeholder={t("contact.parentData.placeholders.phone")}
					control={control}
					name="elternMobilnummer"
					rules={{
						required: "Erforderlich",
					}}
				/>
			</div>
			<Typography type="h2">{t("contact.childData.title")}</Typography>
			<div className={styles.form__section}>
				<InputField
					label={t("contact.childData.firstName")}
					placeholder={t("contact.childData.placeholders.firstName")}
					control={control}
					name="kindVorname"
					rules={{
						required: "Erforderlich",
					}}
				/>
				<InputField
					label={t("contact.childData.lastName")}
					placeholder={t("contact.childData.placeholders.lastName")}
					control={control}
					name="kindNachname"
					rules={{
						required: "Erforderlich",
					}}
				/>
				<InputField
					label={t("contact.childData.birthday")}
					type="date"
					control={control}
					name="kindGeburtstag"
					className={styles.form__short}
					rules={{
						required: "Erforderlich",
					}}
				/>
			</div>
			<Typography type="h2">{t("contact.careData.title")}</Typography>
			<div className={styles.form__section}>
				<InputField
					label={t("contact.careData.startDate")}
					type="date"
					control={control}
					name="start"
					rules={{
						required: "Erforderlich",
					}}
				/>
				<InputField
					label={t("contact.careData.endDate")}
					type="date"
					control={control}
					name="ende"
					rules={{
						required: "Erforderlich",
					}}
				/>
			</div>
			<Typography type="h2">{t("contact.address.title")}</Typography>
			<div className={styles.form__section}>
				<InputField
					label={t("contact.address.street")}
					placeholder={t("contact.address.placeholders.street")}
					control={control}
					name="strasse"
					rules={{
						required: "Erforderlich",
					}}
				/>
				<InputField
					label={t("contact.address.houseNumber")}
					placeholder={t("contact.address.placeholders.houseNumber")}
					control={control}
					name="hausnummer"
					rules={{
						required: "Erforderlich",
					}}
				/>
				<InputField
					label={t("contact.address.city")}
					placeholder={t("contact.address.placeholders.city")}
					control={control}
					name="stadt"
					rules={{
						required: "Erforderlich",
					}}
				/>
				<InputField
					label={t("contact.address.postalCode")}
					placeholder={t("contact.address.placeholders.postalCode")}
					control={control}
					name="plz"
					rules={{
						required: "Erforderlich",
					}}
				/>
			</div>
			{/* TODO: Add Wie hast du von mir erfahren? Empfehlung; LittleBird; Google Maps; Suchmaschine; Jugendamt */}
			<Typography type="h2">{t("contact.misc.title")}</Typography>
			<div className={styles.form__section}>
				<InputField
					label={t("contact.misc.message")}
					placeholder={t("contact.misc.placeholder")}
					control={control}
					name="message"
					inputType="textarea"
				/>
			</div>
			<ButtonPrimary iconLeft={<Icon icon="arrow_right" />} type="submit">
				{t("contact.submit")}
			</ButtonPrimary>
		</form>
	);
};

export default Form;
