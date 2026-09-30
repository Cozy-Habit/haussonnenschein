"use client";

import Typography from "@/components/Typography/Typography";
import { useTranslation } from "@/i18n/LanguageProvider";
import { ReactElement } from "react";

export default function ReviewData(
	props: MultiStepFormData & { onEdit: (stepIndex: number) => void },
) {
	const { t } = useTranslation();
	const { onEdit, ...formData } = props;

	function formDataToElements<T extends keyof MultiStepFormData>(
		formKey: T,
		fields: MultiStepFormData[T],
	): ReactElement[] {
		const fieldsArr = Object.entries(fields);

		return fieldsArr.map(([key, value]) => {
			const label = t(`contact.${formKey}.${key}`);
			return (
				<div key={key}>
					<span>
						<Typography type="body-semibold" as="span">
							{label}
						</Typography>
						: {value}
					</span>
					<br />
				</div>
			);
		});
	}

	return (
		<div>
			{Object.entries(formData).map(([key, data], index) => {
				return (
					<section key={key}>
						<div>
							<Typography type="h2">
								{t(`contact.${key}.title`)}
							</Typography>
							<button type="button" onClick={() => onEdit(index)}>
								✏️
							</button>
						</div>
						{formDataToElements(key as MSFDataIndex, data)}
						<hr />
					</section>
				);
			})}
		</div>
	);
}
