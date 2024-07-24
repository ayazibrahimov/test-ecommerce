import React from 'react';
import styles from './styles.module.css';
import Image from 'next/image';
import { RiScales3Line } from "react-icons/ri";
import { TiStarFullOutline } from "react-icons/ti";
import { FaCommentDots } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { GoHeart } from "react-icons/go";
import { IndexProps } from '@/types/interfaces';
 


const Index: React.FC<IndexProps> = ({ data }) => {


  return (
    <div className={`${styles.card} dark:bg-[#2B2B2B]`}>
       <div className={styles.imageBox}>
         {+data.discount > 0 && <span className={styles.percent}>{data.discount}%</span>}
          <span className={styles.credit}>
           <RiScales3Line className={styles.iconic1} />
          </span>
         <figure style={{position:"relative",height:'100%'}}>
            <Image 
              src={data.image}
              alt='image'
              layout='fill'
              objectFit='cover'
              style={{borderRadius:'20px',width:'100%',height:'100%'}}
            />
         </figure>
       </div>
       <div className={styles.cardInfoBox}>
         <div className='flex gap-5'>
           <article className='flex text-[14px] items-center gap-1'>
               <TiStarFullOutline style={{fontSize:"20px", color:'#EA2427'}} />
               <span className='dark:text-white sm:text-[14px] text-[10px] sm:mt-0 mt-1'>{data.quantity}</span> 
           </article>
           <article className='flex items-center sm:text-[14px] text-[10px]  gap-1 dark:text-white'>
             <FaCommentDots style={{fontSize:"18px"}} className='text-[#f9bebf] dark:text-[#6a6a6a]' />
             <span className='sm:mt-0 mt-1'> {data.rate} Rəy</span>
           </article>
         </div>
         <p className='mt-[7px] sm:text-base text-xs font-normal text-[#3F3F3F] dark:text-[#FFFFFF] ellipsis'>{data.name}</p>
         <div className={styles.price}>
         <article className='pr-3 line1'>
            <div className='text-[#c4c4c4] dark:text-[#797979] sm:text-base text-[11px]'><s>3699</s> ₼ </div>
            <div className='text-[#3F3F3F] dark:text-white font-bold lg:text-xl sm:text-base text-xs'>{data.price} ₼</div>
         </article>
         <article className='pl-3'>
            <div className='text-[#c4c4c4] dark:text-[#797979] sm:text-base text-[11px]'><span>{data.perMonth.month}</span> ay </div>
            <div className='text-[#3F3F3F] dark:text-white font-bold lg:text-xl sm:text-base text-xs'>{data.perMonth.price} ₼</div>
         </article>
     
     
         </div>
         <div className='mt-3 flex gap-2'>
           <button className={`${styles.btn} dark:bg-[#3F3F3F] dark:text-white `}>
             <SlBasket className={`${styles.basket} dark:text-white`}/>
             Səbətə at</button>
            <button className={`${styles.heart} dark:bg-[#3F3F3F]`}>
              <GoHeart className={ `${styles.heartIcon} dark:text-white` } />
            </button>
         </div>
     
       </div>
    </div>
  )
}

export default Index;