import { NavbarComponent } from "@/components/Navbar/NavbarComponent"
import Head from "next/head"


type LayoutProp = {
    children: React.ReactNode
}


const Layout = ({ children }: LayoutProp) => {

    return (
        <>
            <Head>
                <title>Page Title</title>
            </Head>
            <NavbarComponent />
            <main className="flex flex-col items-center justify-center w-full h-[100vh] bg-main gap-6">
                {children}
            </main>
        </>
    )
}


export default Layout;