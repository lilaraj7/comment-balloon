import React from 'react'
import './newdetail.css'
import { RiDoubleQuotesL } from 'react-icons/ri';



const NewDetail = (props) => {


  return ( 
    
    <div className='con-box'>
      <div className='btn'>
      <button className='btn-danger' onClick={()=>props.change()}>x</button>
      </div>
      <div className='main-container'>
        <h1>
          <span className="icon-h">
            <RiDoubleQuotesL className="icon-ridouble" />
          </span>
          Lila raj Chaudhary  </h1>
        <p>
          nepal is good placeb duhweueh
          nepal is good place
          nepal is good place
          nepal is good place
          nepal is good place
          nepal is good place
        </p>
        <h3>raj Chaudhary</h3>
      </div>
    </div>
  )
}
export default NewDetail;