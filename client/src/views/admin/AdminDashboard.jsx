import React from 'react'
import {BsCurrencyDollar}from'react-icons/bs'
import {RiProductHuntLine}from'react-icons/ri'
import {FaUser}from'react-icons/fa'
import Chart from'react-apexcharts'
import { Link } from 'react-router-dom'

export default function AdminDashboard() {
  const state = {
    series:[
      {
        name:'Orders',
        data:[34,53,63,3,63,10,34,35,63,80,1,90]
      },
      {
        name:'Revenue',
        data:[35,43,64,6,3,40,64,36,64,40,41,60]
      },
      {
        name:'Sellers',
        data:[32,55,33,63,43,20,34,75,63,50,2,40]
      }
    ],
    options:{
      color:['#181ee8','#181ee8'],
      plotOptions:{
        radius:30
      },
      chart:{
        background:'transparent',
        foreColor:'#d0d2d6'
      },
      dataLabels:{
        enabled:false
      },
      stroke:{
        show:true,
        curve:['smooth','straight','stepline'],
        lineCap:'butt',
        colors:'#f0f0f0',
        width:4,
        dashArray:0
      },
      xaxis:{
        categories:['Jan','fev','marc','april','may','jun','jul','aug','sep','oct','nov','dec']
      },
      legend:{
        position:'top'
      },
      responsive:[
        {
          breakpoint:565,
          yaxis:{
     
              categories:['Jan','fev','marc','april','may','jun','jul','aug','sep','oct','nov','dec']
          
          },
          options:{
            plotOptions:{
              bar:{
                horizontal:true
              }
            },
            chart:{
              height:'550px'
            }
          }
        }
      ]

    }
  }
  return (
    <div className='px-2 md:px-7 py-5'>
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7 '>
         <div className='flex justify-between items-center p-5 bg-[#2a3147] rounded-md gap-3'>
          <div className='flex flex-col justify-start items-start text-[hsl(0,0%,97%)]'>
            <h2 className='text-3xl font-bold'>$6455</h2>
             <span className='text-md font-medium'>Total Sales</span>
          </div>
          <div className='w-[46px] h-[47px] rounded-full bg-[#28c76f1f] flex justify-center items-center'>
            <BsCurrencyDollar className='text-[#2dd679] shadow-lg '/>
          </div>
         </div>
         <div className='flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3'>
          <div className='flex flex-col justify-start items-start  text-white'>
            <h2 className='text-3xl font-bold'>55</h2>
             <span className='text-md font-medium'>Prouducts</span>
          </div>
          <div className='w-[46px] h-[47px] rounded-full bg-[#e000e81f] flex justify-center items-center'>
            <RiProductHuntLine className='text-[#a150ac] shadow-lg '/>
          </div>
         </div> <div className='flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3'>
          <div className='flex flex-col justify-start items-start text-[#d0d2d6]'>
            <h2 className='text-3xl font-bold'>6</h2>
             <span className='text-md font-medium'>Total Sales</span>
          </div>
          <div className='w-[46px] h-[47px] rounded-full bg-[#00cfe81f] flex justify-center items-center'>
            <FaUser className='text-[#00cfe8] shadow-lg '/>
          </div>
         </div> <div className='flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3'>
          <div className='flex flex-col justify-start items-start text-[#d0d2d6]'>
            <h2 className='text-3xl font-bold'>455</h2>
             <span className='text-md font-medium'>Order</span>
          </div>
          <div className='w-[46px] h-[47px] rounded-full bg-[#28c76f1f] flex justify-center items-center'>
            <BsCurrencyDollar className='text-[#28c76f] shadow-lg '/>
          </div>
         </div>  
      </div>
      <div className='w-full flex flex-wrap mt-7'>
        {/* // char section  */}
           <div className='w-full lg:w-7/12 lg:pr-3'>
            <div className='w-full bg-[#283046] p-4 rounded-md'>
              <Chart options={state.options} series={state.series} type='bar' height={350}/>
            </div>
           </div>
        {/* // char section end  */}
          <div className='w-full lg:w-5/12 lg:pl-4 mt-6 lg:mt-0'>
             <div className='w-full bg-[#283046] p-4 rounded-md text-[#d0d2d6] '>
              <div className='flex justify-between items-center'>
                <h2 className=' font-semibold text-lg text-[#d0d2d6] pb-3'>
                  Recent seller message
                </h2>
                <Link className='font-semibold text-sm text-[#d0d2d6] '>View All</Link>
              </div>
              <div className='flex flex-col gap-2 pt-6 text-[#d0d2d6]'>
                <ol className=' relative border-1 border-slate-600 ml-4'>
                  <li className='mb-3 ml-6'>
                     <div className='flex absolute -left-7 shadow-lg justify-center items-center w-12 h-12 p-[6px] bg-[#00d1e848]  rounded-full z-10'>
                      <img className=' ' src="http://localhost:5173/images/admin.png" alt="" />
                     </div>
                     <div className='p-3 bg-slate-800 rounded-lg border border-slate-600 shadow-sm'>
                      <div className='flex justify-between items-center mb-2'>
                        <Link className='text-md font-normal'>Admin</Link>
                        <time className='mb-1 text-sm font-normal sm:order-last sm:mb-0'>4 day ago</time>
                      </div>
                       <div className='p-2 text-xs font-normal bg-slate-700 rounded-lg border border-slate-800'>How are you</div>
                     </div>
                  </li>
                  <li className='mb-3 ml-6 '>
                     <div className='flex   absolute -left-7 shadow-lg justify-center items-center w-12 h-12 p-[6px] bg-[#00d1e848]  rounded-full z-10'>
                      <img className=' ' src="http://localhost:5173/images/admin.png" alt="" />
                     </div>
                     <div className='p-3 bg-slate-800 rounded-lg border border-slate-600 shadow-sm'>
                      <div className='flex justify-between items-center mb-2'>
                        <Link className='text-md font-normal'>Admin</Link>
                        <time className='mb-1 text-sm font-normal sm:order-last sm:mb-0'>4 day ago</time>
                      </div>
                       <div className='p-2 text-xs font-normal bg-slate-700 rounded-lg border border-slate-800'>How are you</div>
                     </div>
                  </li>
                  <li className='mb-3 ml-6 '>
                     <div className='flex   absolute -left-7 shadow-lg justify-center items-center w-12 h-12 p-[6px] bg-[#00d1e848]  rounded-full z-10'>
                      <img className=' ' src="http://localhost:5173/images/admin.png" alt="" />
                     </div>
                     <div className='p-3 bg-slate-800 rounded-lg border border-slate-600 shadow-sm'>
                      <div className='flex justify-between items-center mb-2'>
                        <Link className='text-md font-normal'>Admin</Link>
                        <time className='mb-1 text-sm font-normal sm:order-last sm:mb-0'>4 day ago</time>
                      </div>
                       <div className='p-2 text-xs font-normal bg-slate-700 rounded-lg border border-slate-800'>How are you</div>
                     </div>
                  </li>
                </ol>
              </div>
             </div>
            </div>        
      </div>
      <div className='w-full p-4 bg-[#283046] rounded-md mt-6'>
        <div className='flex justify-between items-center'>
          <h2 className=' font-semibold text-sm text-[#d0d2d6] pb-3'>Recent Orders</h2>
          <Link className='font-semibold text-sm text-[#d0d2d6] '>View All</Link>
        </div>
        <div className=' relative overflow-x-auto '>
          <table className='w-full text-sm text-left text-[#d0d2d6] '>
            <thead className='text-sm text-[#d0d2d6] uppercase border-b border-slate-700 '>
              <tr>
                <th scope='col' className='py-3 px-4'>Order Id</th>
                <th scope='col' className='py-3 px-4'>Price</th>
                <th scope='col' className='py-3 px-4'>Payment Status</th>
                <th scope='col' className='py-3 px-4'>Order Status</th>
                <th scope='col' className='py-3 px-4'>Active</th>
             
              </tr>
            </thead>
            <tbody>
             {
              [1,2,3,4,5,6].map((v,i)=> <tr key={i}>
              <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>#537934kdf92</td>
              <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>Price</td>  <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>
                 <span>pending</span>
                </td>  <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>   <span>pending</span></td>  <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>
                  <Link>view</Link>
                </td>
            </tr>)
             }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
