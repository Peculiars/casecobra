import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Value from '@/components/Value';

export default function Home() {
  return (
      <main>
        <Layout>
         <Hero/> 
        </Layout>
        <Value/>
      </main>
  );
}
