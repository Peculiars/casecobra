import { Check, Star } from 'lucide-react'
import snake1 from '../../public/assets/snake-1.png'
import user1 from '../../public/users/user-1.png'
import user2 from '../../public/users/user-2.png'
import user3 from '../../public/users/user-3.png'
import user4 from '../../public/users/user-4.jpg'
import user5 from '../../public/users/user-5.jpg'
import yourImg from '../../public/assets/your-image.png'
import line from '../../public/assets/line.png'
import Image from 'next/image'
import Phone from './Phone'
const Hero = () =>{
    return (
        <section className='lg:grid lg:grid-cols-3 lg:gap-x-0 xl:gap-x-8 lg:py-20'>
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-28 -top-20 left-0 lg:block hidden">
                <Image src={snake1} alt="snake image" width={100} height={100}/>
              </div>
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-5xl text-gray-900 md:text-6xl lg:text-7xl">Your Image on a <span className=" bg-green-600 text-white px-2">Custom</span>{' '}Phone Case</h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left md:text-wrap text-balance">Capture your favorite memories with your own, {' '} <span className="font-semibold">one-of-one</span>{' '}phone case. CaseCobra allows you to protect your memories, not just your phone case.</p>

              <ul className="flex flex-col items-center space-y-2 text-left font-medium mt-8 sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className='h-5 w-5 shrink-0 text-green-600'/>
                    High-quality, durable material
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className='h-5 w-5 shrink-0 text-green-600'/>
                    5 year print guarantee
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className='h-5 w-5 shrink-0 text-green-600'/>
                    Modern iPhone models supported
                  </li>
                </div>
              </ul>
              
              <div className='mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5'>
                <div className='flex -space-x-4'>
                  <Image src={user1} alt='user image' height={10} width={10} className='h-10 w-10 inline-block rounded-full ring-2 ring-slate-100'/>
                  <Image src={user2} alt='user image' height={10} width={10} className='h-10 w-10 inline-block rounded-full ring-2 ring-slate-100'/>
                  <Image src={user3} alt='user image' height={10} width={10} className='h-10 w-10 inline-block rounded-full ring-2 ring-slate-100'/>
                  <Image src={user4} alt='user image' height={10} width={10} className='h-10 w-10 inline-block rounded-full ring-2 ring-slate-100'/>
                  <Image src={user5} alt='user image' height={10} width={10} className='h-10 w-10 inline-block rounded-full ring-2 ring-slate-100'/>
                </div>

                <div className='flex flex-col justify-between items-center sm:items-start'>
                  <div className='flex gap-0.5'>
                    <Star className='h-4 w-4 text-green-600 fill-green-600'/>
                    <Star className='h-4 w-4 text-green-600 fill-green-600'/>
                    <Star className='h-4 w-4 text-green-600 fill-green-600'/>
                    <Star className='h-4 w-4 text-green-600 fill-green-600'/>
                    <Star className='h-4 w-4 text-green-600 fill-green-600'/>
                  </div>
                  <p><span className='font-semibold'>1,250</span>{' '}happy customers</p>
                </div>
              </div>
            </div>
          </div>

          <div className='col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit'>
            <div className='relative md:max-w-xl'>
              <Image src={yourImg} alt='my image' className='absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block'/>
              <Image src={line} alt='line image' className='absolute w-20 -left-6 -bottom-6 select-none'/>
              <Phone className='w-64' imgSrc='/testimonials/1.jpg'/>
            </div>
          </div>
        </section>
    )
}

export default Hero