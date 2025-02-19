'use client'
import { allSpainRecords, createTblSpainRecord } from "@/lib/actions/spain.actions"
import useSpainStore from "../lib/store/useSpainStore"
import { Suspense, useEffect, useState } from "react";
import List from "./components/list";
import TableLoader from "./components/TableLoader";

export default function Page() {
    const { Data, setData } = useSpainStore((state) => state);
    const [searchTxt, setSearchTxt] = useState('');
    const [spainData, setSpainData] = useState<CreateTblSpainParam[]>([]);

    const getd = async () => {
        const d = await allSpainRecords();
        setData(d);
        setSpainData(d);
    }

    useEffect(() => {
        const d = getd();
    }, []);

    useEffect(() => {
        if (searchTxt !== '') {

            let arr = Data.filter(function (item) {

                if (item.AdditionalInformation.indexOf(searchTxt) !== -1 ||
                    item.Age.toString().indexOf(searchTxt) !== -1 ||
                    item.Aliases.indexOf(searchTxt) !== -1 ||
                    item.BishopricOfBirth.indexOf(searchTxt) !== -1 ||
                    item.BishopricOfResidence.indexOf(searchTxt) !== -1 ||
                    item.DateOfAuto.toString().indexOf(searchTxt) !== -1 ||
                    item.FamilyTies.indexOf(searchTxt) !== -1 ||
                    item.LocationOfBirth.indexOf(searchTxt) !== -1 ||
                    item.Name.indexOf(searchTxt) !== -1 ||
                    item.Occupation.indexOf(searchTxt) !== -1 ||
                    item.PersonalStatus.indexOf(searchTxt) !== -1 ||
                    item.Punishment.indexOf(searchTxt) !== -1 ||
                    item.Residence.indexOf(searchTxt) !== -1 ||
                    item.Residence.indexOf(searchTxt) !== -1 ||
                    item.Sentence.indexOf(searchTxt) !== -1 ||
                    item.Sex.indexOf(searchTxt) !== -1 ||
                    item.Surname.indexOf(searchTxt) !== -1 ||
                    item.Tribunal.indexOf(searchTxt) !== -1 ||
                    item.TypeOfCrime.indexOf(searchTxt) !== -1 ||
                    item.TypeOfAuto.indexOf(searchTxt) !== -1)
                    return true;

                return false;
            });

            setSpainData(arr);
        }
        else
            setSpainData(Data);

    }, [searchTxt]);

    const updateSearch = (e: string) => {
        setSearchTxt(e);
    }

    return (
        <>
            <div className="container">
                <div className="">
                    <h1>Spain Data</h1>
                    <span className="font-mono text-lg font-extrabold text-purple-600">{spainData.length} Records</span>
                    <div className="mb-2">
                        <span className="mr-2">Search :</span>
                        <input type="search" className="border-2 p-1" onChange={e => updateSearch(e.target.value)} />
                    </div>
                </div>
                <Suspense fallback={<TableLoader />}>
                    <div className="max-h-[70vh] overflow-scroll">
                        <List spainRows={spainData} />
                    </div>
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