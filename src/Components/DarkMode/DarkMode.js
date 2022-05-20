import React from 'react'
import './DarkMode.css'
import { MdDarkMode } from 'react-icons/md';
import { BsSunFill } from 'react-icons/bs';

const DarkMode = ({changeMode, darkMode}) => {
  return (
      <>
      <section className='darkmode_section' onClick={changeMode}>
          {darkMode && <MdDarkMode className='icon_dark'/>}
          {!darkMode && <BsSunFill className='icon_sun'/>}
      </section>
      </>

  )
}

export default DarkMode