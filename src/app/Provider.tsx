import { LanguageProvider } from "@/i18n/LanguageProvider";

export default function Provider({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <LanguageProvider>{children}</LanguageProvider>;
}
