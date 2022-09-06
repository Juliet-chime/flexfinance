import React from 'react'
import personIcon from "../images/personIcon.svg"
import { calculateDateDifference } from '../utils'

const Comment = ({item,checked,onchange}) => {
  return (
    <>
    {item.message && <div className='comment'>
<div>
<input type="checkbox" className='tcheckbox' checked={checked} onChange={onchange}/>
</div>
    <label htmlFor="">
       <div>

       <div className='author-initial'>
           <div className='initial'>
           {item.author.substring(0,1)}
           </div>
            <h1> {item.author}</h1>
         
        </div>

        <div className='messageItem-wrapper'>
            <h1>{item.message.title.slice(0,1).toUpperCase() + item.message.title.slice(1)}</h1>
            <div className='receiver-container'>
              <div className='person'>
                <img src={personIcon} alt="" />
              </div>
              <h1>{item.message.receiver}</h1>
              <p className='title-fadecolor'>{calculateDateDifference(item.createdAt)} days ago</p>
            </div>
            <div>
              <p className='description'>{item.message.description}</p>
            </div>
        </div> 

       </div>
    </label>
</div>}
    </>
  )
}

export default Comment