import { LoginComponent } from "@/components/Users/Login/LoginComponent"
import { NextPage } from "next"
import Head from "next/head"


const LoginPage: NextPage = () => {

    return (
        <>
            <Head>
                <title>Why don't I have money!? || Login</title>
            </Head>
            <h2 className="text-4xl text-amber-600">Login</h2>
            <LoginComponent />
        </>
    )
}

export default LoginPage;