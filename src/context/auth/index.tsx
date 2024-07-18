import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const URL = 'http://localhost:4001/authOne';

const getOne = async (id: string | number, url: string) => {
    const { data, status } = await axios.get(`${url}/:${id}`);
    const result = data
    return result
};

const useAuth = (id?: string |  number) => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['user', id], // key 
        queryFn: () => getOne(URL, id = "2"), // get user
    });
    //console.log(data)

    return { 
        data,
        isLoading,
        isError
    };
};
// netInfo & get users with axios 
export { useAuth };