import Button from "../Button";
import Headline from "../Headline";

function HeadlineExists(props: { src: string, alt: string }) {
    return (
        <>
            <Headline src={props.src} alt={props.alt} />
        </>
    );
}
function HeadlineNotExists() {
    return (
        <>
        </>
    );
}

function TitleExists(props: { text: string }) {
    return (
        <>
            <h2>{props.text}</h2>
        </>
    );
}
function TitleNotExists() {
    return (
        <>
        </>
    );
}

function ButtonExists(props: { text: string, icon: string, link: string, onClick: any }) {
    const text = props.text;
    const icon = props.icon
    const link = props.link;
    const onClick = props.onClick;

    return (
        <>
            <Button text={text} icon={icon} link={link} onClick={onClick} />
        </>
    );
}
function ButtonNotExists() {
    return (
        <>
        </>
    );
}

function ImageExists(props: { link: string, alt: string }) {
    const link = props.link;
    const alt = props.alt;

    return (
        <>
            <img className="main-img" src={link} alt={alt} />
        </>
    );
}

function ImageNotExists() {
    return (
        <>
        </>
    );
}

export default function Section(props: {
    isHeadline: boolean,
    headline_src: string,
    headline_alt: string,

    isTitle: boolean,
    title_text: string,

    content_text: any,

    isButton: boolean,
    button_link: string,
    button_text: string,
    button_icon: string,
    button_onClick: any,

    isImage: boolean,
    image_link: string,
    image_alt: string,

    reversed: boolean,
    whiteBackground: boolean
}) {

    const isHeadline = props.isHeadline;
    const headline_src = props.headline_src;
    const headline_alt = props.headline_alt;

    const isTitle = props.isTitle;
    const title_text = props.title_text;

    const content_text = props.content_text;

    const isButton = props.isButton;
    const button_link = props.button_link;
    const button_text = props.button_text;
    const button_icon = props.button_icon;
    const button_onClick = props.button_onClick;

    const isImage = props.isImage;
    const image_link = props.image_link;
    const image_alt = props.image_alt;

    const reversed = props.reversed;
    const whiteBackground = props.whiteBackground;



    return (
        <div className={whiteBackground ? "main_section main_headline even" : "main_section main_headline"}>
            {isHeadline ? <HeadlineExists src={headline_src} alt={headline_alt} /> : <HeadlineNotExists />}

            <div className={reversed ? "main_section main_section_rev main_width reversed" : "main_section main_section_rev main_width"}>
                <div className="main_text-button">
                    {isTitle ? <TitleExists text={title_text} /> : <TitleNotExists />}


                    <span>{content_text}</span>

                    {isButton ? <ButtonExists text={button_text} icon={button_icon} link={button_link} onClick={button_onClick} /> : <ButtonNotExists />}
                </div>

                {isImage ? <ImageExists link={image_link} alt={image_alt} /> : <ImageNotExists />}
            </div>
        </div>
    );
}