import React from 'react'
import { useNavigate } from 'react-router-dom';
const ThankYou = () => {
    const navigate = useNavigate();
  return (
    <main className="container mx-auto flex items-center justify-center py-8 px-4 h-max mb-10">
    <div className="p-4 text-center">
      <div className="icon flex items-center justify-center">
        <img src="/check.png" alt="check icon" style={{width:"106px", marginBottom:"10px"}}/>
      </div>
      <div className="rounded-[10px] border border-[#D8D9DB] px-8 pt-0 pb-8 text-center w-[519px]">
        <p className="text-[56px] font-bold text-[#1C2F5B] ">Thank You !</p>
        <p className='text-[26px] font-medium text-[#69738B] '>Payment Successful</p>
        <p className="text-[17px] font-normal text-[#69738B]">Your reference order number for the transition is <span className='font-medium text-[#488AC8]'>#123456A</span>. 
            We will be sending you an email shortly with requested data as an attachment</p>
      </div>
      <div className='inline-block justify-center mt-4'>
      <p className="w-[391px] text-[16px] font-normal text-[#69738B] text-center">You will be redirected to the home page shortly or click here to return to home page</p>
      <button className="mt-6 inline-flex items-center justify-center w-[118px] text-[14px] font-semibold tracking-wide text-white bg-blue-500 rounded-[4px] h-[42px]"
       onClick={()=>navigate('/')}>
        Home
      </button>
      </div>
     
    </div>
  </main>
  )
}

export default ThankYou
