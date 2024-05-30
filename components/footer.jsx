"use client";

import {Typography} from "@material-tailwind/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import {usePathname} from "next/navigation";
import Link from "next/link";

import Logo from "@/public/assets/images/logo/white/Main.png";

const Footer = () => {

    const active = usePathname();

    const LINKS = [
        {
            type: "link",
            title: "About Us",
            link: "/about",
            status: "display",
        },
        {
            type: "link",
            title: "Tour Packages",
            link: "/tour-packages",
            status: "display",
        },
        {
            type: "link",
            title: "Photography Services",
            link: "/photography-services",
            status: "display",
        },
        {
            type: "link",
            title: "Booking",
            link: "/booking",
            status: "hide",
        },
    ];

    const SOCIAL = [
        {
            icon: faLinkedin,
            link: "#",
        }
    ]

    const currentYear = new Date().getFullYear();

    return (
        <footer
            className="relative bottom-0 w-full !text-white bg-primary pt-[3rem] pb-[1.625rem] px-[1rem] lg:px-[120px] font-montserrat">
            <div className={`flex flex-between pb-[3rem] !items-start flex-col gap-[2rem]`}>
                <div
                    className="flex flex-col lg:flex-row gap-[1rem] items-start justify-start lg:justify-between w-full mb-0">
                    <Link href='/' className='flex-start gap-2'>
                        <Image
                            src={Logo}
                            alt='logo'
                            width={200}
                            height={200}
                            className='object-contain max-h-[200px] max-w-[200px]'
                            priority={true}
                        />
                    </Link>
                    <Typography variant={'h2'}
                                className={`text-white text-[1.75rem] font-extrabold font-montserrat text-start`}><span
                        className={"text-cream"}>Capture</span> your journey through<span
                        className={"text-cream"}> London</span></Typography>
                </div>

                <div className="flex flex-col lg:flex-row lg:gap-[20rem] w-full">
                    <div
                        className="flex flex-col gap-[0.5rem]">
                        {
                            LINKS.filter(({status}) => status === "display").map(({type, title, link, icon}, key) => (
                                <div key={key}>
                                    <Typography
                                        as="a"
                                        href={link}
                                        className={`font-montserrat text-[0.875rem] transition-colors hover:text-cream focus:text-secondary cursor-pointer ${active === link ? "text-cream" : ""} `}
                                    >
                                        {title}
                                    </Typography>
                                </div>
                            ))
                        }
                    </div>
                    <div
                        className="flex flex-col gap-[0.5rem] mt-[0.5rem] lg:mt-0">
                        <div>
                            <Typography
                                as="a"
                                href={"/contact"}
                                className={`font-montserrat text-[0.875rem] transition-colors hover:text-cream focus:text-secondary cursor-pointer ${active === "/contact" ? "text-cream" : ""} `}
                            >
                                Contact us
                            </Typography>
                        </div>
                    </div>
                    <div
                        className="flex flex-col gap-[0.5rem] mt-[2rem] lg:mt-0">
                        <Typography variant={'h2'}
                                    className={`text-cream text-[1rem] font-extrabold font-montserrat text-start`}>Follow
                            us:</Typography>
                        <div className="flex gap-[2rem] text-white">
                            {
                                SOCIAL.map(({icon, link, hover}, key) => (
                                    <Typography as="a" href={link}
                                                className={`transition-opacity hover:opacity-100 hover:text-cream`}
                                                key={key}>
                                        <FontAwesomeIcon icon={icon} className={"text-[2rem]"} width={"2rem"}/>
                                    </Typography>
                                ))
                            }
                        </div>
                    </div>
                    <div
                        className="flex flex-col gap-[0.5rem] mt-[2rem] lg:mt-0">
                        <Typography variant={'h2'}
                                    className={`text-white text-[1rem] font-extrabold font-montserrat text-start`}>Email
                            us:</Typography>
                        <Typography
                            as="a"
                            href={"mailto:inquiries@fof.london"}
                            className={`font-montserrat text-[0.875rem] transition-colors hover:text-cream focus:text-secondary cursor-pointer ${active === "/contact" ? "text-cream" : ""} `}
                        >
                            inquiries@fof.london
                        </Typography>

                    </div>
                </div>
            </div>

            <div
                className="flex-between pt-[2.5rem] flex-row w-full">
                <Typography
                    variant="small"
                    className="text-[1rem] font-montserrat font-normal"
                >
                    &copy; {currentYear} Falcons of Fitzrovia. All
                    Rights Reserved.
                </Typography>
            </div>
        </footer>
    );

};

export default Footer;