import RegisterComponent from "@/components/Users/Register/RegisterComponent"
import { NextPage } from "next"
import Head from "next/head";


const RegisterPage: NextPage = () => {

    return (
        <>
            <Head>
                <title>Why don't I have money!? || New Account</title>
            </Head>
            <h2 className="text-4xl text-amber-600">Sign Up.</h2>
            <RegisterComponent />
        </>
    )
}


export default RegisterPage;