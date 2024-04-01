/* 
Props{
    Text:
}
*/

/*How can I add icons via props to stay flexible? */
import Link from "next/link";

export default function Button(props: {
    text: string, icon: string, link: string, onClick: any
}) {
    const text = props.text;
    const icon = props.icon;
    const link = props.link;
    const onClick = props.onClick;

    return (
        <button className="button-primary">
            <Link onClick={onClick} href={link}>
                <span>{text ? text : "Button"}</span>
                {icon ? <img className="button-svg" src={icon} /> : ""}
            </Link>
        </button>
    );
}