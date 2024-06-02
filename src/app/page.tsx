import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';

export default function Home() {
  return (
      <main className="bg-slate-300">
        <Layout className='pb-24 sm:pb-32 pt-10 lg:grid lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52'>
         <Hero/> 
        </Layout>
      </main>
  );
}
