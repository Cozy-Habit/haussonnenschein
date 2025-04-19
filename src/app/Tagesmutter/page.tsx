import { Section, Headline } from "@/components";
import Title from "@/Title";

export default function Tagesmutter() {
	return (
		<>
			<Headline
				src="/assets/headlines/tagesmutter.svg"
				alt="Tagesmutter"
			/>
			<Section
				backgroundColor="creme"
				text={
					<>
						Ich bin eine sehr emphatische, soziale und kinderliebe
						Person.
						<br></br>Zudem bin ich ein absoluter Familienmensch und
						verbringe daher auch viel Zeit mit meinen Lieben,
						Ausflüge, Feiern ect.
						<br></br>
						<br></br>Neben Arbeit, Haushalt und Familie arbeite ich
						auch gerne im Garten, lese ein gutes Buch, gehe gerne in
						die Sauna, lecker essen und liebe es Zeit mit Freunden
						zu verbringen.
					</>
				}
				image={<img src="/assets/tagesmutter/01.svg" />}
				title="Das bin ich"
			/>
			<Section
				backgroundColor="white"
				text={
					<>
						Neben über 11 Jahren Erfahrung im Bereich der
						Tagespflege kann ich die folgenden Qualifikationen
						vorweisen:
						<ul>
							<li>Erste-Hilfe-Schulung</li>
							<li>
								Kolloquium zur QHB qualifizierten
								Kindertagespflegeperson
							</li>
							<li>
								Abschluss des staatlich anerkannten
								Fernlehrgangs “Erziehungsberatung”
							</li>
							<li>
								Zertifikat zur “Qualifizierten
								Tagespflegeperson”
							</li>
						</ul>
					</>
				}
				image={<img src="/assets/tagesmutter/02.svg" />}
				title="Meine Qualifikationen"
				isReverse={true}
			/>
			<Section
				backgroundColor="creme"
				text={
					<>
						Ich bin Mutter von vier tollen Kindern und sogar bereits
						stolze Oma zweier Enkelkinder.<br></br> <br></br>
						Meine Kinder gehen im Familienhaus noch regelmäßig ein
						und aus. Sie sind daher mit meinem Arbeitsalltag und den
						Tageskindern gut vertraut.
					</>
				}
				image={<img src="/assets/tagesmutter/03.svg" />}
				title="Meine Familie"
			/>
			<Section
				backgroundColor="white"
				text={
					<>
						Ein weiteres Mitglied der Familie ist unser 7 Jahre
						alter Familienhund Dean oder auch Deany genannt.
						<br></br>
						<br></br>
						Er ist ein absoluter Kindermagnet und mein Assistent in
						der täglichen Betreuung.
						<br></br>
						<br></br>Zudem ist er eine sehr liebevolle und ruhige
						Seele und ist den Umgang mit Kindern seit er klein ist
						gewohnt.
						<br></br>
						<br></br>Die Kinder werden sich also rasch an ihn
						gewöhnen und den Umgang mit diesem erlernen.
					</>
				}
				image={<img src="/assets/tagesmutter/04.svg" />}
				title="Familienhund"
				isReverse={true}
			/>
		</>
	);
}
