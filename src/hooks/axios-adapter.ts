import axios, { AxiosError, AxiosResponse } from "axios";
import { HttpRequest, HttpClient } from "@/src/http";

export const httpClientFactory = (): HttpClient => new AxiosHttpClientAdapter();

// fetch with axios
export class AxiosHttpClientAdapter implements HttpClient {
    async request(data: HttpRequest) {
        let axiosResponse: AxiosResponse;

        try {
            axiosResponse = await axios.request({
                url: data.url,
                method: data.method,
                data: data.body
            })
            
        } catch (error) {
            const _error = error as AxiosError<{ message: string }>;
            throw new Error(_error?.response?.data?.message);
        }
        return {
            statusCode: axiosResponse.status,
            body: axiosResponse?.data,
        }
    };
};