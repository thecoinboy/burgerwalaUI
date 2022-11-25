import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js';


Chart.register(...registerables);

const data = {
    labels:["Preaparing","Shipped","Delivered"],
    datasets: [{
      label: '# of orders',
      backgroundColor:["rgb(244, 38 ,38,0.3)", "rgb(21,128, 68,0.3)" , "rgb(29, 78, 216, 0.3)"],
      borderColor: ["rgb(244, 38 ,38,1)", "rgb(21,128, 68,1)" , "rgb(29, 78, 216,1)"],
      data: [3, 4, 3,],
      borderWidth: 1,
    }]
  };

const Dashboard = () => {
    const Data = [
        {
            value: 213,
            name: "Users"
        },
        {
            value: 23,
            name: "Orders"
        },
        {
            value: "$21323",
            name: "Sells"
        },
    ]

    return (
        <div className='bg-red-100'>
            <main className='md:w-[70%] w-[100%] mx-auto bg-white'>
                <section className='bg-black flex flex-wrap items-center justify-center p-6 gap-5 md:gap-14'>
                    {
                        Data.map((data, i) => (
                            <div key={i} className='rounded-full w-24 h-24 bg-white text-black flex flex-col items-center justify-center gap-2'>
                                <p className='font-bold text-2xl'> {data.value} </p>
                                <p className='text-sm'> {data.name} </p>
                            </div>
                        ))
                    }
                </section>
                <aside className='flex py-20 flex-wrap px-5 md:gap-32 gap-10 justify-center items-center'>
                    <div className='gap-5 flex flex-col justify-center items-center'>
                        <button className=' bg-black hover:bg-red-800 text-center h-10 w-36 text-sm text-white self-center transition-all'> View Orders </button>
                        <button className=' bg-black hover:bg-red-800 text-center h-10 w-36 text-sm text-white self-center transition-all'> View Users </button>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <Doughnut data={data} />
                    </div>
                </aside>
                <article>

                </article>
            </main>
        </div>
    )
}

export default Dashboard;
