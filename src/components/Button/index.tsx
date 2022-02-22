import Button from "./styles"

type ButtonProps = {
    url: string;
    label: string;
    style?: {};
    variant?: {size?: 'normal' | 'lg', color?: 'primary' | 'secondary' | 'outline_primary'};
}

function ButtonComponent (props: ButtonProps) {
    return <Button style={props.style} size={props.variant?.size ? props.variant?.size : 'normal'} color={props.variant?.color ? props.variant?.color : 'primary'} to={props.url}>{props.label}</Button>
}

export default ButtonComponent