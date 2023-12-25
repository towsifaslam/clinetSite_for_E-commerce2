import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import Pagination from "../Pagination";
import {GrClose}from'react-icons/gr'
import { BsImage } from "react-icons/bs";
export default function SellerRequest() {
    const [perPage, setParPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const [shwo, setShow] = useState(false);
  return (
    <div className='px-2 lg:px-7 pt-5'>
        <div className='w-full bg-[#283046] '>
        <div className="flex justify-between items-center p-4">
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
            <div className=" relative overflow-x-auto ">
              <table className="w-full text-sm text-left text-[#d0d2d6] ">
                <thead className="text-xs text-[#d0d2d6] uppercase border-b border-slate-700 ">
                  <tr>
                    <th scope="col" className="py-3 px-4">
                      No
                    </th>
                     
                    <th scope="col" className="py-3 px-4">
                      Name
                    </th>
                    <th scope="col" className="py-3 px-4">
                     Email
                    </th>
                    <th scope="col" className="py-3 px-4">
                      Payment status
                    </th>
                    <th scope="col" className="py-3 px-4">
                     Status
                    </th>
                       
                    <th scope="col" className="py-3 px-4">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5, 6].map((v, i) => (
                    <tr key={i} className="text-sm font-normal">
                      <td
                        scope="row"
                        className="py-1 px-4 font-normal whitespace-nowrap"
                      >
                        {v}
                      </td>
                      <td
                        scope="row"
                        className="py-1 px-4 font-medium whitespace-nowrap"
                      >
                        <img
                          className="w-[45px] h-[45px]"
                          src={`http://localhost:5173/images/products/${i}.webp`}
                          alt=""
                        />
                      </td>{" "}
                      <td
                        scope="row"
                        className="py-1 px-4 font-medium whitespace-nowrap"
                      >
                        <span>Towsif aslam</span>
                      </td>{" "}
                      <td
                        scope="row"
                        className="py-1 px-4 font-medium whitespace-nowrap"
                      >
                        <span>towsif@gail.com</span>
                      </td>{" "}
                      <td
                        scope="row"
                        className="py-1 px-4 font-medium whitespace-nowrap"
                      >
                        <span>active</span>
                      </td>{" "}
                      <td
                        scope="row"
                        className="py-1 px-4 font-medium whitespace-nowrap"
                      >
                        <span>deactive</span>
                      </td>{" "}
                     
                      <td
                        scope="row"
                        className="py-1 px-4 font-medium whitespace-nowrap"
                      >
                        <div className="flex  justify-start items-center gap-4">
                          <Link className="p-[6px] bg-yellow-500 rounded hover:shadow-lg hover:shadow-yellow-500/50">
                            <FaEdit />{" "}
                          </Link>
                         
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Pagination
              pageNumber={currentPage}
              setCurrentPage={setCurrentPage}
              totalItem={50}
              perPage={perPage}
              showItem={3}
            />
        </div>
       
    </div>
  )
}
