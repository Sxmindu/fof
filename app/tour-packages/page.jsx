'use client';

import {useState} from "react";
import {Button, Dialog, DialogBody, Typography} from "@material-tailwind/react";
import Image from "next/image";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import Banner from "@/components/banner";
import Main from "@/components/mainsection";
import Sectionbreak from "@/components/sectionbreak";
import Section from "@/components/section";

import PageBanner from "@/public/assets/images/HomeBanner.jpg";
import Iconic from "@/public/assets/images/tours/iconic.png";
import Secret from "@/public/assets/images/tours/secrete.png";
import Romantic from "@/public/assets/images/tours/romantic.png";
import {tours} from "@/constants";

const Tour = () => {

    const structure = {
        title: "",
        image: "",
        description: "",
        map: "",
        testimonial: {
            testimony: "",
            customer: ""
        },
        included: [],
        benefits: [],
        duration: "",
        charge: "",
        booking: ""
    }

    const [data, setData] = useState(structure);
    const [open, setOpen] = useState(false);
    const handleOpen = (data) => {
        console.log(data)
        setOpen((cur) => !cur);
        setData(data);
    }

    const tourDetails = [
        {
            image: Iconic,
            word: "Iconic",
        },
        {
            image: Secret,
            word: "Secret",
        },
        {
            image: Romantic,
            word: "Romantic",
        }
    ]

    const Tour = ({tour, classname, data}) => {
        return (
            <div className={`flex w-[45vh] h-[45vh] lg:w-[50vh] lg:h-[50vh] ${classname}`}
                 onClick={() => handleOpen(data)}>
                < div
                    className={`cont relative top-0 flex items-center w-[40vh] h-[40vh] lg:w-[45vh] lg:h-[45vh] hover:lg:w-[50vh] hover:lg:h-[50vh] transition-all duration-500 rounded-full overflow-hidden cursor-pointer`}>
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
                                                        className={`small text-white text-[1.5rem] lg:text-[2rem] font-extrabold font-montserrat transition-all duration-500 `}>The</Typography>
                                            <Typography variant={'h1'}
                                                        className={`large text-white text-[2.5rem] lg:text-[4rem] font-extrabold font-montserrat text-start uppercase transition-all duration-500 `}>{tour.word}</Typography>

                                        </div>
                                        <div
                                            className="flex flex-row items-center lg:items-end justify-center gap-1 lg:gap-0 lg:h-full lg:leading-[0.8]">
                                            <Typography variant={'h1'}
                                                        className={`large text-white text-[2.5rem] lg:text-[4rem] font-extrabold font-montserrat text-start uppercase transition-all duration-500 `}>London</Typography>
                                            <Typography variant={'h1'}
                                                        className={`small text-white text-[1.5rem] lg:text-[2rem] font-extrabold font-montserrat transition-all duration-500 `}>Tour</Typography>
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
            <Dialog
                size="xl"
                open={open}
                handler={() => handleOpen(structure)}
                className={"m-0"}
            >
                <DialogBody className={"p-0 h-[100vh] lg:h-auto overflow-scroll lg:overflow-auto"}>
                    <div className={`relative top-0 w-full isolate overflow-hidden bg-primary h-[100vh]`}>
                        <div className={`absolute inset-0 -z-[8] bg-black  opacity-[.78]`}/>
                        <Image
                            src={data.image}
                            alt="banner"
                            width={1914}
                            height={1276}
                            priority={true}
                            loading={"eager"}
                            className={`absolute inset-0 -z-10 h-full w-full object-cover object-center`}
                        />
                        <div
                            className={`flex overflow-x-clip overflow-y-scroll lg:overflow-auto w-full h-[100vh]`}>
                            <div className="flex flex-col lg:flex-row w-full h-full">
                                <div
                                    className={`relative flex flex-col justify-between items-center lg:items-start gap-[1rem] w-full h-full p-8 pb-4 lg:p-16`}>
                                    <div
                                        className="flex flex-col items-start mt-[2rem] lg:mt-0 h-full lg:h-auto">
                                        <div
                                            className="flex flex-col items-start justify-center h-full leading-[0.8]">
                                            <Typography variant={'h1'}
                                                        className={`text-white text-[2.5rem] lg:text-[3rem] font-extrabold font-montserrat`}>The</Typography>
                                            <Typography variant={'h1'}
                                                        className={`text-white text-[3.5rem] lg:text-[8rem] font-extrabold font-montserrat text-start uppercase`}>{data.title}</Typography>

                                        </div>
                                        <div
                                            className="flex flex-col lg:flex-row items-end justify-center h-full leading-[0.8]">
                                            <Typography variant={'h1'}
                                                        className={`text-white text-[3.5rem] lg:text-[8rem] font-extrabold font-montserrat text-start uppercase`}>London</Typography>
                                            <Typography variant={'h1'}
                                                        className={`text-white text-[2.5rem] lg:text-[3rem] font-extrabold font-montserrat leading-[1.1]`}>Tour</Typography>
                                        </div>
                                    </div>
                                    <div className="flex flex-row flex-wrap lg:flex-nowrap gap-4 lg:gap-8 lg:mt-0 h-full lg:h-auto">
                                        {
                                            data.included.map((include, key) => (
                                                    <div className={`rounded-full bg-darkcream`} key={key}>
                                                        <Typography variant={'paragraph'}
                                                                    className={`px-4 py-1 text-primary text-start text-[0.8rem] font-bold font-montserrat italic`}>
                                                            {include}
                                                        </Typography>
                                                    </div>
                                                )
                                            )
                                        }
                                        {/*<Typography variant={'paragraph'}*/}
                                        {/*            className={`text-white text-center text-[1.5rem] font-montserrat leading-[3rem] italic`}>*/}
                                        {/*    {data.description}*/}
                                        {/*</Typography>*/}
                                    </div>
                                    <div className={"lg:flex justify-center items-center hidden"}>
                                        <Image
                                            src={data.map}
                                            alt="banner"
                                            width={809}
                                            height={544}
                                            priority={true}
                                            loading={"eager"}
                                            className={`h-full w-full object-contain object-center max-h-[90%] min-w-full`}
                                        />
                                    </div>
                                    <div className={"flex justify-center items-center lg:hidden"}>
                                        <Image
                                            src={data.map}
                                            alt="banner"
                                            width={1027}
                                            height={552}
                                            priority={true}
                                            className={`h-full w-full object-contain object-center max-h-[100%] min-w-full`}
                                        />
                                    </div>
                                </div>
                                <div
                                    className={`flex flex-col justify-between items-center lg:items-start gap-[2rem] w-full h-full p-8 pt-4 lg:p-16`}>
                                    <div
                                        className="flex flex-col items-center lg:items-end h-full lg:h-auto w-full">
                                        <Typography variant={'paragraph'}
                                                    className={`text-white text-center lg:text-end text-[1rem] font-light font-montserrat lg:leading-[3rem] italic`}>
                                            &ldquo; {data.testimonial.testimony} &rdquo; - {data.testimonial.customer}
                                        </Typography>
                                    </div>
                                    <div
                                        className="flex flex-col items-center lg:items-start gap-[1rem] h-full lg:h-auto">
                                        {
                                            data.benefits.map((benefit, key) => (
                                                    <div className={"flex gap-4 items-center"} key={key}>
                                                        <div
                                                            className={"relative p-[0.8rem] w-4 h-4 rounded-[10px] border border-darkcream border-r-0"}>
                                                            <FontAwesomeIcon icon={faCheck} width={"1rem"}
                                                                             className={"absolute -top-[6px] -right-[10px] w-[2rem] max-w-[2rem] text-darkcream text-[2rem]"}/>
                                                        </div>
                                                        <Typography variant={'paragraph'}
                                                                    className={`text-white text-start text-[1.5rem] font-light font-montserrat leading-[3rem] italic`}>
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
                                                    className={`text-white text-[2rem] font-bold font-montserrat leading-[3rem] italic`}>
                                            Duration : {data.duration}
                                        </Typography>
                                    </div>
                                    <div
                                        className="flex flex-col items-center lg:items-start h-full lg:h-auto w-full">
                                        <Button
                                            onClick={() => handleOpen(structure)}
                                            className={`flex justify-between items-center bg-darkcream text-primary shadow-none hover:shadow-none font-montserrat font-semibold capitalize text-[1.5rem] py-[0.5rem] px-[1rem] w-fit rounded-[29px]`}>
                                            Book Now
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </DialogBody>
            </Dialog>
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
            <Main>
                <Sectionbreak/>
                <Section>
                    <div className="flex flex-col lg:flex-row justify-between items-center">
                        <Tour tour={tourDetails[0]} classname={"justify-center items-center"}
                              data={tours.iconic}/>
                        <Tour tour={tourDetails[1]} classname={"justify-center items-center"}
                              data={tours.secrete}/>
                        <Tour tour={tourDetails[2]} classname={"justify-center items-center"}
                              data={tours.romantic}/>
                    </div>
                </Section>
                <Sectionbreak/>
            </Main>
        </>
    )
}

export default Tour;
