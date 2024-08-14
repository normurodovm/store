import React from "react";
import { useGetCatalog } from "../pages/services/query/useGetCatalog";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Modal = ({ isOpen, onClose, children }) => {
  const {data,isLoading} = useGetCatalog()
  const navigate = useNavigate()
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50  ">
      <div className="bg-white rounded-lg shadow-lg p-6 relative w-[900px]">
        <button
          onClick={onClose}className="absolute top-2 right-2 text-gray-600 hover:bg-red-500 p-2 hover:text-white rounded-[5px] hover:text-[17px]">
          X
        </button>
        {children}
        <div className="flex flex-wrap gap-5 justify-center container py-20">
        {isLoading?<h1>Loading...</h1>:data?.map((item) => <div key={item.id}>
          <Link to={`/category${item.id}`}>
            <div className="flex gap-4 items-center max-w-[241px] rounded-sm px-4 py-[12px] bg-[#f6f6f6]">
            <img className=" w-[96px]" src={item.img} alt="" />
            <div>
                <p className="text-[16px] font-medium">{item.text}</p>
            </div>
            </div>
          </Link>
        </div>)}
        </div>
      </div>
    </div>
  );
};
