import { axiosInstance } from "./Axios";

export const GET = async (url, params) => await axiosInstance.get(url, { params })
export const POST = async (url, data) => await axiosInstance.post(url, data)
export const DELETE = async (url, params) => await axiosInstance.delete(url, { params });
export const PUT = async (url, data) =>await axiosInstance.put(url, data);
