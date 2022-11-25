import React from 'react'
import profile from '../../assets/founder.webp'


const Users = () => {

    const arr = [1,2]
    return (
        <div className='bg-red-200 py-20'>
            <main className='md:w-[45rem] rounded-t-md min-h-screen bg-white h-auto m-auto  overflow-x-auto'>
                <table className=' bg-gray-200 w-full text-center overflow-x-auto'>
                    <thead className='bg-black text-white'>
                        <tr className='text-sm'>
                            <th className=''> User Id  </th>
                            <th> Name  </th>
                            <th> Photo  </th>
                            <th> Role  </th>
                            <th> Since </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            arr.map((data, i) =>
                            (<tr key={i} className="my-2">
                                <td> #34354rg4t4 </td>
                                <td> coinboy </td>
                                <td> <img className='h-14 w-14 mx-auto rounded-full' src={profile} alt="" /> </td>
                                <td> admin </td>
                                <td> {'24-11-2023'} </td>
                            </tr>))
                        }
                    </tbody>
                </table>    
            </main>
        </div>
    )
}

export default Users