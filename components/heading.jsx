import {Typography} from "@material-tailwind/react";
import Text from "@/components/text";


const heading = (props) => {

    let {children} = props;

    return (
        <div className="flex items-center gap-5 w-full my-5">
            <Text variant="h2" color="primary" styles={"text-[2.5rem] text-start tracking-tight"}>{children}</Text>
        </div>
)
}

export default heading;