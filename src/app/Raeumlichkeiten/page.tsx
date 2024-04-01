import Gallery from "@/components/Gallery";
import Title from "@/Title"
import Headline from "@/components/Headline";

export default function Raeumlichkeiten() {
    return (
        <>
            <Title title="Räumlichkeiten" />
            <Headline src="/assets/räumlichkeiten.svg" alt="Räumlichkeiten Überschrift" />
            <Gallery />
        </>
    );
}