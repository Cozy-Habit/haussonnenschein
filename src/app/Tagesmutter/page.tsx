import Section from "@/components/Section";
import Title from "@/Title"

export default function Tagesmutter() {
    return (
        <>
            <Title title="Tagesmutter" />

            <div className="nothing"></div>
            <Section
                isHeadline={true}
                headline_src="/assets/tagesmutter.svg"
                headline_alt="Tagesmutter Überschrift"
                isTitle={true}
                title_text="Das bin ich"
                content_text={<>Ich bin eine sehr emphatische, soziale und kinderliebe Person.<br></br>Zudem bin ich ein absoluter Familienmensch und verbringe daher auch viel Zeit mit meinen Lieben, Ausflüge, Feiern ect.

                    <br></br><br></br>Neben Arbeit, Haushalt und Familie arbeite ich auch gerne im Garten, lese ein gutes Buch, gehe gerne in die Sauna, lecker essen und liebe es Zeit mit Freunden zu verbringen.</>}

                isButton={false}
                button_link=""
                button_text=""
                button_icon=""
                button_onClick=""

                isImage={true}
                image_link="/assets/tagesmutter_selfie.svg"
                image_alt="Tagesmutter Portrait"

                reversed={false}
                whiteBackground={false}
            />

            <Section
                isHeadline={false}
                headline_src=""
                headline_alt=""
                isTitle={true}
                title_text="Meine Qualifikationen"
                content_text={<>Neben über 11 Jahren Erfahrung im Bereich der Tagespflege kann ich die folgenden Qualifikationen vorweisen:
                    <ul>
                        <li>Erste-Hilfe-Schulung</li>
                        <li>Kolloquium zur QHB qualifizierten Kindertagespflegeperson</li>
                        <li>Abschluss des staatlich anerkannten Fernlehrgangs “Erziehungsberatung”</li>
                        <li>Zertifikat zur “Qualifizierten Tagespflegeperson”</li>
                    </ul></>}

                isButton={false}
                button_link=""
                button_text=""
                button_icon=""
                button_onClick=""

                isImage={true}
                image_link="/assets/tagesmutter_zertifikat.svg"
                image_alt="Tagesmutter Portrait"

                reversed={true}
                whiteBackground={true}
            />

            <Section
                isHeadline={false}
                headline_src=""
                headline_alt=""
                isTitle={true}
                title_text="Meine Familie"
                content_text={<>Ich bin Mutter von vier tollen Kindern und sogar bereits stolze Oma zweier Enkelkinder.<br></br> <br></br>

                    Meine Kinder gehen im Familienhaus noch regelmäßig ein und aus. Sie sind daher mit meinem Arbeitsalltag und den Tageskindern gut vertraut.</>}

                isButton={false}
                button_link=""
                button_text=""
                button_icon=""
                button_onClick=""

                isImage={true}
                image_link="/assets/tagesmutter_familie.svg"
                image_alt="Tagesmutter Portrait"

                reversed={false}
                whiteBackground={false}
            />
            <Section
                isHeadline={false}
                headline_src=""
                headline_alt=""
                isTitle={true}
                title_text="Unser Familienhund"
                content_text={<>Ein weiteres Mitglied der Familie ist unser 7 Jahre alter Familienhund Dean oder auch Deany genannt.
                    <br></br><br></br>
                    Er ist er auch ein absoluter Kindermagnet und mein Assistent in der täglichen Betreuung.

                    <br></br><br></br>Zudem ist er eine sehr liebevolle und ruhige Seele und ist den Umgang mit Kindern seit er klein ist gewohnt.

                    <br></br><br></br>Die Kinder werden sich also rasch an ihn gewöhnen und den Umgang mit diesem erlernen.</>}

                isButton={false}
                button_link=""
                button_text=""
                button_icon=""
                button_onClick=""

                isImage={true}
                image_link="/assets/tagesmutter_hund.svg"
                image_alt="Familienhund"

                reversed={true}
                whiteBackground={true}
            />
        </>
    );
}