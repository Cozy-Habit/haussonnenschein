"user client";
import { Section, Hero, Headline } from "@/components";
import makeMetadata from "@/metadata";
import "../scss/index.scss";

export const metadata = makeMetadata("Home");

export default function Home() {
	return (
		<>
			<Hero />
			<Section
				backgroundColor="white"
				headline={
					<Headline
						src="/assets/headlines/tagesmutter.svg"
						alt="Tagesmutter"
						as="h2"
					/>
				}
				text={
					<>
						Mein Name ist Sandra Diner und ich bin 47 Jahre alt. Als
						ursprünglich gelernte und selbständige
						Raumausstatter-Meisterin habe ich durch meine Kinder
						meine eigentliche Berufung entdeckt und lieben gelernt:{" "}
						<br /> <br /> Die Kindertagespflege
					</>
				}
				image={<img src="/assets/home/01.svg" />}
				buttonText="Mehr über Sandra"
				buttonHref="/Tagesmutter"
			/>

			<Section
				isReverse={true}
				backgroundColor="creme"
				headline={
					<Headline
						src="/assets/headlines/räumlichkeiten.svg"
						alt="Räumlichkeiten"
						as="h2"
					/>
				}
				text={
					<>
						Die Betreuung findet in meinem Einfamilienhaus statt.
						Die Kinder können sich im Wohnzimmer und Esszimmer
						spielerisch austoben.
						<br /> <br /> Im Wohnzimmer werden Snacks als auch das
						Mittagessen gemeinsam eingenommen.
						<br /> <br /> In den Schlafräumen können die Kinder in
						den Betten ihren Mittagsschlaf machen.
						<br /> <br /> Dazu können die Kinder unter meiner
						Aufsicht in den großzügigen Hinterhof und Garten.
					</>
				}
				image={<img src="/assets/home/02.svg" />}
				buttonText="Mehr Bilder"
				buttonHref="/Raeumlichkeiten"
			/>

			<Section
				backgroundColor="white"
				headline={
					<Headline
						src="/assets/headlines/betreuung.svg"
						alt="Betreuung"
						as="h2"
					/>
				}
				text={
					<>
						Meine Betreuung ist sehr vielseitig und fassettenreich.
						Es gibt einen gewohnten Tagesablauf von der
						Morgenbegrüßung bis zur Abholung am Nachmittag. <br />
						<br />
						Mit abwechslungsreichen Snacks und Mittagessen, als auch
						vom Wetter abhängenden Tagesprogramm. <br />
						<br />
						Hierbei wird jedes Kind mitsamt seiner Stärken und
						Schwächen betreut und durch diverse Spiele und
						Aktivitäten individuell gefördert.
					</>
				}
				image={<img src="/assets/home/03.svg" />}
				buttonText="Mehr zur Betreuung"
				buttonHref="/Betreuung"
			/>

			<Section
				isReverse={true}
				backgroundColor="creme"
				headline={
					<Headline
						src="/assets/headlines/kontakt.svg"
						alt="Kontakt"
						as="h2"
					/>
				}
				text={
					<>
						Spricht dich mein Konzept der Kindertagespflege an?{" "}
						<br></br>Dann nimm gerne mit mir Kontakt über das
						Kontaktformular auf und vereinbare ein erstes
						Kennenlerngespräch. <br></br> <br></br>Ich melde mich so
						schnell wie möglich per Email oder telefonisch.
					</>
				}
				buttonText="Zum Kontaktformular"
				buttonHref="/Kontakt"
			/>
		</>
	);
}
