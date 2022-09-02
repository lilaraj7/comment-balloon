import React, { useState } from 'react'
import './newcomment.css'
import NewDetail from './NewDetail';
import { CSSTransition } from 'react-transition-group';




const Newcomment = () => {

    const [show, setShow] = useState(false)
    const [position,setPosition]=useState('main-center')
  

    const handleChange = ()=>{
setShow(false)
}
    const handleComment = (classname) => {
        setShow(true)
        setPosition(classname)
    }
    return (
        <div className='container-box'>
           
            <div className='container-main-box'> 

           
            <CSSTransition 
            in={show} 
            timeout={200} 
            classNames="my-node">
            {()=>show && <div className={position}>
                      <NewDetail  change={handleChange}/>
                    </div>}
                    </CSSTransition>
   
         
                <div className='cont-btn'>
                    <div>
                        <button  onClick={()=>handleComment('content-left')}>left click</button>
                    </div>
                    <div>
                        <button onClick={()=>handleComment('main-center')}>center click</button>
                    </div>
                    <div>
                        <button onClick={()=>handleComment('content-right')}>right click</button>
                    </div>
           
                </div>
                
            </div>
        </div>
    )
}
export default Newcomment;