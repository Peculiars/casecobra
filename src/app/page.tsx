import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Testimonial from '@/components/Testimonial';

export default function Home() {
  return (
      <main>
        <Layout>
         <Hero/> 
        </Layout>
        <Testimonial/>
      </main>
  );
}
