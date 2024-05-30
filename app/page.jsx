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
            <div className={`flex w-[45vh] h-[45vh] lg:w-[50vh] lg:h-[50vh] ${classname}`}>
                <div
                    className={`lg:cont relative top-0 flex items-center w-[40vh] h-[40vh] lg:w-[45vh] lg:h-[45vh] hover:lg:w-[50vh] hover:lg:h-[50vh] transition-all duration-500 rounded-full overflow-hidden cursor-pointer`}>
                    <Image
                        src={tour.image}
                        alt={tour.word}
                        width={"100%"}
                        height={"100%"}
                        className={"absolute -z-10 object-cover overflow-hidden filter brightness-50 lg:brightness-75 lg:opacity-[.8] w-full h-full"}
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
                                        className="flex flex-col items-start justify-center lg:mt-0 h-full lg:h-auto">
                                        <div
                                            className="flex flex-col items-start justify-center lg:h-full lg:leading-[0.8]">
                                            <Typography variant={'h1'}
                                                        className={`lg:small text-white text-[1.5rem] lg:text-[2rem] font-extrabold font-montserrat transition-all duration-500 `}>The</Typography>
                                            <Typography variant={'h1'}
                                                        className={`lg:large text-white text-[2.5rem] lg:text-[4rem] font-extrabold font-montserrat text-start uppercase transition-all duration-500 `}>{tour.word}</Typography>

                                        </div>
                                        <div
                                            className="flex flex-row items-center lg:items-end justify-center gap-1 lg:gap-0 lg:h-full lg:leading-[0.8]">
                                            <Typography variant={'h1'}
                                                        className={`lg:large text-white text-[2.5rem] lg:text-[4rem] font-extrabold font-montserrat text-start uppercase transition-all duration-500 `}>London</Typography>
                                            <Typography variant={'h1'}
                                                        className={`lg:small text-white text-[1.5rem] lg:text-[2rem] font-extrabold font-montserrat transition-all duration-500 `}>Tour</Typography>
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
                height={"h-[80vh] lg:h-[100vh]"}
                filter={true}
            >
                <div
                    className="flex flex-col lg:gap-[5rem] justify-center  items-end w-full
                    h-full">
                    <div className="flex flex-col gap-[1rem] lg:gap-[2rem] mt-[2rem] lg:mt-0 h-full lg:h-auto">
                        <Typography variant={'h1'}
                                    className={`text-white text-[2.5rem] xl:text-[8.75rem] font-extrabold font-montserrat text-start lg:leading-[8.75rem]`}>Ride.</Typography>
                        <Typography variant={'h1'}
                                    className={`text-cream text-[2.5rem] xl:text-[8.75rem] font-extrabold font-montserrat text-start lg:leading-[8.75rem]`}>Discover.</Typography>
                        <Typography variant={'h1'}
                                    className={`text-white text-[2.5rem] xl:text-[8.75rem] font-extrabold font-montserrat text-start lg:leading-[8.75rem]`}>Capture.</Typography>
                    </div>
                    <div className="flex flex-col gap-[2rem] mt-[2rem] lg:mt-0 h-full lg:h-auto">
                        <Typography variant={'paragraph'}
                                    className={`text-white text-center text-[1rem] lg:text-[1.5rem] font-montserrat lg:leading-[3rem] italic`}>
                            Welcome Falcons, this is where we turn ordinary London sightseeing into extraordinary electric bike adventures. Our exclusive Super 73 bikes offer not just a ride, but an eco-friendly journey through the heart of one of the world&lsquo;s most famous cities. From historic sites and secret spots to romantic escapes, discover London&lsquo;s charm uniquely and exhilaration. Ready to pedal into your next big adventure?
                        </Typography>
                    </div>
                </div>
            </Banner>

            <Main>
                <Section>
                    <div className="flex flex-col items-center justify-center w-full h-full lg:hidden">
                        <div
                            className="flex flex-col items-start justify-end h-full leading-[0.8] mt-[2rem] lg:mt-0">
                            <Typography variant={'h1'}
                                        className={`text-black text-[2.5rem] xl:text-[5rem] font-extrabold font-montserrat`}>Travel</Typography>
                            <Typography variant={'h1'}
                                        className={`text-black text-[3.5rem] xl:text-[10rem] font-extrabold font-montserrat text-start uppercase`}>London</Typography>
                        </div>
                        <Tour tour={tours[0]} classname={"justify-center items-center"}/>
                        <Tour tour={tours[1]} classname={"justify-center items-center"}/>
                        <Tour tour={tours[2]} classname={"justify-center items-center"}/>
                    </div>
                    <div className="lg:grid grid-rows-4 grid-col-4 gap-4 items-start hidden">
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
