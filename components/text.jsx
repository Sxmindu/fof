import {Typography} from "@material-tailwind/react";


const text = (props) => {

    let {variant, color, weight, size, styles, children} = props;

    if (variant === "h1") {
        if (weight === undefined) {
            weight = "extrabold"
        }

        if (size === undefined) {
            size = "4.25"
        }
    }

    if (variant === "h2") {
        if (weight === undefined) {
            weight = "extrabold"
        }

        if (size === undefined) {
            size = "3.125"
        }
    }

    if (variant === "h3") {
        if (weight === undefined) {
            weight = "semibold"
        }

        if (size === undefined) {
            size = "1.5"
        }
    }

    if (color === undefined) {
        color = "secondary"
    }

    if (weight === undefined) {
        weight = "normal"
    }

    if (size === undefined) {
        size = "1.25"
    }

    // console.log(variant, color, weight, size)

    return (
        <Typography variant={variant} className={`text-${color} xl:text-[${size}rem] font-${weight} font-montserrat ${styles}`}>{children}</Typography>
    )
}

export default text;