import { useState } from "react";

interface EditableRowProps {
    row: CreateTblSpainParam;
    onSave: (updatedRow: CreateTblSpainParam) => void;
    onCancel: () => void;
}

export default function EditableRow({ row, onSave, onCancel }: EditableRowProps) {
    const [editedRow, setEditedRow] = useState(row);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEditedRow({ ...editedRow, [name]: value });
    };

    return (
        <>
            <tr>
                <td>
                    <button onClick={() => onSave(editedRow)} className="buttonE btnSave">Save</button>
                    <button onClick={onCancel} className="buttonE btnCancel">Cancel</button>
                </td>
                <td><input name="ID" value={editedRow.ID} onChange={handleChange} /></td>
                <td><input name="DateOfAuto" value={editedRow.DateOfAuto.toString()} onChange={handleChange} /></td>
                <td><input name="Tribunal" value={editedRow.Tribunal} onChange={handleChange} /></td>
                <td><input name="TypeOfAuto" value={editedRow.TypeOfAuto} onChange={handleChange} /></td>
                <td><input name="Name" value={editedRow.Name} onChange={handleChange} /></td>
                <td><input name="Surname" value={editedRow.Surname} onChange={handleChange} /></td>
                <td><input name="Aliases" value={editedRow.Aliases} onChange={handleChange} /></td>
                <td><input name="LocationOfBirth" value={editedRow.LocationOfBirth} onChange={handleChange} /></td>
                <td><input name="BishopricOfBirth" value={editedRow.BishopricOfBirth} onChange={handleChange} /></td>
                <td><input name="Residence" value={editedRow.Residence} onChange={handleChange} /></td>
                <td><input name="BishopricOfResidence" value={editedRow.BishopricOfResidence} onChange={handleChange} /></td>
                <td><input name="Sex" value={editedRow.Sex} onChange={handleChange} /></td>
                <td><input name="Age" value={editedRow.Age} onChange={handleChange} /></td>
                <td><input name="PersonalStatus" value={editedRow.PersonalStatus} onChange={handleChange} /></td>
                <td><input name="Occupation" value={editedRow.Occupation} onChange={handleChange} /></td>
                <td><input name="FamilyTies" value={editedRow.FamilyTies} onChange={handleChange} /></td>
                <td><input name="TypeOfCrime" value={editedRow.TypeOfCrime} onChange={handleChange} /></td>
                <td><input name="Sentence" value={editedRow.Sentence} onChange={handleChange} /></td>
                <td><input name="Punishment" value={editedRow.Punishment} onChange={handleChange} /></td>
                <td><input name="AdditionalInformation" value={editedRow.AdditionalInformation} onChange={handleChange} /></td>

            </tr>

            <style jsx>{`
                .buttonE {
                
                border-radius: 5px;
                color: white;
                 padding-right: 8px;
                padding-left: 8px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 16px;
                }
                .btnCancel{
                    background-color: red;
                    margin-left: 5px;
                }
                .btnSave{
                    background-color: green;
                    
                }
  
                tr{background-color: #99C68E ;}
                tr:hover {background-color: #e6b0aa;}
                td{
                    border: 1px solid #ddd;
                    padding: 8px;
                }

   
   
            `}</style>
        </>
    );
}