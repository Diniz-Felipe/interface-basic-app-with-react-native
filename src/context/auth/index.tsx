import axios from "axios";
import { useQuery, useMutation } from "@tanstack/react-query";

const url = 'https://jsonplaceholder.typicode.com/todos/107'//'http://localhost:4001/users';

const useAuth = () => {
    const { data, isLoading, isError, isFetched } = useQuery({
        queryKey: ['users'], // key 
        queryFn: async () => await axios.get(url), // get Users
        refetchInterval: 1000
    });
    
    return { 
        data,
        isLoading,
        isError
    }
};
// netInfo & get users with axios 
export { useAuth };