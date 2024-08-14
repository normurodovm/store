import { useMutation } from "react-query";
import { request } from "../../../config/request";


export const usePostKorzinka = () => {
    return useMutation({
        mutationFn:(data)=> request.post("/korzinka",data).then((res)=>res.data)
    })
}