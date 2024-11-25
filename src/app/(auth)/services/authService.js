import {POST} from "@/config/ApiService";

export const login = async (email, password) => {
    return await POST('/login', {
        email,
        password,
    })
}
