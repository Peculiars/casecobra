import { cn } from "@/lib/utils"
import { Star } from "lucide-react"

const FiveStars =({className}: {className?: string})=>{
    return (
        <div className="flex gap-0.5 mb-2">
            <Star className={cn("h-5 w-5 text-green-600 fill-green-600", className)}/>
            <Star className={cn("h-5 w-5 text-green-600 fill-green-600", className)}/>
            <Star className={cn("h-5 w-5 text-green-600 fill-green-600", className)}/>
            <Star className={cn("h-5 w-5 text-green-600 fill-green-600", className)}/>
            <Star className={cn("h-5 w-5 text-green-600 fill-green-600", className)}/>
        </div>
    )
}

export default FiveStars