import { useQuery } from "react-query";
import { request } from "../../../config/request";


export const useGetPhones = () => {
    return useQuery({
        queryKey:["get-phones"],
        queryFn: () =>request.get("/phones").then((res)=> res.data)
    })
}