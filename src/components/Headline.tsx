export default function Headline(props: { src: string, alt: string }) {
    return (
        <h1 className="headlineContainer">
            <img className="main-headline" src={props.src} alt={props.alt} />
        </h1>
    )
}