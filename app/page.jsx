'use client';
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {faPlay} from "@fortawesome/free-solid-svg-icons";
import {Button, Typography} from "@material-tailwind/react";
import Image from "next/image";

import Banner from "@/components/banner";
import Main from "@/components/mainsection";
import Section from "@/components/section";
import Sectionbreak from "@/components/sectionbreak";
import {AnimateGroup, fadeInUp} from "@/components/animate";

import HomeBanner from "@/public/assets/images/HomeBanner.jpg";
import Iconic from "@/public/assets/images/tours/iconic.png";
import Background from "@/public/assets/images/Background.png";
import London from "@/public/assets/images/London.jpg"
import Name from "@/public/assets/images/logo/name.png"

import Gallery1 from "@/public/assets/images/Gallery/1.jpg"
import Gallery2 from "@/public/assets/images/Gallery/2.jpg"
import Gallery3 from "@/public/assets/images/Gallery/3.jpg"
import Gallery4 from "@/public/assets/images/Gallery/4.jpg"
import Gallery5 from "@/public/assets/images/Gallery/5.jpg"
import Gallery6 from "@/public/assets/images/Gallery/6.png"
import Gallery7 from "@/public/assets/images/Gallery/7.png"
import Gallery8 from "@/public/assets/images/Gallery/8.png"


