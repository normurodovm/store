import { useNavigate } from "react-router-dom"
import { useGetCatalog } from "../services/query/useGetCatalog"
import { useGetCatalog2 } from "../services/query/useGetcatalog2"

export const Catalog = () => {
    const navigate = useNavigate()
    const handleclick = (name) => {
        console.log(name);
        navigate(`/phones-catalog/${name}`)
    }
    const {data,isLoading} = useGetCatalog()
    return <>
    <div className="flex gap-5 justify-center container">
        {isLoading?<h1>Loading...</h1>:data?.map((item) => <div key={item.id}>
            <div onClick={()=>handleclick(item.name)} className="flex gap-4 items-center max-w-[241px] rounded-sm px-4 py-[12px] bg-[#f6f6f6]">
            <img className=" w-[96px]" src={item.img} alt="" />
            <div>
                <p className="text-[16px] font-medium">{item.text}</p>
            </div>
            </div>
        </div>)}
        </div>
    </>
}