import ButtonPrimary from "@/components/ButtonPrimary/ButtonPrimary";
import Icon from "@/components/Icon/Icon";

export default function Submit(props: {
  text: string;
  link: string;
  onClick: any;
}) {
  const text = props.text;
  const link = props.link;
  const onClick = props.onClick;

  return (
    <ButtonPrimary
      type="submit"
      iconLeft={<Icon icon="arrow_right" />}
      text={text}
      onClick={onClick}
    />
  );
}
