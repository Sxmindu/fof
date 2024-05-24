'use client';

import {Typography} from "@material-tailwind/react";
import Image from "next/image";

import Banner from "@/components/banner";
import Main from "@/components/mainsection";
import Section from "@/components/section";

import HomeBanner from "@/public/assets/images/HomeBanner.jpg";
import London from "@/public/assets/images/London.jpg";
import Secrete from "@/public/assets/images/Secrete.jpeg";
import Romantic from "@/public/assets/images/Romantic.jpg";

const Home = () => {

    const tours = [
        {
            image: London,
            word: "Iconic",
            align: "right",
        },
        {
            image: Secrete,
            word: "Secrete",
            align: "left",
        },
        {
            image: Romantic,
            word: "Romantic",
            align: "right",
        }
    ]
    return (
        <>
            <Banner
                image={HomeBanner}
                height={"h-[100%] lg:h-[100vh]"}
                filter={true}
            >
                <div
                    className="flex flex-col lg:gap-[5rem] justify-center  items-end w-full
                    h-full">
                    <div className="flex flex-col gap-[2rem] mt-[2rem] lg:mt-0 h-full lg:h-auto">
                        <Typography variant={'h1'}
                                    className={`text-white text-[2.5rem] xl:text-[8.75rem] font-extrabold font-montserrat text-start leading-[8.75rem]`}>Ride.</Typography>
                        <Typography variant={'h1'}
                                    className={`text-cream text-[2.5rem] xl:text-[8.75rem] font-extrabold font-montserrat text-start leading-[8.75rem]`}>Discover.</Typography>
                        <Typography variant={'h1'}
                                    className={`text-white text-[2.5rem] xl:text-[8.75rem] font-extrabold font-montserrat text-start leading-[8.75rem]`}>Capture.</Typography>
                    </div>
                    <div className="flex flex-col gap-[2rem] mt-[2rem] lg:mt-0 h-full lg:h-auto">
                        <Typography variant={'paragraph'}
                                    className={`text-white text-center text-[1.5rem] font-montserrat leading-[3rem] italic`}>
                            Embark on an unforgettable journey through London’s iconic landmarks and secret
                            spots on our stylish
                            electric bikes. Let us capture your adventure with stunning professional
                            photography.
                        </Typography>
                    </div>
                </div>
            </Banner>

            <Main>
                <Section classname={"!px-0 h-auto"}>
                    {
                        tours.map((tour, key) => (
                                <div className={`flex ${tour.align === "right" ? "justify-end" : "justify-start"}`} key={key}>
                                    <div
                                        className={`relative top-0 flex items-center w-[90%] h-[45vh] ${tour.align === "right" ? "rounded-l-[20rem]" : "rounded-r-[20rem]"} overflow-hidden`}>
                                        <Image
                                            src={tour.image}
                                            alt={tour.word}
                                            width={"100%"}
                                            height={"100%"}
                                            className={"absolute -z-10 object-cover object-top overflow-hidden filter brightness-75 opacity-[.8] "}
                                        />
                                        <div
                                            className={`flex ${tour.align === "right" ? "justify-start" : "justify-end"} px-[1rem] lg:px-[15rem] overflow-x-clip w-full h-full`}>
                                            <div className="mx-auto max-w-2xl lg:max-w-full lg:mx-0">
                                                <div
                                                    className={`flex justify-center items-start flex-col gap-[1rem] w-full h-full`}>
                                                    <div
                                                        className="flex flex-col lg:gap-[5rem] justify-center  items-end w-full h-full">
                                                        <div
                                                            className="flex flex-col items-start mt-[2rem] lg:mt-0 h-full lg:h-auto">
                                                            <div
                                                                className="flex flex-col items-start justify-center h-full leading-[0.8]">
                                                                <Typography variant={'h1'}
                                                                            className={`text-white text-[2.5rem] xl:text-[4rem] font-extrabold font-montserrat`}>The</Typography>
                                                                <Typography variant={'h1'}
                                                                            className={`text-white text-[2.5rem] xl:text-[10rem] font-extrabold font-montserrat text-start uppercase`}>{tour.word}</Typography>

                                                            </div>
                                                            <div
                                                                className="flex flex-row items-end justify-center h-full leading-[0.8]">
                                                                <Typography variant={'h1'}
                                                                            className={`text-white text-[2.5rem] xl:text-[10rem] font-extrabold font-montserrat text-start uppercase`}>London</Typography>
                                                                <Typography variant={'h1'}
                                                                            className={`text-white text-[2.5rem] xl:text-[4rem] font-extrabold font-montserrat leading-[1.1]`}>Tour</Typography>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        )
                    }
                </Section>
            </Main>
        </>
    )
}

export default Home;
