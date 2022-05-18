import React from 'react'
import '../CountryList/CountryList.css'

const CountryList = (props) => {
  return (
     <section className='section_country'>
      {props.children}
     </section>
  )
}

export default CountryList