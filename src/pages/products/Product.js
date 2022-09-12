import axios from '../../config/axiosClient'
import React, { useEffect, useState } from 'react'
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs } from 'swiper'

import Navbar from '../../layouts/Navbar'
import DetailTab from './DetailTab'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import './Product.css'

const Product = () => {
    const param = useParams()
    const [product, setProduct] = useState({})
    const [imagesNavSlider, setImagesNavSlider] = useState(null);

    const getProduct = () => {
        axios.get(`https://fakestoreapi.com/products/${param.id}`)
            .then(({data}) => {
                setProduct(data);
            }).catch((error) => console.log(error.response))
    }

    useEffect(() => {
        getProduct()
    }, [])

    return (
        <>
            <Navbar />
            <div className='py-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='row m-sm-0'>
                                <div className='col-sm-2 p-sm-0 order-2 order-sm-1 mt-2 mt-sm-0 px-xl-2'>
                                    <div className='slider__col'>
                                        <div className='slider__thumbs'>
                                            <Swiper
                                                onSwiper={setImagesNavSlider}
                                                direction='vertical'
                                                spaceBetween={24}
                                                slidesPerView={4}
                                                slideToClickedSlide={true}
                                                loopedSlides={50}
                                                loop={true}
                                                className='swiper-container1 '
                                                breakpoints={{
                                                    0: {
                                                        direction: 'horizontal'
                                                    },
                                                    768: {
                                                        direction: 'vertical'
                                                    }
                                                }}
                                                modules={[Navigation, Thumbs]}
                                            >
                                                <SwiperSlide key={1}>
                                                    <div className='slider__image'>
                                                        <img src={product.image} alt='' />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide key={2}>
                                                    <div className='slider__image'>
                                                        <img src={product.image} alt='' />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide key={3}>
                                                    <div className='slider__image'>
                                                        <img src={product.image} alt='' />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide key={4}>
                                                    <div className='slider__image'>
                                                        <img src={product.image} alt='' />
                                                    </div>
                                                </SwiperSlide>
                                            </Swiper>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-sm-10 order-1 order-sm-2'>
                                    <Swiper
                                        thumbs={{ swiper: imagesNavSlider  && !imagesNavSlider.destroyed ? imagesNavSlider : null}}
                                        direction='horizontal'
                                        slidesPerView={1}
                                        spaceBetween={32}
                                        navigation={true}
                                        breakpoints={{
                                            0: {
                                                direction: 'horizontal'
                                            },
                                            768: {
                                                direction: 'horizontal'
                                            }
                                        }}
                                        className='swiper-container2'
                                        modules={[Navigation, Thumbs]}
                                        >
                                        <SwiperSlide key={1}>
                                            <div className='slider__image'>
                                                <img src={product.image} alt='' />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide key={2}>
                                            <div className='slider__image'>
                                                <img src={product.image} alt='' />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide key={3}>
                                            <div className='slider__image'>
                                                <img src={product.image} alt='' />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide key={4}>
                                            <div className='slider__image'>
                                                <img src={product.image} alt='' />
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                        
                        <div className='col-lg-6'>
                            <h2>{product.title}</h2>
                            <p className='text-muted lead'>${product.price}</p>
                            <p className='text-sm mb-4'>{product.description}</p>
                            <div className='row align-items-stretch mb-4'>
                                <div className='col-sm-5 pr-sm-0 mt-1'>
                                    <div className='border d-flex align-items-center justify-content-between py-1 px-3 bg-white border-white'>
                                        <span className='small text-uppercase text-gray mr-4'>Quantity</span>
                                        <div className='quantity'>
                                            <button>
                                                <FaCaretLeft />
                                            </button>
                                            <input className='form-control border-0 shadow-0 p-0' type='text'/>
                                            <button>
                                                <FaCaretRight />    
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-sm-3 pl-sm-0'>
                                    <button className='btn__dark'>Add to cart</button>
                                </div>
                            </div>
                            
                            <ul className='list-unstyled small d-inline-block'>
                                <li className='px-3 py-2 mb-1 bg-white'>
                                    <strong className='text-uppercase'>SKU:</strong><span className='ms-2 text-muted'>{product.id}</span>
                                </li>
                                <li className='px-3 py-2 mb-1 bg-white text-muted'>
                                    <strong className='text-uppercase text-dark'>Category:</strong>
                                    <Link 
                                        to={`/products?category=${product.category}`} 
                                        className='reset-anchor ms-2'>
                                            {product.category}
                                    </Link>
                                </li>
                                <li className='px-3 py-2 mb-1 bg-white text-muted'>
                                    <strong className='text-uppercase text-dark'>Tags:</strong>
                                        <Link 
                                            to='/' 
                                            className='reset-anchor ms-2'>
                                                Innovation
                                        </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <DetailTab product={product} />
        </>
    )
}

export default Product