'use client'

import React from "react";

const mainsection = (props) => {

    const { children } = props;

    return (
        <main className="py-[1rem] overflow-x-clip ">
            {children}
        </main>
    )
}

export default mainsection;