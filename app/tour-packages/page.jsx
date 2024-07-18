'use client';

import Image from "next/image";
import {Button, Typography} from "@material-tailwind/react";
import {faCheck, faPlay} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import Banner from "@/components/banner";
import Main from "@/components/mainsection";
import Sectionbreak from "@/components/sectionbreak";
import Section from "@/components/section";

import PageBanner from "@/public/assets/images/HomeBanner.jpg";
import Iconic from "@/public/assets/images/tours/iconic.png";
import IconicMap from "@/public/assets/images/tours/iconicMapBlack.png";
import Background from "@/public/assets/images/Background.png";

import {tours} from "@/constants";

const Tour = () => {

    const tourDetails = [
        {
            image: Iconic,
            word: "Iconic",
        },
    ]

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
                            Packages.</Typography>
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
                                    Discover the essence of London with our Iconic London Tour! Experience the
                                    city&lsquo;s
                                    top 9 landmarks all in one unforgettable adventure. Snap stunning photos,
                                    immerse yourself in the captivating history shared by our expert guide,and
                                    enjoy the ease of exploring on electric bikes. This tour is the perfect way
                                    for first-time visitors to see the best of London in style and comfort. Join
                                    us for an exhilarating journey through the heart of this vibrant city!
                                </Typography>
                            </div>
                        </div>
                        <div
                            className={`flex w-[45vh] h-[45vh] lg:w-[50vh] lg:h-full justify-center items-center`}>
                            <div
                                className={`cont relative top-0 flex items-center w-[40vh] h-[40vh] lg:w-[45vh] lg:h-[45vh] hover:lg:w-[50vh] hover:lg:h-[50vh] transition-all duration-500 rounded-full overflow-hidden cursor-pointer`}>
                                <Image
                                    src={tourDetails[0].image}
                                    alt={tourDetails[0].word}
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
                    <div className={"flex gap-8 items-center"}>
                        <div className={"lg:flex justify-center items-center hidden"}>
                            <Image
                                src={IconicMap}
                                alt="banner"
                                width={"100%"}
                                height={"100%"}
                                priority={true}
                                loading={"eager"}
                                className={`object-contain object-center max-w-none`}
                            />
                        </div>
                        <div
                            className={`flex flex-col justify-between items-center lg:items-start gap-[2rem] w-full h-full p-8 pt-4 lg:p-16`}>
                            <div
                                className="flex flex-col items-center lg:items-end h-full lg:h-auto w-full">
                                <Typography variant={'paragraph'}
                                            className={`text-secondary text-center lg:text-end text-[1rem] font-light font-montserrat lg:leading-[3rem] italic`}>
                                    &ldquo; {tours.iconic.testimonial.testimony} &rdquo; - {tours.iconic.testimonial.customer}
                                </Typography>
                            </div>
                            <div
                                className="flex flex-col items-center lg:items-start gap-2 lg:gap-4 h-full lg:h-auto">
                                {
                                    tours.iconic.benefits.map((benefit, key) => (
                                            <div className={"flex gap-2 lg:gap-4 items-center"} key={key}>
                                                <div
                                                    className={"relative p-[0.4rem] lg:p-[0.8rem] w-2 h-2 lg:w-4 lg:h-4 rounded-[5px] lg:rounded-[10px] border border-secondary border-r-0"}>
                                                    <FontAwesomeIcon icon={faCheck} width={"1rem"}
                                                                     className={"absolute -top-[3px] lg:-top-[6px] -right-[5px] lg:-right-[10px] w-4 lg:w-8 max-w-4 lg:max-w-8 text-secondary text-[1rem] lg:text-[2rem]"}/>
                                                </div>
                                                <Typography variant={'paragraph'}
                                                            className={`text-secondary text-start text-[1rem] lg:text-[1.5rem] font-light font-montserrat leading-[3rem] italic`}>
                                                    <span className={"font-bold"}>{benefit.title}</span>
                                                </Typography>
                                            </div>
                                        )
                                    )
                                }
                            </div>
                            <div
                                className="flex flex-col items-center lg:items-start gap-[1rem] h-full lg:h-auto w-full">
                                <Typography variant={'paragraph'}
                                            className={`text-secondary text-[1.5rem] lg:text-[2rem] font-bold font-montserrat leading-[3rem] italic`}>
                                    Duration : {tours.iconic.duration}
                                </Typography>
                            </div>
                        </div>
                    </div>
                    <div className={"flex gap-[5rem]"}>
                        <Typography
                            as="a"
                            href={"/booking"}
                            variant="small"
                            className={`p-0`}
                            data-ripple-light={false}
                            data-ripple-dark={false}
                        >
                            <Button
                                className={"flex justify-between items-center gap-[2rem] bg-secondary shadow-none hover:shadow-none font-montserrat font-semibold capitalize text-[1.125rem] py-[1rem] px-[1.5rem] w-fit rounded-[29px]"}>
                                Book Now
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
                </Section>
                <Sectionbreak/>
            </Main>
        </>
    )
}

export default Tour;