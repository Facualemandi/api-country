import React from 'react'
import '../CountryList/CountryList.css'

const CountryList = ({children}) => {
  return (
     <section className={`section_country`}>
      {children}
     </section>
  )
}

export default CountryList