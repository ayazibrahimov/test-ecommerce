import React from "react";
import Navbar from "@/components/Static/Navbar/index";
import Link from "next/link";
import ThemeToggle from '@/components/Tools/ThemeToggle/index'
import Image from "next/image";
import Logo2 from "@/assets/logo2.png"
import Catalog from '@/assets/catalog.png'
import { FaSearch } from "react-icons/fa";
import { HiOutlineChevronDown } from "react-icons/hi";
import { RiScales3Line } from "react-icons/ri";
import { GrCart } from "react-icons/gr";
import { RiHeartLine } from "react-icons/ri";
import { VscAccount } from "react-icons/vsc";

const header = () => {
  return (
    <header>
      <div className="md:container md:mx-auto sm:px-0 px-5">
        <div className="flex justify-between items-center bg-[#f5f5f5] p-[17px] rounded-[25px] dark:bg-[#2B2B2B]">
          <Navbar />
          <div>
            <ul className="flex justify-between items-center gap-[19px]">
              <li className="md:flex hidden">
                <span className="font-normal text-sm text-[#333333] dark:text-slate-300 underline decoration-1">
                  <Link href="/">Əvvəlki versiyaya keçid</Link>
                </span>{" "}
              </li>
              <li>
                <div className="custom_select_containe">
                  <select className="custom_select dark:bg-[#333333] dark:text-white">
                    <option value="aze">Aze</option>
                    <option value="eng">Eng</option>
                    <option value="rus">Rus</option>
                  </select>
                </div>
              </li>
              <li>
                <ThemeToggle />
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between sm:gap-0 gap-2 mt-5">
            
            <div style={{position:'relative'}}>
              <Link href='/'>
              <Image 
                 src={Logo2}
                 width={50}
                 height={50}
                 objectFit="fill"
                 alt='logo'
                /></Link>
            </div>

            <div className="flex justify-between sm:gap-[10px] gap-1 items-center sm:px-6 px-3 sm:py-[15px] py-1 bg-[#333333] rounded-[35px] text-[#ffff]">
                <div>
                  <Image 
                    src={Catalog}
                    width={20}
                    height={20}
                    objectFit="fill"
                    alt='logo'
                  />
                </div>
                <article className="font-bold sm:text-base text-xs">Kataloq</article>
            </div>
             
             <div className="input_container">
               <input className="input_filer dark:bg-[#2B2B2B]" type="text" placeholder="Məhsul axtar..." />
               <FaSearch style={{
                 position: 'absolute',
                 right: '15px',
                 fontSize:'20px',
                 top: '50%',
                 transform: "translateY(-50%)",
                 color: '#999'
               }} />
             </div>
             <div className="input_search">
               <input className="input_filer dark:bg-[#2B2B2B]" type="search" placeholder="Sumqayıt şəhəri..." />
               <HiOutlineChevronDown style={{
                 position: 'absolute',
                 right: '15px',
                 fontSize:'20px',
                 top: '50%',
                 transform: "translateY(-50%)",
                 color: '#999'
               }} />
             </div>

             <div className="lg:flex gap-2 hidden">
                 <figure className="flex justify-center items-center bg-[#F5F5F5] dark:bg-[#2B2B2B] rounded-[12px] p-3">
                  <RiScales3Line fontSize={25} className="dark:text-white" />
                 </figure>
                 <figure className="flex justify-center items-center bg-[#F5F5F5] dark:bg-[#2B2B2B] rounded-[12px] p-3">
                  <GrCart fontSize={25} className="dark:text-white" />
                 </figure>
                 <figure className="flex justify-center items-center bg-[#F5F5F5] dark:bg-[#2B2B2B] rounded-[12px] p-3">
                  <RiHeartLine fontSize={25} className="dark:text-white"/>
                 </figure>
                 <figure className="flex justify-center items-center bg-[#F5F5F5] dark:bg-[#2B2B2B] rounded-[12px] p-3">
                  <VscAccount fontSize={25} className="dark:text-white" />
                 </figure>
              
             </div>

        </div>
      </div>
    </header>
  );
};

export default header;
