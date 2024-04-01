
export default function Hero() {
    return (
        <>
            <div className="main_hero">
                <img src="/assets/hero.svg" alt="Haus Sonnenschein Überschrift und Logo" />
                <h5>Kindertagespflege in Sankt Augustin U3</h5>
            </div>
            {/*TESTIMONIALS*/}
            <div className="main_gallery_container">
                <div className="main_gallery">
                    <img className="hero_01" src="/assets/hero_01.png" alt="Kind mit Kinderschminke im Gesicht" />
                    <img className="hero_02" src="/assets/hero_02.png" alt="Zwei lachende Kinder" />
                    <img className="hero_03" src="/assets/hero_03.png" alt="Kind verkleidet als Hund an Karneval" />
                    <img className="hero_04" src="/assets/hero_04.png" alt="Lachendes Kind auf dem Spielplatz" />
                </div>
            </div>
        </>
    );
}