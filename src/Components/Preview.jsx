import React from 'react'
import { Link } from 'react-router-dom'

const Preview = () => {
  return (
    <div>
      <div className=' h-screen w-screen justify-center items-center flex'>
        <div className=' flex flex-col justify-center items-center'>
            <img className=' h-96' src="https://img.freepik.com/free-vector/checklist-concept-illustration_114360-479.jpg?t=st=1711972332~exp=1711975932~hmac=4b0858fd21749c9e5185fdfd8d49bd344d13f894cbcb28262f87b436e14c2cd1&w=740" alt="" />

            <h1 className=' text-lg lg:text-3xl font-semibold font-mono'>Welcome to Subham's To Do List Application</h1>
            <Link to="/Home"><button className=' h-auto w-auto px-3 py-2 bg-red-400 text-3xl text-white font-bold rounded-lg shadow-lg mt-10'>Get Started</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Preview
