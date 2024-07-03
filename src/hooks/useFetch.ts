import { useCallback, useEffect, useState } from "react"
import { HttpClient } from "../http";

type UseFetchProps = {
    url: string;
    httpClient: HttpClient;
};

export const useFetch =  <T>({ httpClient, url }: UseFetchProps) => {
    const [data, setData] = useState<T[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    
    const fetchData = useCallback( async () => {
        try {
            const response = await httpClient.request({
                url,
                method: 'get'
            })
            setData(response.body)

        } catch (error) {
            setError((error as Error).message)
        } finally {
            setIsLoading(false)
        }

    }, [httpClient, url]);
    
    useEffect (()=>{
        fetchData()
    }, [fetchData])

    return {
        data,
        isLoading,
        error
    };
};