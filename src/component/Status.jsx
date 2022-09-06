import React from 'react'
import circle from "../images/circle.svg"
import { calculateDateDifference } from '../utils'

export const Status = ({item,checked,onchange}) => {

  return (
    <>
    {item.activity  && <div className='status'>
        
        <input type="checkbox" className="checkbox" checked={checked} onChange={onchange} />
        <label htmlFor="" className='labelitem'>
            <div className='initial'>
                {item.author.substring(0,1)}
            </div>
            <div>
                <h1>{item.author} <span className='title-fadecolor'>has changed Status to</span> <img src={circle} alt="" /> {item.activity.status}</h1>
            </div>
            <div>
                <p className='title-fadecolor'>{calculateDateDifference(item.createdAt)} days ago</p>
            </div>
        </label>
    </div>
}
</>
  )
}
