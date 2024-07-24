import React from 'react'
import { FeatureData } from '@/types/interfaces';


interface ProductsProps {
  features: FeatureData[];
}


const index: React.FC<ProductsProps> = ({ features }) =>{

  return (
    <div className='md:container md:mx-auto sm:px-0 px-5'>
       
       <div className='grid lg:grid-cols-4 grid-cols-2 gap-8 my-[30px]'>

           {
            features?.map((feature,index)=>(
              <article key={index} className='flex flex-col gap-2 bg-[#F5F5F5] dark:bg-[#2B2B2B] rounded-[24px] sm:p-6 p-[11px]'>
              <div className='flex justify-center items-center bg-[#E1E1E1] dark:bg-[#474747] rounded-[15px] w-[50px] h-[50px]'>
               <img src={feature.icon} className='text-[#fffff]' alt="iamge" />
              </div>
              <div className='flex flex-col mt-6 mb-3'>
                <b className='font-bold sm:text-2xl text-sm text-[#333333] dark:text-white'>{feature.title}</b>
                <span className='mt-1 font-bold sm:text-base text-xs text-[#adadad] dark:text-[#646464]'>{feature.description}</span> 
              </div>
           </article>  
            ))
           }

       </div>

    </div>
  )
}

export default index