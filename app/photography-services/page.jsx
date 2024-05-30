'use client';
import {Typography} from "@material-tailwind/react";

import Main from "@/components/mainsection";
import Banner from "@/components/banner";
import Section from "@/components/section";

import PageBanner from "@/public/assets/images/HomeBanner.jpg";
import Sectionbreak from "@/components/sectionbreak";

const Photography = () => {

    const packages = [
        {
            head: "Custom Location Couple Shoots",
            description: "Our Custom Location Couple Shoots are designed to celebrate relationships in the most picturesque settings London has to offer. Whether it's a significant anniversary, an engagement, or simply a cherished moment, our professional photographers work with couples to capture these special memories against stunning backdrops. We offer a personalized experience, allowing couples to select locations that are meaningful to them, ensuring each photo shoot is as unique as their relationship.",
            align: "left"
        },
        {
            head: "Fashion Model Photography",
            description: " Our Fashion Model Photography service is tailored to meet the needs of both emerging and established models as well as fashion brands. With a focus on highlighting the unique style and personality of each model, our shoots provide the perfect blend of creativity and technical precision. Our services are ideal for portfolio development, brand campaigns, and editorial work.",
            image: '/assets/images/photography/custom-location-couple-shoots.jpg',
            align: "right"
        },
        {
            head: "Corporate Photography",
            description: "Capture the professional essence of your team with our corporate photography services. Ideal for showcasing the dynamic personalities within your company and enhancing your corporate image.",
            image: '',
            align: "left"
        },
        {
            head: "Professional Headshots",
            description: "Elevate your professional profile with our expertly crafted headshots. Perfect for executives, entrepreneurs, and team members looking to make a strong first impression. ",
            image: '',
            align: "right"
        },
        {
            head: "Product Photography",
            description: "Highlight the features and appeal of your products with stunning clarity and detail. Our product photography is designed to enhance your marketing and sales efforts across all platforms. ",
            image: '',
            align: "left"
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
                                    className={`text-white text-[2.5rem] xl:text-[8.75rem] font-extrabold font-montserrat text-start leading-[8.75rem]`}>Photography.</Typography>
                    </div>
                </div>
            </Banner>
            <Main className={"!pb-0"}>
                <Sectionbreak/>
                {/*<Section classname={"!p-0 !gap-0 h-[100vh]"}>*/}
                <Section>
                    <div className="flex flex-col gap-[3rem]">
                        {
                            packages.map(
                                (item, key) => (
                                    <div className={"flex flex-col gap-[3rem]"} key={key}>
                                        <div
                                            className={`relative flex flex-col gap-[3rem] ${item.align === "right" ? "items-end" : ""} w-full`}>
                                            <div className="border-t border-secondary w-full"/>
                                            <div
                                                className={`absolute -top-[1.6rem] ${item.align === "right" ? "right-[6rem]" : "left-[6rem]"} bg-white px-[1rem]`}>
                                                <Typography variant={'h1'}
                                                            className={`text-secondary text-[2.5rem] xl:text-[2rem] font-extrabold font-montserrat text-start leading-0`}>
                                                    {item.head}
                                                </Typography>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-[3rem]">
                                            <Typography variant={'paragraph'}
                                                        className={`text-secondary text-justify text-[1.3rem] font-light font-montserrat leading-0`}>
                                                {item.description}
                                            </Typography>
                                        </div>
                                    </div>
                                )
                            )
                        }
                        {/*<div className={"flex"}>*/}
                        {/*    <div className={`relative top-0 isolate overflow-hidden bg-primary h-[100vh] w-1/2 pt-0`}>*/}
                        {/*        <div*/}
                        {/*            className={`relative h-[100vh] bg-[url('/assets/images/photography/custom-location-couple-shoots.jpg')] bg-cover bg-top bg-no-repeat bg-fixed`}/>*/}
                        {/*    </div>*/}
                        {/*    <div className={"flex flex-col gap-[3rem] w-1/2 justify-center items-center p-[5rem]"}>*/}
                        {/*        {*/}
                        {/*            packages.map(*/}
                        {/*                (item, key) => (*/}
                        {/*                    <div className={"h-[100vh]"} key={key}>*/}
                        {/*                        <div*/}
                        {/*                            className={`relative flex flex-col gap-[3rem] ${item.align === "right" ? "items-end" : ""} w-full`}>*/}
                        {/*                            <div className="border-t border-secondary w-full"/>*/}
                        {/*                            <div*/}
                        {/*                                className={`absolute -top-[1.6rem] ${item.align === "right" ? "right-[6rem]" : "left-[6rem]"} bg-white px-[1rem]`}>*/}
                        {/*                                <Typography variant={'h1'}*/}
                        {/*                                            className={`text-secondary text-[2.5rem] xl:text-[2rem] font-extrabold font-montserrat text-start leading-0`}>*/}
                        {/*                                    {item.head}*/}
                        {/*                                </Typography>*/}
                        {/*                            </div>*/}
                        {/*                        </div>*/}
                        {/*                        <div className="flex flex-col gap-[3rem]">*/}
                        {/*                            <Typography variant={'paragraph'}*/}
                        {/*                                        className={`text-secondary text-justify text-[1.3rem] font-light font-montserrat leading-0`}>*/}
                        {/*                                {item.description}*/}
                        {/*                            </Typography>*/}
                        {/*                        </div>*/}
                        {/*                    </div>*/}
                        {/*                )*/}
                        {/*            )*/}
                        {/*        }*/}

                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </Section>
                <Sectionbreak/>
            </Main>
        </>
    )
}

export default Photography;

// <div
//     className={`relative flex flex-col gap-[3rem] ${item.align === "right" ? "items-end" : ""}`}>
//     <div className="border-t border-secondary w-full"/>
//     <div
//         className={`absolute -top-[2.5rem] ${item.align === "right" ? "right-[6rem]" : "left-[6rem]"} bg-white px-[1rem]`}>
//         <Typography variant={'h1'}
//                     className={`text-secondary text-[2.5rem] xl:text-[3rem] font-extrabold font-montserrat text-start leading-0`}>
//             {item.head}
//         </Typography>
//     </div>
// </div>
// <div className="flex flex-row gap-[3rem]">
//     <Typography variant={'paragraph'}
//                 className={`text-secondary text-justify text-[1.3rem] font-light font-montserrat leading-0`}>
//         {item.description}
//     </Typography>
// </div>
// </div>