import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import {EffectCoverflow, Navigation,} from 'swiper/modules';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons";

const swiper = (props) => {

    const {initialSlide = 1} = props;


    return (
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            initialSlide={initialSlide}
            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 4,
                slideShadows: true,
            }}
            navigation={
                {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }
            }
            modules={[EffectCoverflow, Navigation]}
            className="hidden lg:block w-full"
        >
            {
                props.children.map((child, index) => {
                    return (
                        <SwiperSlide key={index} className={"!w-[80%] lg:!w-[30%]"}>
                            {child}
                        </SwiperSlide>
                    );
                })
            }

            <div className="lg:flex items-center justify-between px-[8rem] absolute h-full top-0 z-10 hidden">
                <div
                    className="swiper-button-prev flex flex-col justify-center items-center flex-shrink-0 text-white w-[3rem] h-[3rem] rounded-[5rem] border-[1px] border-secondary bg-secondary hover:text-secondary hover:bg-transparent">
                    <FontAwesomeIcon icon={faAngleLeft}/>
                </div>
            </div>
            <div className="lg:flex items-center justify-between px-[8rem] absolute h-full top-0 right-0 z-10 hidden">
                <div
                    className="swiper-button-next flex flex-col justify-center items-center flex-shrink-0 text-white w-[3rem] h-[3rem] rounded-[5rem] border-[1px] border-secondary bg-secondary hover:text-secondary hover:bg-transparent">
                    <FontAwesomeIcon icon={faAngleRight}/>
                </div>
            </div>

        </Swiper>
    );

}

export default swiper;
