'use client';
import React from "react";
import {Typography} from "@material-tailwind/react";

import Banner from "@/components/banner";
import Main from "@/components/mainsection";
import Section from "@/components/section";
import Sectionbreak from "@/components/sectionbreak";
import Calendar from "@/components/calendar";

import PageBanner from "@/public/assets/images/HomeBanner.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";

const Booking = () => {

    return (
        <>
            <Banner
                image={PageBanner}
                height={"h-[30vh] lg:h-[40vh]"}
                filter={true}
            >
                <div
                    className="flex flex-col lg:gap-[5rem] justify-center items-center lg:items-start w-full
                    h-full">
                    <div className="flex flex-col gap-[2rem] justify-center items-center  lg:mt-0 h-full lg:h-auto">
                        <Typography variant={'h1'}
                                    className={`text-white text-[3.5rem] lg:text-[8.75rem] font-extrabold font-montserrat text-center lg:text-start lg:leading-[8.75rem]`}>Tour
                            Booking.</Typography>
                    </div>
                </div>
            </Banner>
            <Main>
                <Sectionbreak/>
                <Section>
                    <div className={"flex flex-row border border-lightGray rounded-3xl items-center relative"}>
                        <Calendar/>
                        <div>
                            <div className={"w-[1px] absolute top-16 bottom-16 bg-lightGray"}/>
                        </div>
                        <div className={"flex flex-col items-center justify-center py-8 px-4 w-[60%]"}>
                            <p className={`text-3xl text-lightGray font-light cursor-default`}>Pick a Date </p>
                        </div>
                    </div>
                </Section>
                <Sectionbreak/>
            </Main>
        </>
    )
}

export default Booking;
