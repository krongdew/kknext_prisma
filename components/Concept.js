import React from 'react'
import './Bgcars.css'
import Image from 'next/image';
import img1 from "@/img/car.png"
import img2 from "@/img/onewheel.png"

const concept = () => {
  return (
    <>
    <div className='hero'>
        <div className='texthead'>เพื่อนคู่คิด MU LIFE PASS</div>
        <div className='highway'> </div>
        <div className='tree'> </div>
        <div className='car'>
        <Image src={img1} width="auto" height="auto" alt="car"/>
        </div>
        <div className='wheel'>
            <Image src={img2} width={100} height={100} alt="car" className='back-wheel'/>
            <Image src={img2} width={100} height={100} alt="car" className='front-wheel'/>
            
        </div>
    </div>
    </>
  )
}

export default concept