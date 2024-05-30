'use client';
import {Typography} from "@material-tailwind/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faLocationDot, faPhoneVolume} from "@fortawesome/free-solid-svg-icons";

import Banner from "@/components/banner";
import Main from "@/components/mainsection";
import Text from "@/components/text";
import Section from "@/components/section";

import PageBanner from "@/public/assets/images/HomeBanner.jpg";

const Contact = () => {

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
                                    className={`text-white text-[3.5rem] lg:text-[8.75rem] font-extrabold font-montserrat text-center lg:text-start lg:leading-[8.75rem]`}>Contact Us.</Typography>
                    </div>
                </div>
            </Banner>
            <Main>
                <Section>
                    <div
                        className="flex flex-col gap-[4rem] bg-secondary h-[40rem] w-40% rounded-xl p-[2rem] xl:p-[2.5rem] overflow-hidden">
                        <div>
                            <Text variant="h3" color="white" size="1.75">Contact Information</Text>
                            <Text color="white" styles="italic">Feel free to contact us for any inquiry</Text>
                        </div>
                        <div className="flex flex-col gap-[3rem]">
                            <div className="flex gap-[1.5rem]">
                                <FontAwesomeIcon icon={faPhoneVolume} width={"1.25rem"}
                                                 className="text-white text-[1.8rem]"/>
                                <Text color="white">+44 (0)207 631 4015</Text>
                            </div>
                            <div className="flex gap-[1.5rem]">
                                <FontAwesomeIcon icon={faEnvelope} width={"1.25rem"}
                                                 className="text-white text-[1.8rem]"/>
                                <Text color="white">info@fof.london</Text>
                            </div>
                            <div className="flex gap-[1.5rem]">
                                <FontAwesomeIcon icon={faLocationDot} width={"1.25rem"}
                                                 className="text-white text-[1.8rem]"/>
                                <Text color="white">
                                    G06, 3 Pearson Square,<br/> London, England,<br/> W1T 3BG
                                </Text>
                            </div>
                        </div>
                        <div className="relative mt-[6rem]">
                            <div
                                className={"w-[9rem] h-[9rem] bg-white/20 rounded-full absolute -top-[10rem] right-[2rem]"}/>
                            <div
                                className={"w-[17rem] h-[17rem] bg-white/20 rounded-full absolute -top-[8.5rem] -right-[8.5rem]"}/>
                        </div>
                    </div>
                </Section>
            </Main>
        </>
    )
}

export default Contact;
