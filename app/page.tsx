'use client'
import { allSpainRecords } from "@/lib/actions/spain.actions"
import useSpainStore from "../lib/store/useSpainStore"
import { useEffect } from "react";

export default function Page() {
    const { Data, setData } = useSpainStore((state) => state);

    const getd = async () => {
        const d = await allSpainRecords();
        setData(d);
    }

    useEffect(() => {
        const d = getd();

    }, []);

    const data = Data;
    
    return (
        <table>
            <tbody>
                <tr>
                    <th>Date Of Auto</th>
                    <th>Tribunal</th>
                    <th>Type Of Auto</th>
                    <th>Name</th>
                    <th>Aliases</th>
                    <th>Sex</th>
                    <th>Personal Status</th>
                    <th>Occupation</th>
                    <th>Family Ties</th>
                    <th>Location Of Birth</th>
                    <th>Residence</th>
                    <th>Type Of Crime</th>
                    <th>Sentence</th>
                    <th>Additional Information</th>
                    <th>Age</th>
                    <th>Surname</th>
                    <th>Bishopric Of Birth</th>
                    <th>Bishopric Of Residence</th>
                    <th>Punishment</th>
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
    )
}