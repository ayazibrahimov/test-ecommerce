import { Inter } from 'next/font/google'
import Products from '@/components/Pages/Products/index'
import Features from '@/components/Pages/Features/index'
import Items from '@/components/Pages/Items/index'
import { SliderData, FeatureData,CategoriesList } from '@/types/interfaces';


interface HomeProps {
  slider: SliderData[]
  features: FeatureData[]
  products : CategoriesList[]
}



function Home({slider, features, products}:HomeProps) {
  return (
    <main>
      <Products slider={slider}/>
      <Features features={features} />
      <Items products={products}/>
    </main>
  )
}



export const getServerSideProps = async () => {
  try {
    const [sliderRes, featuresRes, productsRes] = await Promise.all([
      fetch('https://api.b-e.az/task/big-sliders'),
      fetch('https://api.b-e.az/task/features'),
      fetch('https://api.b-e.az/task/special-offer'),
    ]);

    if (!sliderRes.ok || !featuresRes.ok || !productsRes.ok) {
      throw new Error('Failed to fetch data');
    }
    
    const [sliderData, featuresData, productsData] = await Promise.all([
      sliderRes.json(),
      featuresRes.json(),
      productsRes.json()
    ]);

    return { 
      props: { 
        slider: sliderData,
        features: featuresData,
        products: productsData
      } 
    };
  } catch (error) {
    console.error(error);
    return { 
      props: { 
        slider: [] 
      } 
    };
  }
}

export default Home;