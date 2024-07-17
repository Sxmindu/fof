'use client';

import {Card, CardBody, Typography} from "@material-tailwind/react";
import Image from "next/image";

import Banner from "@/components/banner";
import Main from "@/components/mainsection";
import Section from "@/components/section";
import Sectionbreak from "@/components/sectionbreak";
import Swiper from "@/components/swiper";

import PageBanner from "@/public/assets/images/HomeBanner.jpg";
import Super73 from "@/public/assets/images/Super73.jpg";
import Locations from "@/public/assets/images/Locations.jpg";
import Background from "@/public/assets/images/Background.png";

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

    const whyus = [
        {
            title: "Exclusive Super 73 Bikes",
            description: "Experience London like never before on our fleet of Super 73 electric bikes. These aren't just any bikes; they combine style, comfort, and performance to provide an unparalleled riding experience. Whether you're a biking enthusiast or a casual rider, the intuitive design and powerful electric assist of the Super 73 make exploring London's landscapes effortless and thrilling.",
            image: Super73
        },
        {
            title: "Extraordinary Locations",
            description: "Our tours are carefully crafted to include not just London's iconic landmarks but also its hidden treasures. From the bustling historical streets to serene paths lesser known to the typical tourist, we bring you an insider's view of the city. Discover secret gardens, charming old pubs, and breathtaking viewpoints that are off the typical tourist trail. ",
            image: Locations
        },
        {
            title: "Tailored Experiences",
            description: "Each tour is designed with a specific theme and audience in mind. Whether you're seeking the romance of London's enchanting alleys, the excitement of its historic cores, or the thrill of uncovering hidden cafes and local art, we have a tour for you. Our expert guides are passionate about making each tour a personal story, one that resonates with your interests and sense of adventure.",
            image: Super73
        },
        {
            title: "Sustainability Commitment",
            description: "We believe in responsible tourism. By choosing electric bikes, we reduce noise pollution and eliminate emissions, helping to preserve London's natural and urban environments. Ride with us to contribute to a greener, more sustainable future.",
            image: Super73
        },
        {
            title: "Photography and Memories",
            description: "Not only do we take you to some of the most photogenic locations in London, but we also offer professional photoshoot services. Capture your adventure with stunning backdrops, ensuring that the memories of your journey will last a lifetime.",
            image: Super73
        },
        {
            title: "Safety and Comfort",
            description: "Your safety is paramount. We provide all necessary safety equipment and detailed instructions before each tour. Our bikes are regularly maintained to high standards, and our routes are designed to be safe for all riders, regardless of experience level.",
            image: Super73
        },
        {
            title: "Local Expertise",
            description: "Our guides are locals with extensive knowledge of London's history, culture, and landscapes. They love what they do and are eager to share stories and insights that you won't find in a typical guidebook.",
            image: Super73
        },
        {
            title: "Customer-Centric Service",
            description: "We're committed to providing outstanding service from the moment you book with us to the end of your tour. We're here to accommodate your needs and ensure you have an enjoyable and hassle-free experience.",
            image: Super73
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
                                    className={`text-white text-[3.5rem] lg:text-[8.75rem] font-extrabold font-montserrat text-center lg:text-start lg:leading-[8.75rem]`}>About
                            Us.</Typography>
                    </div>
                </div>
            </Banner>
            <Main classname={"relative top-0 pb-0"}>
                <Image
                    src={Background}
                    alt="banner"
                    width={1920}
                    height={1080}
                    priority={true}
                    className={`absolute inset-0 -z-10 h-full w-full object-cover object-top opacity-[.3] `}
                />
                <Sectionbreak/>
                <Section>
                    <div className="flex flex-col gap-[3rem]">
                        {
                            aboutus.map(
                                (item, key) => (
                                    <div className={"flex flex-col gap-[3rem]"} key={key}>
                                        <div
                                            className={`relative flex flex-col gap-[3rem] items-center ${item.align === "right" ? "lg:items-end" : "lg:items-start"}`}>
                                            <div className="border-t border-secondary w-full"/>
                                            <div
                                                className={`absolute -top-[2rem] lg:-top-[2.5rem] ${item.align === "right" ? "lg:right-[6rem]" : "lg:left-[6rem]"} bg-white px-[1rem]`}>
                                                <Typography variant={'h1'}
                                                            className={`text-secondary text-[2.5rem] lg:text-[3rem] font-extrabold font-montserrat text-start leading-0`}>
                                                    {item.head}
                                                </Typography>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-[3rem]">
                                            <Typography variant={'paragraph'}
                                                        className={`text-secondary text-justify  text-[1rem] lg:text-[1.3rem] font-light font-montserrat leading-0`}>
                                                &ldquo;{item.description}&rdquo;
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
                    <div className={`relative top-0 w-full isolate overflow-hidden bg-primary h-[100vh]`}>
                        <div
                            className={`relative h-[100vh] bg-[url('/assets/images/WhyUs.png')] bg-cover bg-top bg-no-repeat bg-fixed`}>
                            <div
                                className={`flex px-[1rem] lg:px-[120px] overflow-x-clip w-full h-[100vh] justify-center"`}>
                                <div className="mx-auto max-w-2xl lg:max-w-full lg:mx-0 w-full">
                                    <div
                                        className={`flex justify-center items-start flex-col gap-[1rem] w-full h-full`}>
                                        <div
                                            className="flex flex-col lg:mt-[5rem] lg:gap-[5rem] justify-start items-center w-full h-full">
                                            <div
                                                className="flex flex-row gap-[2rem] lg:gap-[22.5rem] justify-center items-start">
                                                <div className="flex flex-row h-full lg:h-auto">
                                                    <Typography variant={'h1'}
                                                                className={`text-white text-[3.5rem] lg:text-[12.5rem] font-extrabold font-montserrat text-start leading-[8.75rem] uppercase`}>Wh<span
                                                        className={"text-cream"}>y</span></Typography>
                                                </div>
                                                <div className="flex flex-row h-full lg:h-auto">
                                                    <Typography variant={'h1'}
                                                                className={`text-white text-[3.5rem] lg:text-[12.5rem] font-extrabold font-montserrat text-start leading-[8.75rem] uppercase`}><span
                                                        className={"text-cream"}>U</span>s?&nbsp;&nbsp;</Typography>
                                                </div>
                                            </div>
                                            <Swiper initialSlide={0}>
                                                {
                                                    whyus.map((item, key) => (
                                                            <Card className="h-full" key={key}>
                                                                <CardBody
                                                                    className={"flex flex-col justify-center items-center gap-[1rem]"}>
                                                                    <Typography variant="h5" color="black"
                                                                                className="font-montserrat text-center text-[2rem] lg:text-[2.25rem]">
                                                                        {item.title}
                                                                    </Typography>
                                                                    <Image
                                                                        src={item.image}
                                                                        alt={item.title}
                                                                        width={289}
                                                                        height={183}
                                                                    />
                                                                    <Typography color="black"
                                                                                className="font-montserrat text-[1rem] text-center">
                                                                        {item.description}
                                                                    </Typography>
                                                                </CardBody>
                                                            </Card>
                                                        )
                                                    )
                                                }
                                            </Swiper>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>
            </Main>
        </>
    )
}

export default About;
