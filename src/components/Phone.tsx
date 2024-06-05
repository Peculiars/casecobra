import { cn } from "@/lib/utils"
import { PhoneProps } from "@/types"
import Image from "next/image"
import darkTemplate from '../../public/assets/phone-template-dark-edges.png'
import lightTemplate from '../../public/assets/phone-template-white-edges.png'

const Phone = ({imgSrc, className, dark=false, ...props}: PhoneProps) =>{
    return(
        <div className={cn('relative pointer-events-none z-50 overflow-hidden', className)} {...props}>
            <Image src={dark? darkTemplate : lightTemplate} alt="phone-template image" className="pointer-events-none z-50 select-none"/>
            <div className="absolute -z-10 inset-0">
                <Image src={imgSrc} className="object-cover w-full" alt="uploaded image" width={60} height={60}/>
            </div>
        </div>
    )
}

export default Phone