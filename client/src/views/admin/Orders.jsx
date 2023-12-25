import React, { useState } from "react";
import { BsArrowBarDown } from "react-icons/bs";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";
export default function Orders() {
  const [perPage, setParPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const [shwo ,setShow] =useState(false)
  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="w-full p-4 bg-[#283046] rounded-md">
        <div className="flex justify-between items-center">
          <select
            onChange={(e) => {
              console.log(e.target.value);
              const value = valueAsNumber(e.target.value);
              setParPage(value);
            }}
            id="selectOption"
            name="selectOption"
            value={perPage}
            className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border  border-slate-700 rounded-md text-[#d0d2d6] "
          >
            <option value="5">5</option>
            <option value="15">15</option>
            <option value="25">25</option>
          </select>
          <input
            className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]"
            type="text"
            placeholder="search"
          />
        </div>
        <div className=" relative mt-5 overflow-x-auto">
          <div className="w-full text-sm text-left text-[#d0d2d6]">
            <div className="text-sm  uppercase  border-b border-slate-700">
              <div className="flex justify-between items-start">
                <div className="py-3 w-[25%]">Order Id</div>
                <div className="py-3 w-[13%]">Prices</div>
                <div className="py-3 w-[18%]">Payment Status</div>
                <div className="py-3 w-[18%]">Order Status</div>
                <div className="py-3 w-[18%]">Action</div>
                <div className="py-3 w-[8%]">
                  <BsArrowBarDown />
                </div>
              </div>
            </div>
            <div className="text-[#d0d2d6]">
              <div className="flex justify-between items-start border-b border-slate-700">
                <div className="py-4 font-medium whitespace-nowrap w-[25%]">
                  #01843586013
                </div>
                <div className="py-4 w-[13%]">565</div>
                <div className="py-4 w-[18%]">pending</div>
                <div className="py-4 w-[18%]">pending</div>
                <div className="py-4 w-[18%]">
                  <Link>View</Link>
                </div>
                <div className="py-4 w-[8%]" onClick={(e)=>setShow(!shwo)}>
                  <BsArrowBarDown />
                </div>
              </div>
              <div className="flex justify-between items-start border-b border-slate-700">
                <div className="py-4 font-medium whitespace-nowrap w-[25%]">
                  #01843586013
                </div>
                <div className="py-4 w-[13%]">565</div>
                <div className="py-4 w-[18%]">pending</div>
                <div className="py-4 w-[18%]">pending</div>
                <div className="py-4 w-[18%]">
                  <Link>View</Link>
                </div>
                <div className="py-4 w-[8%]" onClick={(e)=>setShow(!shwo)}>
                  <BsArrowBarDown />
                </div>
              </div>
              <div className={shwo ? 'block border-b border-slate-700 bg-slate-800':'hidden'}> 
                  <div className="flex justify-start items-start border-b border-slate-800">
                    <div className="py-4 w-[25%] font-medium whitespace-nowrap pl-4">
                       928375429402938402394802398
                    </div>
                    <div className="py-4 w-[13%]">34</div>
                    <div className="py-4 w-[18%]">pending</div>
                    <div className="py-4 w-[18%]">pending</div>
                  </div>
                  <div className="flex justify-start items-start border-b border-slate-800">
                    <div className="py-4 w-[25%] font-medium whitespace-nowrap pl-4">
                       928375429402938402394802398
                    </div>
                    <div className="py-4 w-[13%]">34</div>
                    <div className="py-4 w-[18%]">pending</div>
                    <div className="py-4 w-[18%]">pending</div>
                        

                  </div>
                  <div className="flex justify-start items-start border-b border-slate-800">
                    <div className="py-4 w-[25%] font-medium whitespace-nowrap pl-4">
                       928375429402938402394802398
                    </div>
                    <div className="py-4 w-[13%]">34</div>
                    <div className="py-4 w-[18%]">pending</div>
                    <div className="py-4 w-[18%]">pending</div>
                        

                  </div>
              </div>
              
              
            </div>
          </div>
        </div>
        <div>
          <Pagination pageNumber={currentPage} setCurrentPage={setCurrentPage} totalItem={50} perPage={perPage} showItem={3}/>
        </div>
      </div>
    </div>
  );
}
