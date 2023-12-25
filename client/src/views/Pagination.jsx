import React from "react";
import { BsChevronDoubleLeft } from "react-icons/bs";
export default function Pagination({
  pageNumber,
  setCurrentPage,
  totalItem,
  perPage,
  showItem,
}) {
  let totalPage = Math.ceil(totalItem / perPage);
  let startPage = pageNumber;
  let dif = totalPage - pageNumber;
  if (dif <= showItem) {
    startPage = totalItem - showItem;
  }
  let endPage = startPage < 0 ? showItem : showItem + startPage;
  if (startPage <= 0) {
    startPage = 1;
  }
  const createBtn = () => {
    const btns =[]
    for(let i =startPage; i<endPage;i++){
              btns.push(
                <li onClick={()=> setCurrentPage(i)} className={`${pageNumber === i ? 'bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white':'bg-slate-700 hover:bg-indigo-500 shadow-lg hover:shadow-indigo-500/500 hover:text-white text-[#d0d2d6] '} w-[33px] h-[33px] rounded-full flex justify-center items-center cursor-pointer`}>{i}</li>
              )
    }
    return btns
  };
  return (
    <ul className="flex gap-3">
      {pageNumber > 1 && (
        <li onClick={()=>setCurrentPage(pageNumber-1)} className="w-[33px] h-[33px] rounded-full flex justify-center items-center bg-slate-700 text-[#d0d2d6] cursor-pointer">
          <BsChevronDoubleLeft />
        </li>
      )}{
        createBtn()
      }
    </ul>
  );
}
// 15 number tutorial 