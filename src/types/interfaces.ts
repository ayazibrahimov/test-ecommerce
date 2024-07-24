// types/interfaces.ts
export interface SliderData {
    name: string ;
    image: string;
    text: string;
    button_text: string;
    button_url: string;
    button_color: string;
    type: string;
    product_slug: string;
    news_slug: string;
  }


  export interface FeatureData {
    title: string | null,
    description: string,
    icon: string
  }

  interface PerMonth {
    month: string;
    price: number;
  }


  export interface ProductData{
    title: string,
    products : any
  }

  
  export interface Product {
    id: number;
    name: string;
    slug: string;
    price: number;
    discount: string;
    perMonth: PerMonth;
    quantity: number;
    reviewCount: number;
    published: string;
    rate: number;
    image: string;
    brand: string;
    color: number;
    categories: number[];
    properties: number[];
    is_basket: boolean;
    is_favorite: boolean;
    is_compare: boolean;
  }
  
  export interface IndexProps {
    data: Product;
  }
  
  export interface Product {
    id: number;
    name: string;
    slug: string;
    price: number;
    discount: string; 
    perMonth: PerMonth;
    quantity: number;
    reviewCount: number;
    published: string;
    rate: number;
    image: string;
    brand: string;
    color: number;
    categories: number[];
    properties: number[];
    is_basket: boolean;
    is_favorite: boolean;
    is_compare: boolean;
  }
  
  // Define Products interface
  export interface Products {
    id: number;
    name: string;
    slug: string;
    price: number;
    discount: string | number; 
    perMonth: PerMonth;
    quantity: number;
    reviewCount: number;
    published: string;
    rate: number;
    image: string;
    brand: string;
    color: number;
    categories: number[];
    properties: number[];
    is_basket: boolean;
    is_favorite: boolean;
    is_compare: boolean;
  }
  

  export interface Category {
    title: string;
    products: Products[]; 
  }
  
  export type CategoriesList = Category;


  export interface ItemsProps {
    products: Category[]; 
  }
  
  // Define ProductMajor as an array of Product
  export type ProductMajor = Product[];