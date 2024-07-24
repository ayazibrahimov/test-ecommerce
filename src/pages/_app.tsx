import '@/styles/globals.css';
import '@/styles/reset.css';

import type { AppProps } from 'next/app';
import { PrimeReactProvider } from 'primereact/api'; // Update the import path
import Layout from '@/components/layout';

import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PrimeReactProvider>
      <main className={inter.className}>
       <Layout>
         <Component {...pageProps} />
       </Layout>
      </main>
    </PrimeReactProvider>
  );
}
