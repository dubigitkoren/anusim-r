import { allSpainRecords, updateSpainRecord } from "@/lib/actions/spain.actions"
import useSpainStore from "../../lib/store/useSpainStore"
import { useEffect, useState } from "react";
import EditableRow from "./EditableRow";

interface Props {
    spainRows: CreateTblSpainParam[];
    onFilterChange: (count: number) => void;
    updateSpainRecord: (updatedRow: CreateTblSpainParam) => void;
}

export default function List({ spainRows, onFilterChange }: Props) {
    const [idTxt, setIdTxt] = useState('');
    const [dateTxt, setDateTxt] = useState('');
    const [tribunalTxt, setTribunalTxt] = useState('');
    const [typeTxt, setTypeTxt] = useState('');
    const [nameTxt, setNameTxt] = useState('');
    const [surnameTxt, setSurnameTxt] = useState('');
    const [aliasesTxt, setAliasesTxt] = useState('');
    const [locationOfBirthTxt, setLocationOfBirthTxt] = useState('');
    const [bishopricOfBirthTxt, setBishopricOfBirthTxt] = useState('');
    const [residenceTxt, setResidenceTxt] = useState('');
    const [bishopricOfResidenceTxt, setBishopricOfResidenceTxt] = useState('');
    const [sexTxt, setSexTxt] = useState('');
    const [ageTxt, setAgeTxt] = useState('');
    const [personalStatusTxt, setPersonalStatusTxt] = useState('');
    const [occupationTxt, setOccupationTxt] = useState('');
    const [familyTiesTxt, setFamilyTiesTxt] = useState('');
    const [typeOfCrimeTxt, setTypeOfCrimeTxt] = useState('');
    const [sentenceTxt, setSentenceTxt] = useState('');
    const [punishmentTxt, setPunishmentTxt] = useState('');
    const [additionalInformationTxt, setAdditionalInformationTxt] = useState('');
    const [filteredRows, setFilteredRows] = useState(spainRows);
    const [editingRowId, setEditingRowId] = useState<number | null>(null);

    const filterRows = () => {
        const newFilteredRows = spainRows.filter(row =>
            row.ID.toString().includes(idTxt) &&
            row.DateOfAuto.toString().includes(dateTxt) &&
            row.Tribunal.includes(tribunalTxt) &&
            row.TypeOfAuto.includes(typeTxt) &&
            row.Name.includes(nameTxt) &&
            row.Surname.includes(surnameTxt) &&
            row.Aliases.includes(aliasesTxt) &&
            row.LocationOfBirth.includes(locationOfBirthTxt) &&
            row.BishopricOfBirth.includes(bishopricOfBirthTxt) &&
            row.Residence.includes(residenceTxt) &&
            row.BishopricOfResidence.includes(bishopricOfResidenceTxt) &&
            row.Sex.includes(sexTxt) &&
            row.Age.toString().includes(ageTxt) &&
            row.PersonalStatus.includes(personalStatusTxt) &&
            row.Occupation.includes(occupationTxt) &&
            row.FamilyTies.includes(familyTiesTxt) &&
            row.TypeOfCrime.includes(typeOfCrimeTxt) &&
            row.Sentence.includes(sentenceTxt) &&
            row.Punishment.includes(punishmentTxt) &&
            row.AdditionalInformation.includes(additionalInformationTxt)
        );
        setFilteredRows(newFilteredRows);
        onFilterChange(newFilteredRows.length);
    };

    useEffect(() => {
        filterRows();
    }, [idTxt, dateTxt, tribunalTxt, typeTxt, nameTxt, surnameTxt, aliasesTxt, locationOfBirthTxt, bishopricOfBirthTxt, residenceTxt, bishopricOfResidenceTxt, sexTxt, ageTxt, personalStatusTxt, occupationTxt, familyTiesTxt, typeOfCrimeTxt, sentenceTxt, punishmentTxt, additionalInformationTxt, spainRows]);

    const handleEdit = (id: number) => {
        setEditingRowId(id);
    };

    const handleSave = (updatedRow: CreateTblSpainParam) => {
        updateSpainRecord(updatedRow);
        const updatedRows = spainRows.map(row => row.ID === updatedRow.ID ? updatedRow : row);
        setFilteredRows(updatedRows);
        setEditingRowId(null);
    };

    const handleCancel = () => {
        setEditingRowId(null);
    };

    return (
        <>
            <table className="myTable">
                <tbody>
                    <tr>
                        <th></th>
                        <th className="wide1">ID<p /><input className="inputID" onChange={e => setIdTxt(e.target.value)} /></th>
                        <th className="wide1">Date Of Auto<p /><input className="inputID" onChange={e => setDateTxt(e.target.value)} /></th>
                        <th className="wide2">Tribunal<p /><input className="inputID" onChange={e => setTribunalTxt(e.target.value)} /></th>
                        <th className="wide3">Type Of Auto<p /><input className="inputID" onChange={e => setTypeTxt(e.target.value)} /></th>
                        <th className="wide4">Name<p /><input className="inputID" onChange={e => setNameTxt(e.target.value)} /></th>
                        <th className="wide16">Surname<p /><input className="inputID" onChange={e => setSurnameTxt(e.target.value)} /></th>
                        <th className="wide5">Aliases<p /><input className="inputID" onChange={e => setAliasesTxt(e.target.value)} /></th>
                        <th className="wide10">Location Of Birth<p /><input className="inputID" onChange={e => setLocationOfBirthTxt(e.target.value)} /></th>
                        <th className="wide17">Bishopric Of Birth<p /><input className="inputID" onChange={e => setBishopricOfBirthTxt(e.target.value)} /></th>
                        <th className="wide11">Residence<p /><input className="inputID" onChange={e => setResidenceTxt(e.target.value)} /></th>
                        <th className="wide18">Bishopric Of Residence<p /><input className="inputID" onChange={e => setBishopricOfResidenceTxt(e.target.value)} /></th>
                        <th className="wide6">Sex<p /><input className="inputID" onChange={e => setSexTxt(e.target.value)} /></th>
                        <th className="wide15">Age<p /><input className="inputID" onChange={e => setAgeTxt(e.target.value)} /></th>
                        <th className="wide7">Personal Status<p /><input className="inputID" onChange={e => setPersonalStatusTxt(e.target.value)} /></th>
                        <th className="wide8">Occupation<p /><input className="inputID" onChange={e => setOccupationTxt(e.target.value)} /></th>
                        <th className="wide9">Family Ties<p /><input className="inputID" onChange={e => setFamilyTiesTxt(e.target.value)} /></th>
                        <th className="wide12">Type Of Crime<p /><input className="inputID" onChange={e => setTypeOfCrimeTxt(e.target.value)} /></th>
                        <th className="wide13">Sentence<p /><input className="inputID" onChange={e => setSentenceTxt(e.target.value)} /></th>
                        <th className="wide19">Punishment<p /><input className="inputID" onChange={e => setPunishmentTxt(e.target.value)} /></th>
                        <th className="wide14">Additional Information<p /><input className="inputID" onChange={e => setAdditionalInformationTxt(e.target.value)} /></th>
                    </tr>
                    {filteredRows.map((row) => (
                        editingRowId === row.ID ? (
                            <EditableRow
                                key={row.ID}
                                row={row}
                                onSave={handleSave}
                                onCancel={handleCancel}
                            />
                        ) : (
                            <tr key={row.ID}>
                                <td>
                                    <button onClick={() => handleEdit(row.ID)} className="buttonE">Edit</button>
                                </td>
                                <td>{row.ID}</td>
                                <td>{row.DateOfAuto.toString()}</td>
                                <td>{row.Tribunal}</td>
                                <td>{row.TypeOfAuto}</td>
                                <td>{row.Name}</td>
                                <td>{row.Surname}</td>
                                <td>{row.Aliases}</td>
                                <td>{row.LocationOfBirth}</td>
                                <td>{row.BishopricOfBirth}</td>
                                <td>{row.Residence}</td>
                                <td>{row.BishopricOfResidence}</td>
                                <td>{row.Sex}</td>
                                <td>{row.Age}</td>
                                <td>{row.PersonalStatus}</td>
                                <td>{row.Occupation}</td>
                                <td>{row.FamilyTies}</td>
                                <td>{row.TypeOfCrime}</td>
                                <td>{row.Sentence}</td>
                                <td>{row.Punishment}</td>
                                <td>{row.AdditionalInformation}</td>

                            </tr>
                        )
                    ))}
                </tbody>
            </table>
            <style jsx>{`
             .buttonE {
                background-color: blue;
                
                border-radius: 5px;
                color: white;
                padding-right: 8px;
                padding-left: 8px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 16px;
                }
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
                background-color: rgb(220 252 231 / var(--tw-bg-opacity, 1));
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

            .inputID{
                width:60px;
border: 1px solid purple;
                border-radius: 4px;
                color: purple;
                font-size: 16px;                
            }
            .wide1{
                width:120px;
            }
            .wide2{
                wi6th:120border: 1px solid purple;
                border-radius: 4px;
                color: purple;
                font-size: 16px;
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
                width:160px;
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