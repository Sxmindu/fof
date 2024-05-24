import React from "react";

const bullet = (props) => {

    const {children} = props;

    return (
        <div className={"flex items-center"}>
            <div className={"mr-4"}>
                <div className={"w-[0.5rem] h-[0.5rem] bg-gray rounded-full"}/>
            </div>
            {children}
        </div>
    )
}

export default bullet;