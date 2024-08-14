import { useQuery } from "react-query";
import { request } from "../../../config/request";
import { useParams } from "react-router-dom";


export const useGetCatalog2 = () => {
    const {name} = useParams()
    return useQuery({
        queryKey:["catalog-get"],
        queryFn:()=> request.get(`/${name}`).then((res)=>res.data),
        onSuccess:()=>{
            console.log(name);
        }
    })
}