"use server";
import { ID, Query } from "node-appwrite";
import { DATABASE_ID, databases, SPAIN_COLLECTION_ID, TBL_SPAIN_COLLECTION_ID, API_URL } from "../appwrite.config";
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

    const response = await fetch(API_URL!, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'rejectUnauthorized': 'false'
        },
    });

    const data = await response.json() as TblSpainData;

    return data.Data;
}

export async function updateSpainRecord(updatedRow: CreateTblSpainParam) {

    const response = await fetch(API_URL! + '/' + updatedRow.ID, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedRow),
    });

    if (!response.ok) {
        throw new Error('Failed to update the record ' +  response.url +' '+response.statusText);
    }
}

export const createTblSpainRecord = async (tblSpainParam: CreateTblSpainParam) => {
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