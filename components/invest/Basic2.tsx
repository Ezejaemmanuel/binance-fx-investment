'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';


const Basic2 = () => {
  const [activeTab, setActiveTab] = useState('Basic');
  return (
    <div>
   <div className='flex flex-row md:mx-2 justify-between pt-14'>
     <motion.header
       onClick={() => setActiveTab('Basic')}
       className={`text-slate-200 font-heading text-xl md:text-2xl border-b-2 md:mx-5  mx-1 pt-4  cursor-pointer ${activeTab === 'Basic' ? 'border-green-700  rounded-md  bg-gradient-to-r from-red-500 to-sky-500 bg-clip-text text-transparent animate-gradient' : 'border-amber-100'}`}
       animate={{ scale: activeTab === 'Basic' ? 1.2 : 1 }}
     >
    Basic
     </motion.header>
     <motion.header
       onClick={() => setActiveTab('Advance')}
       className={`text-slate-200 font-heading  text-xl md:text-2xl border-b-2 md:mx-5 mx-1 pt-4 backdrop:pt-4  cursor-pointer ${activeTab === 'Advance' ? 'border-green-700  rounded-md  bg-gradient-to-r from-red-500 to-sky-500 bg-clip-text text-transparent animate-gradient' : 'border-amber-100'}`}
     >
    Advance
     </motion.header>
     <motion.header
       onClick={() => setActiveTab('Premium')}
       className={`text-slate-200 font-heading  text-xl md:text-2xl border-b-2 md:mx-5 mx-1 pt-4  cursor-pointer ${activeTab === 'Premium' ? 'border-green-700  rounded-md  bg-gradient-to-r from-red-500 to-sky-500 bg-clip-text text-transparent animate-gradient' : 'border-amber-100'}`}
     >
     Premium
     </motion.header>
     <motion.header
       onClick={() => setActiveTab('Pro Plan')}
       className={`text-slate-200 font-heading  text-xl md:text-2xl border-b-2 md:mx-5 mx-1 pt-4  cursor-pointer ${activeTab === 'Pro Plan' ? 'border-green-700  rounded-md  bg-gradient-to-r from-red-500 to-sky-500 bg-clip-text text-transparent animate-gradient' : 'border-amber-100'}`}
     >
     Pro Plan
     </motion.header>
   </div>
   <div  className=' h-1 w-full bg-slate-300 mt-2 mb-5'/>
   {activeTab === 'Basic' && 
   <div className=" flex flex-col justify-center align-middle p-2 font-bold font-sono text-xl text-white leading-6 gap-2 md:gap-4">
    <h1 className=" text-2xl text-sky-600">5% Daily </h1>
<p>Total roll: 40%</p>
<p>DURATION: 8 days</p>
<p>Min deposit $200</p>
<p>Max deposit $2,000</p>
<p>5% referral bonus</p>
<div>

</div>
  </div>}
   {activeTab === 'Advance' && 
     <div className=" flex flex-col justify-center align-middle p-2 font-bold font-sono text-xl text-white leading-6 gap-2 md:gap-4">
    <h1 className=" text-2xl text-sky-600">5% Daily </h1>
<p>Total roll: 60%</p>
<p>DURATION: 12 days</p>
<p>Min deposit $2,100</p>
<p>Max deposit $10,000</p>
<p>5% referral bonus</p>
<div>
  
</div>
  </div>
   }
   {activeTab === 'Pro Plan' && 
     <div className=" flex flex-col justify-center align-middle p-2 font-bold font-sono text-xl text-white leading-6 gap-2 md:gap-4">
     <h1 className=" text-2xl text-sky-600">5% Daily </h1>
 <p>Total roll: 80%</p>
 <p>DURATION: 14 days</p>
 <p>Min deposit $10,100</p>
 <p>Max deposit $20,000</p>
 <p>5% referral bonus</p>
 <div>
   
 </div>
   </div>
   }
   {activeTab === 'Premium' && 
    <div className=" flex flex-col justify-center align-middle p-2 font-bold font-sono text-xl text-white leading-6 gap-2 md:gap-4">
    <h1 className=" text-2xl text-sky-600">5% Daily </h1>
<p>Total roll: 100%</p>
<p>DURATION: 48 days</p>
<p>Min deposit $21,100</p>
<p>Max deposit $50,000</p>
<p>5% referral bonus</p>
<div>
  
</div>
  </div>
   }
 </div>
  )
}

export default Basic2