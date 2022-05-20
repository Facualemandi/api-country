import React from 'react'
import './Return.css'
import { GiReturnArrow } from 'react-icons/gi';

const Return = ({toReturn}) => {


  return (
      <>
      <section className='container_return' onClick={toReturn}>
             <button className='btn_return'> To return
              <GiReturnArrow className='icon_return'/>
             </button>
      </section>
      </>
  )
}

export default Return