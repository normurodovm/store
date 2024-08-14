import { useQuery } from "react-query";
import { request } from "../../../config/request";



export const useGetBanner = () => {
    return useQuery({
        queryKey:["get-banner"],
        queryFn: ()=> request.get("/banners").then((res)=> res.data)
    })
}