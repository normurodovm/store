import { useQuery } from "react-query";
import { request } from "../../../config/request";


export const useGetCatalog = () => {
    return useQuery({
        queryKey:["get-catalog"],
        queryFn:() => request.get("/catalog").then((res)=>res.data)
    })
}