import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router';
import Burger from '@/assets/Burger.png'

const Index = () => {

  const { asPath } = useRouter();
    
  return (
    <div>
         <div className='md:hidden block'>
            <Image
              src={Burger}
              alt='burger'
            />
         </div>
        <ul className='ml-4 md:flex lg:gap-[35px] gap-[16px] hidden'>
        <li className={`text-sm font-bold ${asPath === '/' ? 'text-[#333333] dark:text-white' : 'text-[#a0a0a0]'}`}>
                <Link href='/'>Kampaniyalar</Link>
            </li>
            <li className={`text-sm font-bold ${asPath === '/services' ? 'text-[#333333] dark:text-white' : 'text-[#a0a0a0]'}`}>
                <Link href='/services'>Xidmətlər</Link>
            </li>
            <li className={`text-sm font-bold ${asPath === '/stores' ? 'text-[#333333] dark:text-white' : 'text-[#a0a0a0]'}`}>
                <Link href='/stores'>Mağazalar</Link>
            </li>
            <li className={`text-sm font-bold ${asPath === '/payment' ? 'text-[#333333] dark:text-white' : 'text-[#a0a0a0]'}`}>
                <Link href='/payment'>Aylıq ödəniş</Link>
            </li>
            <li className={`text-sm font-bold ${asPath === '/other' ? 'text-[#333333] dark:text-white' : 'text-[#a0a0a0]'}`}>
                <Link href='/other'>Digər</Link>
            </li>
        </ul>
    </div>
  )
}

export default Index;