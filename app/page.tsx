'use client'
import { allSpainRecords } from "@/lib/actions/spain.actions"
import useSpainStore from "../lib/store/useSpainStore"
import { Suspense, useEffect } from "react";
import List from "./components/list";
import TableLoader from "./components/TableLoader";

export default function Page() {
    // const { Data, setData } = useSpainStore((state) => state);

    // const getd = async () => {
    //     const d = await allSpainRecords();
    //     setData(d);
    // }

    // useEffect(() => {
    //     const d = getd();

    // }, []);

    // const data = Data;

    return (
        <>
            <div className="container">
                <h1>Spain Data</h1>
                <Suspense fallback={<TableLoader />}>
                    <List />
                </Suspense>

            </div>

            <style jsx>{`
             .container {
              margin: 50px;
            }
            h1{
                color:purple;
                font-family: Georgia, serif;
                font-size: 46px;  
                font-weight: bold;
                
            }
       
          `}</style>

        </>
    )
}