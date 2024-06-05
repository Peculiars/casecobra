import Link from "next/link"
import Layout from "./Layout"
import { buttonVariants } from "./ui/button"
import { ArrowRight } from "lucide-react"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"

const Navbar = async() => {
    const {getUser} = getKindeServerSession()
    const user = await getUser()
    const isAdmin = false
    return (
        <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 transition-all backdrop-blur-lg">
            <Layout className="flex items-center justify-between">
                <div className="flex items-center justify-between w-full ">
                    <Link href='/' className="font-semibold flex z-40 border-b border-zinc-200">
                        case <span className="text-green-600">cobra</span>
                    </Link>

                    <div className="flex items-center h-full space-x-4">
                        {user ? (
                            <>
                                <Link href='/api/auth/logout' className={buttonVariants({size: 'sm', variant: 'ghost'})}>
                                    Sign out
                                </Link>
                                {isAdmin? (
                                    <Link href='/api/auth/logout' className={buttonVariants({size: 'sm', variant: 'ghost'})}>
                                        Dashboard
                                    </Link>
                                ) : null}
                                <Link href='/configure/upload' className={buttonVariants({size: 'sm', className: 'hidden sm:flex items-center gap-1'})}>
                                    Create case <ArrowRight className="ml-1.5 h-5 w-5"/>
                                </Link>
                            </>
                        ) : (
                            <>
                                 <Link href='/api/auth/register' className={buttonVariants({size: 'sm', variant: 'ghost'})}>
                                    Sign up
                                </Link>
                                
                                <Link href='/api/auth/login' className={buttonVariants({size: 'sm', variant: 'ghost'})}>
                                    Login
                                </Link>

                                <div className="h-8 w-px bg-zinc-200 hidden sm:block"/>
                                <Link href='/configure/upload' className={buttonVariants({size: 'sm', className: 'hidden sm:flex items-center gap-1'})}>
                                    Create case <ArrowRight className="ml-1.5 h-5 w-5"/>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </Layout>
        </nav>
    )
}

export default Navbar