import { useGetAdd } from "../services/query/useGetAdd"


export const Add = () => {
    const {data,isLoading} = useGetAdd()
    return <div className="flex p-10 justify-between">
        {isLoading? <h1>LOading...</h1>:data.map((item)=> <div className="container" key={item.id}>
            <img src={item.img} alt="" />
        </div>)}
    </div>
}