// interface for the compound details table
export interface CompoundStruct{
    id:number,
    CompoundName:string,
    CompoundDescription:string,
    strImageSource:string,
    strImageAttribution:string,
    dateModified:string
}

export const baseUrl = 'http://localhost:4000/timestream/';
export const cardsPerPage = 12; //number of cards on each page