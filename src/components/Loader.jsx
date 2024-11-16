import { Html } from '@react-three/drei'
import React from 'react'

function Loader() {
  return (
    <Html>
        <div className='absolute top-0 left-0 flex items-center justify-center w-full h-full'>
            <div className='w-[10vw] h-[10vw] rounded-full'>
                Loading...
            </div>
            
        </div>
    </Html>
  )
}

export default Loader