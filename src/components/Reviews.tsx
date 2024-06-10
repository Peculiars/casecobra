import Image from "next/image"
import Layout from "./Layout"
import wbpa from "../../public/assets/wpab.png"

const Reviews =()=>{
    return(
        <Layout className="relative max-w-5xl">
            <Image aria-hidden src={wbpa} alt="review image" className="absolute select-none hidden lg-block -left-32 top-1/3"/>
        </Layout>
    )
}

export default Reviews