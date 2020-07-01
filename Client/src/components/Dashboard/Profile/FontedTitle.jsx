import React from 'react'

import Estrellita from '../../../assets/images/Estrellita.png'

import { FontedTitle as FontedTitleClass } from './Profile.module.css'

const FontedTitle = (props) => {
   return (
     <>
       <h1 className={FontedTitleClass}>
         <img src={Estrellita} alt="Estrella" className="mr-1" />
            {props.Title}
          <img src={Estrellita} alt="Estrella" className="ml-1" />
       </h1>
     </>
   )
}

export default FontedTitle