import axios, { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import { IUser } from "@/src/types";

const URL = "https://jsonplaceholder.typicode.com/users/1";

const getOne = async (url: string, id: string) => {

    try {
        const { data } = await axios.get<IUser>(url, {
            // params: { ID: id}
        })

        return data
    } catch (error) {
        if (error instanceof AxiosError) {
            console.log(error)
            throw new Error(error.message)
        }
    }
};

const useAuth = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['user'], // key 
        queryFn: () => getOne(URL, '12')// get user
    });
    // console.log(data)

    return {
        data,
        isLoading,
        isError
    };
};
// netInfo & get users with axios 
export { useAuth };