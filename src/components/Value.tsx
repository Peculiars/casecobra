import { Icons } from "./Icons"
import Image from "next/image"
import snake2 from "../../public/assets/snake-2.png"

const Value = ()=>{
    return(
        <section className="bg-slate-300 mt-10">
            <div className="flex flex-col items-center py-10 gap-16 sm:gap-32">
                <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 items-center">
                    <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">What our <span className="relative px-2">customers <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-green-500"/></span> say</h2>
                    <Image src={snake2} alt="snake image" className="w-24 order-0 lg:order-2"/>
                </div>
            </div>
        </section>
    )
}

export default Value