import { ID } from "node-appwrite";
import { DATABASE_ID, databases, SPAIN_COLLECTION_ID } from "../appwrite.config";

export const createSpainRecord = async (
    spaiParam: CreateSpainParam
  ) => {
    try {
      const newAppointment = await databases.createDocument(
        DATABASE_ID!,
        SPAIN_COLLECTION_ID!,
        ID.unique(),
        spaiParam
      );
  
      //revalidatePath("/admin");
      return parseStringify(newAppointment);
    } catch (error) {
      console.error("An error occurred while creating a new appointment:", error);
    }
  };

  export const parseStringify = (value: any) => JSON.parse(JSON.stringify(value));