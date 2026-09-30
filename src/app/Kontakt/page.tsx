"use client";

import { Title, MultiStepForm } from "@/components";
import { useTranslation } from "@/i18n/LanguageProvider";

const Page = () => {
	const { t } = useTranslation();
	return (
		<>
			<Title text={t("contact.title")} />
			<MultiStepForm />
		</>
	);
};

export default Page;
