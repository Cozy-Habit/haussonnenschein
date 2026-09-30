"use client";

import {
	createContext,
	Dispatch,
	SetStateAction,
	useContext,
	useState,
} from "react";
import de from "./locales/de.json";
import en from "./locales/en.json";

const LangArr = ["de", "en"];
type Languages = (typeof LangArr)[number];
const translations: { [x: Languages]: any } = { de, en };

type LanguageContext = {
	t: (key: string, replaceObj?: Record<string, string | number>) => string;
	lang: string;
	setLang: Dispatch<SetStateAction<string>>;
	supportedLang: string[];
};

const LanguageContext = createContext<LanguageContext | null>(null);

export function LanguageProvider({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const [lang, setLang] = useState<Languages>("de");

	function t(key: string, replaceObj?: Record<string, string | number>) {
		const keys = key.split(".");
		let translation = keys.reduce(
			(obj, i) => (obj && obj[i] !== undefined ? obj[i] : null),
			translations[lang],
		);

		if (!translation) {
			console.warn(`Translation key not found: ${key}`);
			return key;
		}

		if (replaceObj)
			Object.keys(replaceObj).forEach((placeholder) => {
				translation = translation.replace(
					`{${placeholder}}`,
					replaceObj[placeholder],
				);
			});

		return translation;
	}

	return (
		<LanguageContext.Provider
			value={{ lang, setLang, t, supportedLang: LangArr }}
		>
			{children}
		</LanguageContext.Provider>
	);
}

export function useTranslation(): LanguageContext {
	const context = useContext(LanguageContext);
	if (!context) {
		throw new Error(
			"useTranslation must be used within a LanguageProvider",
		);
	}
	return context;
}
