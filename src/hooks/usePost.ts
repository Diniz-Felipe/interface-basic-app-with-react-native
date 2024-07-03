import axios from "axios";
import { IUser } from "../types";

const url = 'localhost:4001/users'

export const usePost = async ({ name, email, password }: IUser) => {
    try {
        const response = await axios.post(url, { name, email, password })
        console.log(`created ${response.status}!`)

        return response.status
    } catch (error) {
        console.log(error)
    }
};