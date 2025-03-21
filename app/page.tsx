'use client'
import { allSpainRecords, updateSpainRecord } from "@/lib/actions/spain.actions"
import useSpainStore from "../lib/store/useSpainStore"
import { Suspense, useEffect, useState } from "react";
import List from "./components/list";
import TableLoader from "./components/TableLoader";

export default function Page() {

    const [spainData, setSpainData] = useState<CreateTblSpainParam[]>([]);
    const [filteredCount, setFilteredCount] = useState(0);

    const handleFilterChange = (count: number) => {
        setFilteredCount(count);
    };

    const updateRow = async(updatedRow: CreateTblSpainParam) => {
        await updateSpainRecord(updatedRow);
        setSpainData(prevData => prevData.map(row => row.ID === updatedRow.ID ? updatedRow : row));
    }

    const getd = async () => {
        const d = await allSpainRecords();        
        setSpainData(d);
    }

    useEffect(() => {
        const d = getd();
    }, []);

    return (
        <>
            <div className="contain">
                <div className="">
                    <h1>Spain Data</h1>
                    <span className="font-mono text-lg font-extrabold text-purple-600">{filteredCount} Records</span>
                </div>
                <Suspense fallback={<TableLoader />}>
                    <div className="max-h-[70vh] overflow-scroll">
                        <List spainRows={spainData} onFilterChange={handleFilterChange} updateSpainRecord={updateSpainRecord} />
                    </div>
                </Suspense>
            </div>

            <style jsx>{`
             .contain {
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