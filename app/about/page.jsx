'use client';

import {Typography} from "@material-tailwind/react";

import Banner from "@/components/banner";
import Main from "@/components/mainsection";
import Section from "@/components/section";
import Sectionbreak from "@/components/sectionbreak";

import PageBanner from "@/public/assets/images/HomeBanner.jpg";
import WhyUs from "@/public/assets/images/WhyUs.png";
import Image from "next/image";

const About = () => {

    const aboutus = [
        {
            head: "Vision",
            description: "Our vision is to become the leading provider of experiential tours and photography services in London, renowned for our innovative approach and dedication to sustainability. We aspire to craft unique narratives for our clients, blending exploration with artistic expression, and setting new standards in the tourism and photography industry. By continuously enhancing our offerings and embracing sustainable practices, we aim to inspire a more connected and environmentally conscious approach to travel and memory-making.",
            align: "left"
        },
        {
            head: "Mission",
            description: "Our mission is to offer unique and memorable experiences by combining the thrill of eco-friendly bike tours with professional photography services. We strive to capture the essence of London’s iconic and hidden treasures through personalized tours and high-quality images. We aim to provide our clients with not only a journey through the city but also a gallery of moments that highlight their adventures. Our commitment to excellence in service, sustainability, and local expertise ensures each guest leaves with a deeper appreciation for the city and lasting memories.",
            align: "right"
        }
    ]

    return (
        <>
            <Banner
                image={PageBanner}
                height={"h-[100%] lg:h-[40vh]"}
                filter={true}
            >
                <div
                    className="flex flex-col lg:gap-[5rem] justify-center items-start w-full
                    h-full">
                    <div className="flex flex-col gap-[2rem] mt-[2rem] lg:mt-0 h-full lg:h-auto">
                        <Typography variant={'h1'}
                                    className={`text-white text-[2.5rem] xl:text-[8.75rem] font-extrabold font-montserrat text-start leading-[8.75rem]`}>About
                            Us.</Typography>
                    </div>
                </div>
            </Banner>
            <Main>
                <Sectionbreak/>
                <Section>
                    <div className="flex flex-col gap-[3rem]">
                        {
                            aboutus.map(
                                (item, key) => (
                                    <div className={"flex flex-col gap-[3rem]"} key={key}>
                                        <div className={`relative flex flex-col gap-[3rem] ${item.align === "right" ? "items-end" : ""}`}>
                                            <div className="border-t border-secondary w-full"/>
                                            <div className={`absolute -top-[2.5rem] ${item.align === "right" ? "right-[6rem]" : "left-[6rem]"} bg-white px-[1rem]`}>
                                                <Typography variant={'h1'}
                                                            className={`text-secondary text-[2.5rem] xl:text-[3rem] font-extrabold font-montserrat text-start leading-0`}>
                                                    {item.head}
                                                </Typography>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-[3rem]">
                                            <Typography variant={'paragraph'}
                                                        className={`text-secondary text-justify text-[1.3rem] font-light font-montserrat leading-0`}>
                                                &ldquo; {item.description} &rdquo;
                                            </Typography>
                                        </div>
                                    </div>
                                )
                            )
                        }
                    </div>
                </Section>
                <Sectionbreak/>
                <Section classname={"!px-0 h-auto"}>
                    <Banner
                        image={WhyUs}
                        height={"h-[1958px]"}
                    >
                    </Banner>
                </Section>
            </Main>
        </>
    )
}

export default About;
