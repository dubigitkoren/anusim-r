"use server";
import { ID, Query } from "node-appwrite";
import { DATABASE_ID, databases, SPAIN_COLLECTION_ID, TBL_SPAIN_COLLECTION_ID } from "../appwrite.config";
import { parseStringify } from "../utils";

import useSpainStore from "../store/useSpainStore";

export const getSpainRecords = async () => {
    try {       

        const page1 = await databases.listDocuments(
            DATABASE_ID!,
            TBL_SPAIN_COLLECTION_ID!,
            [
                Query.limit(25),
            ]
        );

        //revalidatePath("/admin");
        return parseStringify(page1);
    } catch (error) {
        console.error("An error occurred while getSpainRecords:", error);
    }
};

export async function allSpainRecords() {
    //const {  setData } = useSpainStore((state) => state);

    const response = await fetch('https://anusimapi.runasp.net/spain', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },        
    });

    const data = await response.json() as TblSpainData;
    //setData(data.Data);
    return data.Data;
}

export const createTblSpainRecord = async ( tblSpainParam: CreateTblSpainParam) => {
    try {
        const newDocument = await databases.createDocument(
            DATABASE_ID!,
            TBL_SPAIN_COLLECTION_ID!,
            ID.unique(),
            tblSpainParam
        );

        //revalidatePath("/admin");
        return parseStringify(newDocument);
    } catch (error) {
        console.error("An error occurred while creating a new TblSpainRecord:", error);
    }
};    