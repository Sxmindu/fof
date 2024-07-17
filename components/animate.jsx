'use client'

import React, {useEffect, useState} from "react";
import {motion} from "framer-motion";

export const fadeInUp = {
    hide: {
        opacity: 0,
        y: 50,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
        },
    },
};

export const fadeInDown = {
    hide: {
        opacity: 0,
        y: -50,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
        },
    },
};

export const fadeInLeft = {
    hide: {
        opacity: 0,
        x: 50,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
        },
    },
};

export const fadeInRight = {
    hide: {
        opacity: 0,
        x: -50,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
        },
    },
};

export const Animate = (props) => {

    const {type, children} = props;

    return (
        <motion.div
            className={`w-full`}
            initial="hide"
            whileInView="show"
            exit="hide"
            variants={type}>
            {children}
        </motion.div>
    )
}

export const AnimateGroup = (props) => {

    let {type, itemDelay, children} = props;

    if (itemDelay === undefined) {
        itemDelay = true;
    }
    let delay = -1;
    let animation = type;
    const [mobile, setMobile] = useState(false);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 ? setMobile(false) : setMobile(true),
        );
    }, []);

    return (
        <>
            {
                children.map((child, index) => {

                    if (mobile || itemDelay) {
                        animation = {
                            ...type,
                            show: {
                                ...type.show,
                                transition: {
                                    ...type.show.transition,
                                }
                            }
                        }
                    } else {
                        animation = {
                            ...type,
                            show: {
                                ...type.show,
                                transition: {
                                    ...type.show.transition,
                                    delay: delay += 0.5
                                }
                            }
                        }
                    }

                    return (
                        <motion.div
                            key={index}
                            className={`flex justify-center items-center w-full`}
                            initial="hide"
                            whileInView="show"
                            exit="hide"
                            variants={animation}>
                            {child}
                        </motion.div>
                    )
                })
            }
        </>

    )
}