import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const [active, setActive] = useState(true)
    const [direction , setDirection] = useState("/Task")

    const link_click =()=>{
        setActive(!active)
        setDirection(active? "/Home" : "/Task")
    }
    return (
        <div>
            <div className=' h-20 w-screen justify-between items-center flex '>
                <div className=' h-full  justify-between items-center flex w-full mx-20 border-b-2 border-slate-300'>

                    <div className=' h-auto w-auto p-2 bg-slate-100 rotate-90'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bar-chart-2"><line x1="18" x2="18" y1="20" y2="10" /><line x1="12" x2="12" y1="20" y2="4" /><line x1="6" x2="6" y1="20" y2="14" /></svg>
                    </div>

                    <Link to={direction}>

                        <div className=' flex flex-row justify-center items-center gap-2' onClick={link_click}>

                            <h1 className={` text-lg shadow-lg font-mono h-auto w-auto ${active ? "bg-violet-100 border-violet-600 " : "bg-green-100 border-green-600"} px-3 py-2 rounded-full border-2  text-black font-semibold `}>{active ? "Add Your Task" : "Back to Home"}</h1>
                            <div className={` h-2 w-2 ${active ? "bg-violet-700 " : "bg-green-500"} transition-all duration-300 rounded-full shadow-lg animate-ping `}>

                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header
