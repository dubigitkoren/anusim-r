declare interface CreateSpainParam{
    name:string;
    age:number;
    birth:Date;
}

declare interface CreateTblSpainParam{
    ID: number;
    DateOfAuto:Date;
    Tribunal:string;
    TypeOfAuto:string;
    Name:string;
    Aliases:string
    Sex:string;
    PersonalStatus:string;
    Occupation:string;
    FamilyTies:string;
    LocationOfBirth:string;
    Residence:string;
    TypeOfCrime:string;
    Sentence:string;
    AdditionalInformation:string;
    Age:number;  
    Surname:string;
    BishopricOfBirth:string;
    BishopricOfResidence:string;
    Punishment:string;    
}

declare interface TblSpainData {
    TotalCount: number;
    Data: CreateTblSpainParam[];
}