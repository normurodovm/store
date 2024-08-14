import { useParams } from "react-router-dom"
import { Phones } from "./phones"
import { useGetCatalog2 } from "../services/query/useGetcatalog2"
import { KorzinkaIcon } from "../../icons/korzinka-icon"





export const PhonesCatalog = () => {
    const {name} = useParams()
    const {data,isLoading} = useGetCatalog2()
    console.log(name);
    return <div className="flex flex-wrap w-[1200px] mx-auto gap-[30px]">
        {isLoading?  <h1>Loading...</h1>:data?.map((item)=><div className="container w-[250px] h-[350px] border" key={item.id}>
            <div className="">
            <img className="w-[165px] mx-auto" src={item.img} alt="" />
            <div className="max-w-[157px] mx-auto">
            <h2 className="font-normal text-[16px] inline">{item.title}</h2>
            <p className="font-normal text-[16px] inline">{item.brand}</p>
            <p className="font-normal text-[16px] inline">{item.color}</p>
            <p className="font-normal text-[16px] inline">{item.brand}</p>
            <div className="flex gap-3 items-center mt-3">
            <strong className="font-bold text-[16px] block">{item.price}</strong>
            <button><KorzinkaIcon/></button>
            </div>
            </div>
            </div>
            {/* <p>{item.ram}</p>
            <p>{item.geForce}</p> */}
            {/* <p>{item.core}</p>
            <p>{item.display}</p>
            <p>{item.memory}</p>
            <p>{item.weight}</p>
            <p>{item.details.display}</p>
            <p>{item.details.frequency}</p>
            <p>{item.details.weight}</p>
            <p>{item.details.security}</p>
            <p>{item.details.diagonal}</p> */}
        </div>)}

    </div>
}