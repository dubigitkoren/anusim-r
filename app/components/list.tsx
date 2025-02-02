import { allSpainRecords } from "@/lib/actions/spain.actions"
import useSpainStore from "../../lib/store/useSpainStore"
import { useEffect, useState } from "react";


export default function List() {
    const { Data, setData } = useSpainStore((state) => state);
    const [loading, setLoading] = useState<boolean>(true);


    const getd = async () => {
        const d = await allSpainRecords();
        setLoading(false);
        setData(d);
    }

    useEffect(() => {
        const d = getd();

    }, []);

    const data = Data;

    return (
        <>
            {loading ? (
                <div className="loading">Loading...</div>
            ) : (
                <table className="myTable">
                    <tbody>
                        <tr>
                            <th className="wide1">Date Of Auto</th>
                            <th className="wide2">Tribunal</th>
                            <th className="wide3">Type Of Auto</th>
                            <th className="wide4">Name</th>
                            <th className="wide5">Aliases</th>
                            <th className="wide6">Sex</th>
                            <th className="wide7">Personal Status</th>
                            <th className="wide8">Occupation</th>
                            <th className="wide9">Family Ties</th>
                            <th className="wide10">Location Of Birth</th>
                            <th className="wide11">Residence</th>
                            <th className="wide12">Type Of Crime</th>
                            <th className="wide13">Sentence</th>
                            <th className="wide14">Additional Information</th>
                            <th className="wide15">Age</th>
                            <th className="wide16">Surname</th>
                            <th className="wide17">Bishopric Of Birth</th>
                            <th className="wide18">Bishopric Of Residence</th>
                            <th className="wide19">Punishment</th>
                        </tr>
                        {data.map((row) => (
                            <tr key={row.ID}>
                                <td>{row.DateOfAuto.toString()}</td>
                                <td>{row.Tribunal}</td>
                                <td>{row.TypeOfAuto}</td>
                                <td>{row.Name}</td>
                                <td>{row.Aliases}</td>
                                <td>{row.Sex}</td>
                                <td>{row.PersonalStatus}</td>
                                <td>{row.Occupation}</td>
                                <td>{row.FamilyTies}</td>
                                <td>{row.LocationOfBirth}</td>
                                <td>{row.Residence}</td>
                                <td>{row.TypeOfCrime}</td>
                                <td>{row.Sentence}</td>
                                <td>{row.AdditionalInformation}</td>
                                <td>{row.Age}</td>
                                <td>{row.Surname}</td>
                                <td>{row.BishopricOfBirth}</td>
                                <td>{row.BishopricOfResidence}</td>
                                <td>{row.Punishment}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            <style jsx>{`
            h1{
                color:purple;
                font-family: Georgia, serif;
                font-size: 46px;  
                font-weight: bold;
                
            }
            .loading{
                font-size: 23px;  
                color: red;
            }
            .myTable{
                width:max-content;
            }
            table {
                text-align: left;
                position: relative;
                border-collapse: collapse; 
            }
            th {
                border: 1px solid #ddd;
                padding: 8px;
                background: white;
                position: sticky;
                top: 0; /* Don't forget this, required for the stickiness */
                box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.4)
            }
            tr:nth-child(even){background-color: #f2f2f2;}
            tr:hover {background-color: #ddd;}
            td{
                border: 1px solid #ddd;
                padding: 8px;
            }
            .wide1{
                width:120px;
            }
            .wide2{
                width:120px;
            }
            .wide3{
                width:120px;
            }
            .wide6{
                width:100px;
            }
            .wide7{
                width:140px;
            }
            .wide15{
                width:60px;
            }
            .wide17{
                width:150px;
            }
            .wide18{
               width:200px;
            }
            .container {
              margin: 50px;
            }
            p {
              color: blue;
            }
          `}</style>

        </>
    )
}