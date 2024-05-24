"use client";

import {Button, Collapse, List, ListItem, Typography} from "@material-tailwind/react";
import {Fragment, useEffect, useState} from "react";
import MenuButton from "./menubutton";
import {usePathname} from "next/navigation";

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {

    const active = usePathname();

    const [openNav, setOpenNav] = useState(false);
    const [sticky, setSticky] = useState(false);

    const onScroll = (event) => {
        const {scrollY} = window;
        if (scrollY === 0) {
            setSticky(false);
        } else {
            setSticky(true);
        }
    }

    useEffect(() => {
        onScroll();
        window.addEventListener(
            "scroll",
            onScroll,
        );
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const NavList = () => {

        const ITEMS = [
            {title: "About Us", link: "/about", status: "display", type: "single"},
            {title: "Tour Packages", link: "/tour-packages", status: "display", type: "single"},
            {title: "Photography Services", link: "/photography-services", status: "display", type: "single"},
            {title: "Booking", link: "/booking", status: "display", type: "single"},
        ];


        return (
            <List
                className={`gap-4 flex-col lg:flex-row lg:gap-[4.25rem] items-end lg:flex-center pb-[1rem] lg:p-2`}>
                {
                    ITEMS.filter(({status}) => status === "display").map((ITEM, key) => (
                        <Typography
                            as="a"
                            href={ITEM.link}
                            variant="small"
                            className={`p-0`}
                            key={key}
                            data-ripple-light={false}
                            data-ripple-dark={false}
                        >
                            <ListItem
                                className={`navLink flex flex-col rounded-none font-montserrat font-medium text-[1.3125rem] px-[0.5rem] ${sticky ? active === ITEM.link ? "text-secondary" : "text-primary" : active === ITEM.link ? "text-cream" : "text-white"} ${sticky ? "hover:text-secondary" : "hover:text-cream"} py-0`}
                            >
                                {ITEM.title}
                                <div
                                    className={`navUnderline flex flex-col ${sticky ? "bg-secondary" : "bg-cream"} h-[0.1rem] ${active === ITEM.link ? "w-full" : "w-0"} transition-all duration-500`}/>
                            </ListItem>
                        </Typography>
                    ))
                }
                <Typography
                    as="a"
                    href={"/contact"}
                    variant="small"
                    className={`p-0 lg:hidden `}
                    data-ripple-light={false}
                    data-ripple-dark={false}
                >
                    <Button
                        className={"flex justify-between items-center gap-[2rem] bg-secondary shadow-none hover:shadow-none font-montserrat font-semibold capitalize text-[1.125rem] py-[0.5rem] px-[1rem] w-fit rounded-[29px]"}>
                        Contact us
                    </Button>
                </Typography>
            </List>
        );

    }


    return (
        <>
            <nav className={`fixed ${sticky ? "bg-white shadow" : "bg-transparent"} transition-all duration-500 top-0 z-10 w-full`}>
                {/* Desktop Navigation */}
                <div className='flex-between py-[1rem] px-[1rem] lg:px-[120px]'>
                    <Link href='/' className='flex-center gap-2'>
                        <div className="hidden lg:block">
                            <Image
                                src={`/assets/images/logo/${sticky ? "gray" : "white"}/Horizontal.png`}
                                alt='logo'
                                width={233}
                                height={60}
                                className={`max-w-[233px] max-h-[60px]`}
                                priority={true}
                            />
                        </div>
                        <div className="block lg:hidden">
                            <Image
                                src={"/assets/images/NavLogo.png"}
                                alt='logo'
                                width={50}
                                height={50}
                                className={`max-w-[50px] max-h-[50px]`}
                                priority={true}
                            />
                        </div>
                    </Link>
                    <div className="h-full hidden lg:block">
                        <NavList/>
                    </div>
                    <div className="h-full hidden lg:block">
                        <Typography
                            as="a"
                            href={"/contact"}
                            variant="small"
                            className={`p-0`}
                            data-ripple-light={false}
                            data-ripple-dark={false}
                        >
                            <Button
                                className={"flex justify-between items-center gap-[2rem] bg-secondary shadow-none hover:shadow-none font-montserrat font-semibold capitalize text-[1.125rem] py-[0.5rem] px-[1rem] w-fit rounded-[29px]"}>
                                Contact us
                            </Button>
                        </Typography>
                    </div>
                    <div className="flex-end w-full lg:hidden">
                        <MenuButton onClick={() => setOpenNav(!openNav)}/>
                    </div>
                </div>

                {/*Mobile Navigation */}
                <Collapse open={openNav} className={`bg-transparent lg:hidden`}>
                    <NavList/>
                </Collapse>
            </nav>
        </>
    );
};

export default Navbar;