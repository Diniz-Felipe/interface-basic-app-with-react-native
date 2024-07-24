//import { RenderSearchItem } from "./RenderSearchItem";

export interface IData {
    id: number | string;
    name: string;
    description: string;
    imageURL: string;
};

const URL = "https://jsonplaceholder.typicode.com/todos/10";

const DATA: IData[] = [
    {
        id: 1,
        name: "DZ7",
        description: "test",
        imageURL: "imageURl",
    },
    {
        id: 2,
        name: "Abacaxi",
        description: "test",
        imageURL: "imageURL",
    },
    {
        id: 3,
        name: "Pera",
        description: "test",
        imageURL: "imageURL",
    },
    {
        id: 4,
        name: "Açucar",
        description: "test",
        imageURL: "imageURL",
    },
    {
        id: 5,
        name: "k.o",
        description: "",
        imageURL: "imageURL",
    },
]

const actionSearchItem = () => {
    console.info('textue')
}

export const useSearch = () => {

    return { 
        //RenderSearchItem, 
        DATA, 
        actionSearchItem
    }
};
