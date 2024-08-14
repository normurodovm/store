import { useQuery } from "react-query";
import { request } from "../../../config/request";


export const useGetAdd = () => {
    return useQuery({
        queryKey:["get-adds"],
        queryFn:()=> request.get("/ads").then((res)=> res.data)
    })
}