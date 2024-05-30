'use client';

import {Typography} from "@material-tailwind/react";
import Image from "next/image";

import Banner from "@/components/banner";
import Main from "@/components/mainsection";
import Section from "@/components/section";

import HomeBanner from "@/public/assets/images/HomeBanner.jpg";
import Iconic from "@/public/assets/images/tours/iconic.png";
import Secrete from "@/public/assets/images/tours/secrete.png";
import Romantic from "@/public/assets/images/tours/romantic.png";

const Home = () => {

    const tours = [
        {
            image: Iconic,
            word: "Iconic",
        },
        {
            image: Secrete,
            word: "Secrete",
        },
        {
            image: Romantic,
            word: "Romantic",
        }
    ]

    const Tour = ({tour, classname}) => {
        return (
            <div className={`flex w-[50vh] h-[50vh] ${classname}`} >
                <div
                    className={`cont relative top-0 flex items-center w-[45vh] h-[45vh] hover:w-[50vh] hover:h-[50vh] transition-all duration-500 rounded-full overflow-hidden cursor-pointer`}>
                    <Image
                        src={tour.image}
                        alt={tour.word}
                        width={"100%"}
                        height={"100%"}
                        className={"absolute -z-10 object-cover overflow-hidden filter brightness-75 opacity-[.8] w-full h-full"}
                        priority={true}
                        loading={"eager"}
                    />
                    <div
                        className={`flex justify-center overflow-x-clip w-full h-full`}>
                        <div className="mx-auto max-w-2xl lg:max-w-full lg:mx-0">
                            <div
                                className={`flex justify-center items-start flex-col gap-[1rem] w-full h-full`}>
                                <div
                                    className="flex flex-col lg:gap-[5rem] justify-center items-center w-full h-full">
                                    <div
                                        className="flex flex-col items-start mt-[2rem] lg:mt-0 h-full lg:h-auto">
                                        <div
                                            className="flex flex-col items-start justify-center h-full leading-[0.8]">
                                            <Typography variant={'h1'}
                                                        className={`small text-white text-[2rem] font-extrabold font-montserrat transition-all duration-500 `}>The</Typography>
                                            <Typography variant={'h1'}
                                                        className={`large text-white text-[4rem] font-extrabold font-montserrat text-start uppercase transition-all duration-500 `}>{tour.word}</Typography>

                                        </div>
                                        <div
                                            className="flex flex-row items-end justify-center h-full leading-[0.8]">
                                            <Typography variant={'h1'}
                                                        className={`large text-white text-[4rem] font-extrabold font-montserrat text-start uppercase transition-all duration-500 `}>London</Typography>
                                            <Typography variant={'h1'}
                                                        className={`small text-white text-[2rem] font-extrabold font-montserrat transition-all duration-500 `}>Tour</Typography>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

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
                <Section>
                    <div className="grid grid-rows-4 grid-col-4 gap-4 items-start">
                        <div className="row-start-1 row-end-3 col-start-1 col-end-3">
                            <div className={"flex justify-end items-end w-full h-full"}>
                                <Tour tour={tours[0]} classname={"justify-end items-end"}/>
                            </div>
                        </div>
                        <div className="row-start-1 row-end-3 col-start-3 col-end-5">
                            <div className={"flex justify-center items-center w-full h-full"}>
                                <Tour tour={tours[1]} classname={"justify-center items-center"}/>
                            </div>
                        </div>
                        <div className="row-start-3 row-end-5 col-start-3 col-end-5">
                            <div className={"flex justify-start items-center w-full h-full"}>
                                <Tour tour={tours[2]} classname={"justify-start items-center"}/>
                            </div>
                        </div>
                        <div className="row-start-3 row-end-5 col-start-1 col-end-3 row-span-2 content-center">
                            <div className={"flex justify-start items-center w-full h-full"}>
                                <div
                                    className="flex flex-col items-start justify-end h-full leading-[0.8]">
                                    <Typography variant={'h1'}
                                                className={`text-black text-[2.5rem] xl:text-[5rem] font-extrabold font-montserrat`}>Travel</Typography>
                                    <Typography variant={'h1'}
                                                className={`text-black text-[2.5rem] xl:text-[10rem] font-extrabold font-montserrat text-start uppercase`}>London</Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>
            </Main>
        </>
    )
}

export default Home;
