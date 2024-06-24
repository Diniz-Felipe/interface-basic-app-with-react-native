import React from "react";
import { RenderSearchItem } from "./RenderSearchItem";

export interface IData {
    id: number | string;
    name: string;
    description: string;
    imageURL: string;
};

const URL = "https://jsonplaceholder.typicode.com/todos/10"

const DATA = [
    {
        id: 1,
        name: "Felipe",
        description: `Desc`,
        imageURL: "imageURl",
    },
    {
        id: 2,
        name: "Felipe",
        description: "Desc",
        imageURL: "imageURL",
    },
]

const actionSearchItem = () => {
    console.info('textue')
}

// const fetchSearchAxios = async (): Promise<IData> => {
//     const response = await axios.get(URL)
//     console.log( response.data)
//     // return response.data
//     const DATA = response.data;
//     return DATA;
// }

export const useSearch = () => {

    return { RenderSearchItem, DATA, actionSearchItem }
};
