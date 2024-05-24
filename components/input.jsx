import {Input} from "@material-tailwind/react";

const input = (props) => {

    let {label, placeholder, required, error, ...rest} = props;

    if (required === undefined) {
        required = false;
    }

    let color = 'primary'

    if (error.State) {
        color='error'
        label = `${error.Message}`
    }

    return (
        <Input variant="static" label={label} placeholder={placeholder} className={`${color} !font-montserrat !text-primary !placeholder-shown:border-primary-200 !border-primary !focus:border-secondary`} required={required}  {...rest} />
    )

}

export default input;