import axios from "axios";
import { BASE_URL } from "../utils/system";

export function findById(userName: string) {
    return axios.get(`${BASE_URL}/users/${userName}`)
}