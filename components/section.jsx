'use client'

import React from "react";

const Section = (props) => {

    const { id, classname, children } = props;

    return (
        <section className={`flex flex-col gap-[0.5rem] lg:gap-[1rem] px-[1rem] lg:px-[120px] ${classname === undefined ? "" : classname }`} id={`${id === undefined ? "" : id}`}>
            {children}
        </section>
    )
}

export default Section;