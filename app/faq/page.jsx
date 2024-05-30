'use client';
import {useState} from "react";
import {Accordion, AccordionBody, AccordionHeader, Typography} from "@material-tailwind/react";

import Banner from "@/components/banner";
import Main from "@/components/mainsection";
import Sectionbreak from "@/components/sectionbreak";
import Section from "@/components/section";

import PageBanner from "@/public/assets/images/HomeBanner.jpg";

import {faqs} from "@/constants";

const FAQ = () => {

    const [open, setOpen] = useState(-1);

    const handleOpen = (value) => setOpen(open === value ? -1 : value);

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
                                    className={`text-white text-[3.5rem] lg:text-[8.75rem] font-extrabold font-montserrat text-center lg:text-start lg:leading-[8.75rem]`}>FAQs.</Typography>
                    </div>
                </div>
            </Banner>
            <Main>
                <Sectionbreak/>
                <Section>
                    <div className="flex flex-col gap-[3rem] lg:gap-[5rem]">
                        {
                            faqs.map(
                                (faq, key) => (
                                    <div className={"flex flex-col gap-[3rem]"} key={key}>
                                        <div
                                            className={`relative flex flex-col gap-[3rem] items-center ${faq.align === "right" ? "lg:items-end" : "lg:items-start"}`}>
                                            <div className="border-t border-secondary w-full"/>
                                            <div
                                                className={`absolute -top-[1.5rem] lg:-top-[2.5rem] ${faq.align === "right" ? "lg:right-[6rem]" : "lg:left-[6rem]"} bg-white px-[1rem]`}>
                                                <Typography variant={'h1'}
                                                            className={`text-secondary text-[2rem] lg:text-[3rem] font-extrabold font-montserrat text-start leading-0`}>
                                                    {faq.type}
                                                </Typography>
                                            </div>
                                        </div>
                                        <div className="grid lg:grid-cols-1">
                                            <div className="flex-col flex-center w-full">
                                                <div className="flex-center flex-col gap-4">
                                                    {
                                                        faq.questions.filter(({visibility}) => visibility === "display").map((record, index) => (
                                                            <Accordion key={index} open={open === (`${faq.type}${index}`)}>
                                                                <AccordionHeader onClick={() => handleOpen(`${faq.type}${index}`)}>
                                                                    <Typography type={"h2"}
                                                                                className={`lg:text-3xl text-xl font-montserrat font-bold tracking-tight text-secondary`}>
                                                                        {record.title}
                                                                    </Typography>
                                                                </AccordionHeader>
                                                                <AccordionBody
                                                                    className="flex flex-col gap-4 text-justify">
                                                                    {
                                                                        record.content.map((item, index) => (
                                                                            <Typography key={index} variant="paragraph"
                                                                                        className=" text-secondary font-montserrat font-normal">
                                                                                {item}
                                                                            </Typography>
                                                                        ))
                                                                    }

                                                                    {
                                                                        record.list && (
                                                                            <div className="flex flex-col gap-2">
                                                                                <ul className="list-disc list-inside">
                                                                                    {
                                                                                        record.list.items.map((item, index) => (
                                                                                            <li key={index}
                                                                                                className="text-white font-montserrat font-normal">
                                                                                                {item}
                                                                                            </li>
                                                                                        ))
                                                                                    }
                                                                                </ul>
                                                                            </div>
                                                                        )
                                                                    }
                                                                </AccordionBody>
                                                            </Accordion>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            )
                        }
                    </div>
                </Section>
                <Sectionbreak/>
            </Main>
        </>
    )
}

export default FAQ;
