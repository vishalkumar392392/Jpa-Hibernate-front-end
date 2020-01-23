export class Course{

    id:number;
    name:string;
    reviews:{
        id:number,
        rating:string,
        description:string
    }[];
    students:{
        id:number,
        name:string,
        passport:{id:number,number:string}
    }[];
}