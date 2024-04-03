import Title from "@/Title"
import Headline from "@/components/Headline";

export default function Impressum() {
    return (
        <>
            <Title title="Impressum" />

            <div className="impressum">
                <Headline src="/assets/impressum.svg" alt="Impressum Überschrift" />

                <div className="impressum-container">
                    <h4>Anschrift Kindertagespflege</h4>
                    <p>Sandra Diner</p>
                    <p>Niederpleiserstr. 97, 53757 Sankt Augustin</p>
                    <p>0163 6912191</p>
                    <p>kindertagespflege-haus-sonnenschein@web.de</p>
                    <p>Freiberufler</p>
                </div>
            </div>
        </>
    );
}