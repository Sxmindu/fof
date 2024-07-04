'use client'

import React from "react";

const mainsection = (props) => {

    const { classname, children } = props;

    return (
        <main className={`py-[1rem] overflow-x-clip ${classname}`}>
            {children}
        </main>
    )
}

export default mainsection;