import * as sdk from 'node-appwrite';

export const {
    PROJECT_ID, API_KEY, DATABASE_ID, SPAIN_COLLECTION_ID, TBL_SPAIN_COLLECTION_ID, NEXT_PUBLIC_ENDPOINT, 
} = process.env;

const client = new sdk.Client();

client.setEndpoint(NEXT_PUBLIC_ENDPOINT!).setProject(PROJECT_ID!).setKey(API_KEY!);

export const databases = new sdk.Databases(client);