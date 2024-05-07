import Link from "next/link";

export default function Submit(props: {
    text: string, icon: string, link: string, onClick: any
}) {
    const text = props.text;
    const icon = props.icon;
    const link = props.link;
    const onClick = props.onClick;

    return (
        <button type="submit" className="button-primary" onClick={onClick}>
            <span>{text ? text : "Button"}</span>
            {icon ? <img className="button-svg" src={icon} /> : ""}
        </button>
    );
}