'use client'

import React from "react";

const mainsection = (props) => {

    const { className, children } = props;

    return (
        <main className={`py-[1rem] overflow-x-clip ${className}`}>
            {children}
        </main>
    )
}

export default mainsection;