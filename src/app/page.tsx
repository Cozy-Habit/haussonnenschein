import "../scss/index.scss";
import Section from "@/components/Section";
import Hero from "@/components/Hero";
import makeMetadata from "@/metadata";

export const metadata = makeMetadata("Home");

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Hero/> */}
      <Section
        isHeadline={true}
        headline_src="/assets/tagesmutter.svg"
        headline_alt="Tagesmutter Überschrift"
        isTitle={false}
        title_text=""
        content_text={<>Mein Name ist Sandra Diner und ich bin 46 Jahre alt. Als ursprünglich gelernte und selbständige Raumausstatter-Meisterin habe ich durch meine Kinder meine eigentliche Berufung entdeckt und lieben gelernt: <br /> <br /> Die Kindertagespflege</>}

        isButton={true}
        button_link="/Tagesmutter"
        button_text="Mehr über Sandra"
        button_icon="/assets/arrow_right.svg"
        button_onClick=""

        isImage={true}
        image_link="/assets/sandra_01.jpeg"
        image_alt="Tagesmutter spielt mit Kind im Garten"

        reversed={false}
        whiteBackground={true}

      />

      <Section
        isHeadline={true}
        headline_src="/assets/räumlichkeiten.svg"
        headline_alt="Räumlichkeiten Überschrift"
        isTitle={false}
        title_text=""
        content_text={<>Die Betreuung findet in meinem Einfamilienhaus statt. Die Kinder können sich im Wohnzimmer und Esszimmer spielerisch austoben.

          <br /> <br /> Im Wohnzimmer werden Snacks als auch das Mittagessen gemeinsam eingenommen.

          <br /> <br /> In den Schlafräumen können die Kinder in den Betten ihren Mittagsschlaf machen.

          <br /> <br /> Dazu können die Kinder unter meiner Aufsicht in den großzügigen Hinterhof und Garten.</>}

        isButton={true}
        button_link="/Raeumlichkeiten"
        button_text="Mehr Bilder"
        button_icon="/assets/arrow_right.svg"
        button_onClick=""

        isImage={true}
        image_link="/assets/sandra_02.svg"
        image_alt="Räumlichkeiten"

        reversed={true}
        whiteBackground={false}
      />

      <Section
        isHeadline={true}
        headline_src="/assets/betreuung.svg"
        headline_alt="Betreuung Überschrift"
        isTitle={false}
        title_text=""
        content_text={<>Meine Betreuung ist sehr vielseitig und fassettenreich. Es gibt einen gewohnten Tagesablauf von der Morgenbegrüßung bis zur Abholung am Nachmittag. <br /><br />

          Mit abwechslungsreichen Snacks und Mittagessen, als auch vom Wetter abhängenden Tagesprogramm. <br /><br />

          Hierbei wird jedes Kind mitsamt seiner Stärken und Schwächen betreut und durch diverse Spiele und Aktivitäten individuell gefördert.</>}

        isButton={true}
        button_link="/Betreuung"
        button_text="Mehr zur Betreuung"
        button_icon="/assets/arrow_right.svg"
        button_onClick=""

        isImage={true}
        image_link="/assets/sandra_03.svg"
        image_alt="Kommt noch"

        reversed={false}
        whiteBackground={true}
      />

      <Section
        isHeadline={true}
        headline_src="/assets/kontakt.svg"
        headline_alt="Kontakt Überschrift"
        isTitle={false}
        title_text=""
        content_text={<>Spricht dich mein Konzept der Kindertagespflege an? <br></br>Dann nimm gerne mit mir Kontakt über das Kontaktformular auf und vereinbare ein erstes Kennenlerngespräch. <br></br> <br></br>Ich melde mich so schnell wie möglich per Email oder telefonisch.</>}

        isButton={true}
        button_link="/Kontakt"
        button_text="Zum Kontaktformular"
        button_icon="/assets/arrow_right.svg"
        button_onClick=""

        isImage={false}
        image_link=""
        image_alt=""

        reversed={true}
        whiteBackground={false}
      />
    </>
  );
}
