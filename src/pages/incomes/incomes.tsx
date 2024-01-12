import { IncomesListComponent } from "@/components/Incomes/IncomesListComponent";
import { NextPage } from "next";
import Head from "next/head";


const IncomesPage: NextPage = () => {

    return (
        <>
            <Head>
                <title>Why don't I have money!? || Incomes</title>
            </Head>
            <IncomesListComponent />
        </>
    )
}

export default IncomesPage