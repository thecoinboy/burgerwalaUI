import React from 'react'
import {Link} from 'react-router-dom'
import {HiShieldCheck} from 'react-icons/hi'
import {ImRadioChecked} from 'react-icons/im'


const Orders2 = () => {

    const arr =[
        1,2,3
    ]
    return (
        <div className='bg-red-200 py-20'>
            <main className='md:w-[45rem] bg-white h-auto m-auto min-h-screen rounded-t-md overflow-x-auto'>
                <table className='bg-gray-200 w-full text-center overflow-x-auto'>
                    <thead className='bg-black text-white'>
                        <tr className='text-sm'> 
                            <th className=''> Order Id  </th>
                            <th> Status  </th>
                            <th> Item Qty  </th>
                            <th> Amount  </th>
                            <th> Name  </th>
                            <th> Payment Mathod </th>
                            <th> Action </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            arr.map((data, i) =>
                            ( <tr key={i}>
                                <td> #34354rg4t4 </td>
                                <td> Processing </td>
                                <td> 23 </td>
                                <td> $.5 </td>
                                <td> coinboy </td>
                                <td> COD </td>
                                <td className='text-red-500 flex flex-row justify-center items-center gap-2'>
                                    <Link to={`/order/${"eefef"}`}> <HiShieldCheck /> </Link>
                                    <button> <ImRadioChecked/> </button>
                                </td>
                            </tr> ))
                        }
                    </tbody>
                </table>
            </main>
        </div>
      )
    }

export default Orders2