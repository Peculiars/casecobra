import Link from "next/link"
import Layout from "./Layout"

const Navbar = () => {
    return (
        <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 transition-all backdrop-blur-lg">
            <Layout>
                <div className="flex items-center justify-between border-b border-zinc-200">
                    <Link href='/' className="font-semibold flex z-40">
                        case <span className="text-green-600">cobra</span>
                    </Link>
                </div>
            </Layout>
        </nav>
    )
}

export default Navbar