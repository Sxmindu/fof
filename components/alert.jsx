'use client'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle, faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import {Alert} from "@material-tailwind/react";
import React from "react";

const alert = (props) => {

    const {State, Message, Type} = props;

    let icon, className;

    if (Type === "Success") {
        className = "alert-success";
        icon = faCheckCircle;
    } else if (Type === "Error") {
        className = "alert-failure";
        icon = faTimesCircle;
    }

    return (
        <Alert
            open={State}
            className={`alert ${className} justify-center`}
            animate={{
                mount: { x: 0 },
                unmount: { x: 100 },
            }}
        >
            <FontAwesomeIcon icon={icon} className="mr-[1rem]"/>
            {Message}
        </Alert>
    )
}

export default alert