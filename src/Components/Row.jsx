import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Card from './Card';
import Loading from './Loading/Loading';

const Row = ({ select, action, title, type }) => {

    let mainSelector = useSelector(select)
    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(action(type))
    }, [])

    return (
        <>

            <h1 className='home-title mt-5 fw-bold ms-3'>{title}</h1>
            {
                (mainSelector.status === "loading") ?
                    <>
                        <div className='d-flex gap-3'>
                            <Loading />
                            <Loading />
                            <Loading />
                            <Loading />
                            <Loading />
                        </div>
                    </>
                    :
                    <div className='mt-3'>
                        <Swiper
                            spaceBetween={15}
                            slidesPerView={5}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            {
                                mainSelector.data?.articles?.map((item, index) => {
                                    return (
                                        <>
                                            <SwiperSlide key={item.description}><Card {...item} /></SwiperSlide>
                                        </>
                                    )
                                })
                            }
                        </Swiper>
                    </div>
            }
        </>
    )
}

export default Row
