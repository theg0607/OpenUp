import { API } from "../Utils/Axiosinstance";

export async function signup(body){
    try {
        const result=await API.post("/auth/signup",body)
        return result?.data?.token;
    } catch (error) {
        console.log(error);
    }
}