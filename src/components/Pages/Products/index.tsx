import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { SliderData } from '@/types/interfaces';
import styles from './styles.module.css';
import Image from 'next/image';


interface ProductsProps {
    slider: SliderData[];
}


const index: React.FC<ProductsProps> = ({ slider }) =>{

  return (
    <div className='md:container md:mx-auto sm:px-0 px-5'>
        <div className='mt-[30px]'>
        <Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination,Navigation]}
        className="mySwiper"
        >
            {
                slider?.map((data,index)=>(
                    <SwiperSlide key={index} >
                        <div className={styles.sliderBox}>
                         <Image 
                          src={data.image}
                          alt={`image${index}`}
                          layout='fill'
                          objectFit='cover'
                          style={{borderRadius:'35px'}}
                        />
                        </div>
                    </SwiperSlide>
                ))
            } 
        </Swiper>
        </div>
    </div>
  )
}



export default index;