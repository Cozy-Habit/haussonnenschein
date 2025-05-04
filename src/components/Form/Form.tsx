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

const Form = () => {
	const { handleSubmit, control, formState, reset } = useForm<IFormInput>();
	const form = useRef<HTMLFormElement>(null);
	const [success, setSuccess] = useState(false);

	const handleSubmitData = () => {
		if (form.current !== undefined && form.current !== null)
			emailjs
				.sendForm(
					"service_lisecdf",
					"template_upr3gqo",
					form.current,
					"6ejAO_oWgLdchGR_-"
				)
				.then(
					(result) => {
						console.log(result.text);
					},
					(error) => {
						console.log(error.text);
					}
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
				}
			)}
			ref={form}
			className={styles.form}
		>
			{success && (
				<Typography
					type="body-semibold"
					className={styles.form__success}
				>
					Anfrage erfolgreich abgesendet
				</Typography>
			)}
			<Typography type="h2">Daten Elternteil</Typography>
			<div className={styles.form__section}>
				<InputField
					label="Vorname"
					placeholder="Jonas"
					control={control}
					name="elternVorname"
					rules={{
						required: "Erforderlich",
					}}
				/>
				<InputField
					label="Nachname"
					placeholder="Mustermann"
					control={control}
					name="elternNachname"
					rules={{
						required: "Erforderlich",
					}}
				/>
				<InputField
					label="E-Mail Adresse"
					type="email"
					placeholder="jonas.mustermann@mail.com"
					control={control}
					name="elternEmail"
					rules={{
						required: "Erforderlich",
					}}
				/>
				<InputField
					label="Mobilnummer"
					type="tel"
					placeholder="0176 123456"
					control={control}
					name="elternMobilnummer"
					rules={{
						required: "Erforderlich",
					}}
				/>
			</div>
			<Typography type="h2">Daten Kind</Typography>
			<div className={styles.form__section}>
				<InputField
					label="Vorname"
					placeholder="Lena"
					control={control}
					name="kindVorname"
					rules={{
						required: "Erforderlich",
					}}
				/>
				<InputField
					label="Nachname"
					placeholder="Mustermann"
					control={control}
					name="kindNachname"
					rules={{
						required: "Erforderlich",
					}}
				/>
				<InputField
					label="Geburtstag"
					type="date"
					control={control}
					name="kindGeburtstag"
					className={styles.form__short}
					rules={{
						required: "Erforderlich",
					}}
				/>
			</div>
			<Typography type="h2">Betreuungsdaten</Typography>
			<div className={styles.form__section}>
				<InputField
					label="Betreuungsstart"
					type="date"
					control={control}
					name="start"
					rules={{
						required: "Erforderlich",
					}}
				/>
				<InputField
					label="Betreuungsende"
					type="date"
					control={control}
					name="ende"
					rules={{
						required: "Erforderlich",
					}}
				/>
			</div>
			<Typography type="h2">Anschrift</Typography>
			<div className={styles.form__section}>
				<InputField
					label="Straße"
					placeholder="Musterstraße"
					control={control}
					name="strasse"
					rules={{
						required: "Erforderlich",
					}}
				/>
				<InputField
					label="Hausnummer"
					placeholder="123"
					control={control}
					name="hausnummer"
					rules={{
						required: "Erforderlich",
					}}
				/>
				<InputField
					label="Stadt"
					placeholder="Musterstadt"
					control={control}
					name="stadt"
					rules={{
						required: "Erforderlich",
					}}
				/>
				<InputField
					label="Postleitzahl"
					placeholder="51234"
					control={control}
					name="plz"
					rules={{
						required: "Erforderlich",
					}}
				/>
			</div>
			<Typography type="h2">Sonstiges</Typography>
			<div className={styles.form__section}>
				<InputField
					label="Persönliche Nachricht / Hinweise / Anmerkungen"
					placeholder="Deine Nachricht hier..."
					control={control}
					name="message"
					inputType="textarea"
				/>
			</div>
			<ButtonPrimary iconLeft={<Icon icon="arrow_right" />} type="submit">
				Anfrage absenden
			</ButtonPrimary>
		</form>
	);
};

export default Form;
