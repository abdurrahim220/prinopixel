import React from 'react'
import Button from '../ui/Button'

const Hero = () => {
  return (
    <div className='text-white  bg-indigo-600 bg-cover bg-top bg-[url(https://wptf.themepul.co/tronix/wp-content/uploads/2023/06/slider.jpg)]'>
      <div className="customContainer h-[80vh] flex items-center">
        <div className='sm:w-5/12 md:w-8/12 space-y-7'>
          <h2 className='text-lg font-extrabold tracking-widest text-opacity-70'>WELCOME TO OUR COMPANY</h2>
          <h1 className='text-xl sm:text-[35px] md:text-[45px] sm:leading-[45px] md:leading-[60px] font-bold font-mono'>Affordable Big IT & <br className='hidden sm:block' /> Technology Solutions</h1>
          <p className='text-opacity-85 text-base'>The goal of IT services is to provide efficient and effective technology solutions that help businesses achieve their objectives.</p>
          <div>
            <Button title="Get a Quote" clasaName="bg-secendory-light"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero