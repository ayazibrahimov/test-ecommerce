import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import Card from "@/components/Static/Card/index";
import { CategoriesList } from "@/types/interfaces";
import { Skeleton } from "primereact/skeleton";

interface ItemsProps {
  products: CategoriesList[];
}

const Index: React.FC<ItemsProps> = ({ products }) => {
  const [active, setActive] = useState<string | number>("Smartfonlar");
  const [datas, setDatas] = useState<any>([]);

  useEffect(() => {
    const infos = products?.find((product) => product.title === active);

    if (infos) {
      setDatas(infos.products);
    }
  }, [active, products]);

  return (
    <div className="md:container md:mx-auto sm:px-0 px-5 mt-16">
      <div className="grid grid-cols-2 gap-4">
        <div className="sm:col-span-1 col-span-2">
          <span className="text-sm font-normal text-[#EA2427] dark:text-[#646464]">
            Özəl təkliflər
          </span>
          <h6 className="sm:text-[24px] text-xl font-bold text-[#3F3F3F] dark:text-white">
            Payız gəldi, şərtlər dahada sadələşdi
          </h6>
        </div>

        <div
          className={`${styles.btnBox} sm:col-span-1 col-span-2 dark:bg-[#2B2B2B]`}
        >
          <ul className={styles.list}>
            {products?.map((product: any, index: number) => (
              <li key={index}>
                <button
                  className={
                    active === product.title
                      ? "text-[#3F3F3F] dark:text-white"
                      : "text-[#C0C0C0] dark:text-[#7F7F7F]"
                  }
                  onClick={() => setActive(product.title)}
                >
                  {product.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2  sm:gap-x-8 gap-x-4 gap-y-24 mt-[100px]">
        {!datas
            ?
            Array.from({ length: 8 }).map((_, index) => (
              <Skeleton key={index} width="100%" height="100%" />
            ))
            : 
            datas.map((data: any, index : number) => <Card key={index} data={data} />)}

      </div>
    </div>
  );
};

export default Index;
