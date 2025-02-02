import { create } from "zustand";
import { persist } from "zustand/middleware";


declare interface CreateTblSpainParam {
    ID: number;
    DateOfAuto: Date;
    Tribunal: string;
    TypeOfAuto: string;
    Name: string;
    Aliases: string
    Sex: string;
    PersonalStatus: string;
    Occupation: string;
    FamilyTies: string;
    LocationOfBirth: string;
    Residence: string;
    TypeOfCrime: string;
    Sentence: string;
    AdditionalInformation: string;
    Age: number;
    Surname: string;
    BishopricOfBirth: string;
    BishopricOfResidence: string;
    Punishment: string;
}

declare interface SpainState {

    Data: CreateTblSpainParam[];
    setData: (list: CreateTblSpainParam[])=> void;
}

const useSpainStore = create<SpainState>()(
    persist(
        (set, get) => ({
            Data: [],

            setData: (list: CreateTblSpainParam[]) => {
                set({
                    Data: list,
                })
            }
        }),
        {
            name: "spain-storage",
        }
    )
);

export default useSpainStore;