const Home = () => {

    const tours = [
        {
            image: Iconic,
            word: "Iconic",
        },
    ]

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
                            Welcome Falcons, this is where we turn ordinary London sightseeing into extraordinary
                            electric bike adventures. Our exclusive Super 73 bikes offer not just a ride, but an
                            eco-friendly journey through the heart of one of the world&lsquo;s most famous cities. From
                            historic sites and secret spots to romantic escapes, discover London&lsquo;s charm uniquely
                            and exhilaration. Ready to pedal into your next big adventure?
                        </Typography>
                    </div>
                </div>
            </Banner>

            <Main classname={"relative top-0 "}>
                <Image
                    src={Background}
                    alt="banner"
                    width={1920}
                    height={1080}
                    priority={true}
                    className={`absolute inset-0 -z-10 h-full w-full object-cover object-top opacity-[.3] `}
                />
                <Sectionbreak/>
                <Section classname={"lg:!gap-[2rem]"}>
                    <div className={"flex gap-8 items-center"}>
                        <div className={"flex flex-col gap-8"}>
                            <div className="flex flex-col items-start justify-center w-full h-full">
                                <div
                                    className="flex flex-col items-start justify-start lg:h-full lg:leading-[0.8]">
                                    <Typography variant={'h1'}
                                                className={`small text-secondary text-[1.5rem] lg:text-[5rem] font-extrabold font-montserrat transition-all duration-500 `}>The</Typography>
                                    <Typography variant={'h1'}
                                                className={`large text-secondary text-[2.5rem] lg:text-[10rem] font-extrabold font-montserrat text-start uppercase transition-all duration-500 `}>Iconic</Typography>
                                </div>
                                <div
                                    className="flex flex-row items-center lg:items-end justify-start gap-1 lg:gap-0 lg:h-full lg:leading-[1]">
                                    <Typography variant={'h1'}
                                                className={`large text-secondary text-[2.5rem] lg:text-[10rem] font-extrabold font-montserrat text-start uppercase transition-all duration-500 `}>London</Typography>
                                    <Typography variant={'h1'}
                                                className={`small text-secondary text-[1.5rem] lg:text-[5rem] font-extrabold font-montserrat transition-all duration-500 `}>Tour</Typography>
                                </div>
                            </div>
                            <div className="flex flex-col gap-[3rem]">
                                <Typography variant={'paragraph'}
                                            className={`text-secondary text-justify text-[1rem] lg:text-[1.3rem] font-normal font-montserrat leading-0`}>
                                    Cover the ground with ease and style as you explore 9 of London&lsquo;s most famous
                                    landmarks, including the Tower of London, Westminster Abbey, and more. Perfect for
                                    first-timers and history buffs alike, this 2-hour tour packs in sights, sounds, and
                                    stories
                                    to make your visit unforgettable.
                                </Typography>
                            </div>
                            <div className={"flex gap-[5rem]"}>
                                <Typography
                                    as="a"
                                    href={"/tour-packages"}
                                    variant="small"
                                    className={`p-0`}
                                    data-ripple-light={false}
                                    data-ripple-dark={false}
                                >
                                    <Button
                                        className={"flex justify-between items-center gap-[2rem] bg-secondary shadow-none hover:shadow-none font-montserrat font-semibold capitalize text-[1.125rem] py-[1rem] px-[1.5rem] w-fit rounded-[29px]"}>
                                        See More
                                        <FontAwesomeIcon icon={faPlay} width={"1.125rem"}
                                                         className={"text-[1.125rem]"}/>
                                    </Button>
                                </Typography>
                                <div className={"flex gap-[2rem]"}>
                                    <div className={"bg-darkcream rounded-full w-[60px] h-[60px]"}/>
                                    <div className={"bg-darkcream rounded-full w-[60px] h-[60px]"}/>
                                    <div className={"bg-darkcream rounded-full w-[60px] h-[60px]"}/>
                                    <div className={"bg-darkcream rounded-full w-[60px] h-[60px]"}/>
                                </div>
                            </div>
                        </div>
                        <div
                            className={`flex w-[45vh] h-[45vh] lg:w-[50vh] lg:h-full justify-center items-center`}>
                            <div
                                className={`cont relative top-0 flex items-center w-[40vh] h-[40vh] lg:w-[45vh] lg:h-[45vh] hover:lg:w-[50vh] hover:lg:h-[50vh] transition-all duration-500 rounded-full overflow-hidden cursor-pointer`}>
                                <Image
                                    src={tours[0].image}
                                    alt={tours[0].word}
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
                                                                    className={`small text-white text-[1.5rem] lg:text-[2rem] font-extrabold font-montserrat transition-all duration-500 `}>Travel</Typography>
                                                        <Typography variant={'h1'}
                                                                    className={`large text-white text-[2.5rem] lg:text-[4rem] font-extrabold font-montserrat text-start uppercase transition-all duration-500`}>London</Typography>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>
                <Sectionbreak/>
                <Section classname={"relative h-[70vh]"}>
                    <Image
                        src={London}
                        alt="banner"
                        width={1920}
                        height={1080}
                        priority={true}
                        className={`absolute inset-0 -z-5 h-full w-full object-cover object-center filter brightness-50`}
                    />
                    <div className={"flex flex-col justify-center items-center h-full gap-4"}>
                        <AnimateGroup type={fadeInUp}>
                            <Image
                                src={Name}
                                alt="banner"
                                width={"100%"}
                                height={"100%"}
                                priority={true}
                                className={"relative inset-0 z-0 w-[50%]"}
                            />
                            <Typography
                                as="a"
                                href={"#"}
                                variant="small"
                                className={`p-0 relative z-0`}
                                data-ripple-light={false}
                                data-ripple-dark={false}
                            >
                                <Button
                                    className={"flex justify-between items-center gap-[2rem] bg-darkcream text-primary hover:bg-secondary hover:text-white shadow-none hover:shadow-none font-montserrat font-semibold capitalize text-[1.125rem] py-[1rem] px-[1.5rem] w-fit !rounded-none"}>
                                    Book Your Tour Now
                                </Button>
                            </Typography>
                        </AnimateGroup>
                    </div>
                </Section>
                <Sectionbreak/>
                <Section>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="grid gap-4">
                            <AnimateGroup type={fadeInUp}>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <Image
                                            src={Gallery1}
                                            alt='logo'
                                            className='h-auto max-w-full rounded-lg'
                                            priority={true}
                                        />
                                    </div>
                                    <div>
                                        <Image
                                            src={Gallery2}
                                            alt='logo'
                                            className='h-auto max-w-full rounded-lg'
                                            priority={true}
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <Image
                                            src={Gallery3}
                                            alt='logo'
                                            className='h-auto max-w-full rounded-lg'
                                            priority={true}
                                        />
                                    </div>
                                    <div>
                                        <Image
                                            src={Gallery4}
                                            alt='logo'
                                            className='h-auto max-w-full rounded-lg'
                                            priority={true}
                                        />
                                    </div>
                                </div>
                            </AnimateGroup>
                        </div>
                        <div className="grid gap-4">
                            <AnimateGroup type={fadeInUp}>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <Image
                                            src={Gallery5}
                                            alt='logo'
                                            className='h-auto max-w-full rounded-lg'
                                            priority={true}
                                        />
                                    </div>
                                    <div>
                                        <Image
                                            src={Gallery6}
                                            alt='logo'
                                            className='h-auto max-w-full rounded-lg'
                                            priority={true}
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <Image
                                            src={Gallery7}
                                            alt='logo'
                                            className='h-auto max-w-full rounded-lg'
                                            priority={true}
                                        />
                                    </div>
                                    <div>
                                        <Image
                                            src={Gallery8}
                                            alt='logo'
                                            className='h-auto max-w-full rounded-lg'
                                            priority={true}
                                        />
                                    </div>
                                </div>
                            </AnimateGroup>
                        </div>
                    </div>
                </Section>
                <Sectionbreak/>
            </Main>
        </>
)
}

export default Home;