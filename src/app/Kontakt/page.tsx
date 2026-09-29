"use client";

import { Form, Title } from "@/components";
import { useTranslation } from "@/i18n/LanguageProvider";

const Page = () => {
	const { t } = useTranslation();
	return (
		<>
			<Title text={t("contact.title")} />
			<Form />
		</>
	);
};

export default Page;
