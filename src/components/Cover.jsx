import React from 'react'
import { useTranslation } from 'react-i18next';

import video1 from "../media/coverVideo.mp4"

export default function Cover() {
  const[t, i18n] = useTranslation("global");
  return (
    
      <div className='w-full h-screen relative'>
        <div className='absolute w-full h-full top-0 left-0 z-0 bg-gray-900/40'>
         <div/>
        <video className='w-full h-full object-cover mix-blend-overlay' src={video1} autoPlay loop muted/>
        
        
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
          <h1 className='text-5xl'> Luciano Castro</h1>
          <p className='text-2xl'> {t("cover.desc")}</p>
        </div>
        
        </div>
      </div>
    
    
  )
}