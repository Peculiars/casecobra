import { Icons } from "./Icons"
import Image from "next/image"
import snake2 from "../../public/assets/snake-2.png"
import { Check, Star } from "lucide-react"
import user1 from "../../public/users/user-1.png"
import user4 from "../../public/users/user-4.jpg"
import FiveStars from "./FiveStars"


const Testimonial = ()=>{
        
    return(
        <section className="bg-slate-300 mt-10">
            <div className="flex flex-col items-center py-10 gap-16 sm:gap-32">
                <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 items-center">
                    <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">What our <span className="relative px-2">customers <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-green-500"/></span> say</h2>
                    <Image src={snake2} alt="snake image" className="w-24 order-0 lg:order-2"/>
                </div>

                <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
                    <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">

                        <FiveStars/>
                        <div className="text-lg leading-8">
                            <p>"The case feels durable and I even got a compliment on the design. Had the case for two and half months now and <span className="p-0.5 bg-slate-800 text-white">the image is super clear</span>, on the case I had before, the image startedfading into yellow-ish color after a couple weeks. Love it."</p>
                        </div>
                        <div className="flex gap-4 mt-2 pb-10">
                            <Image src={user1} alt="user" className="rounded-full h-12 w-12 object-cover"/>
                            <div className="flex flex-col">
                                <p className="font-semibold">Jonathan</p>
                                <div className="flex gap-1.5 items-center text-zinc-600">
                                    <Check className="h-4 w-4 stroke-[3px] text-green-600"/>
                                    <p className="text-sm">Verified purchase</p>
                                </div>
                            </div>
                        </div>

                            <FiveStars/>
                        <div className="text-lg leading-8">
                            <p>"I usually keep my phone together with my keys in my pocket and that led to some pretty heavy scratchmarks on all of my last phone cases. This one, besides a barely noticeable scratch on the corner, <span className="p-0.5 bg-slate-800 text-white">looks brand new after about half a year</span>. I dig it."</p>
                        </div>
                        <div className="flex gap-4 mt-2">
                            <Image src={user4} alt="user" className="rounded-full h-12 w-12 object-cover"/>
                            <div className="flex flex-col">
                                <p className="font-semibold">Josh</p>
                                <div className="flex gap-1.5 items-center text-zinc-600">
                                    <Check className="h-4 w-4 stroke-[3px] text-green-600"/>
                                    <p className="text-sm">Verified purchase</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial