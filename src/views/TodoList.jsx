/* eslint-disable no-extend-native */
import React, { useEffect, useState } from 'react'
//import groupBy from "lodash/groupBy";
import { Status } from '../component/Status';
import Comment from '../component/Comment';
import { listItem } from '../data';
//import { groupBy } from '../utils';
import { sortItem } from '../utils';
import { groupByKey } from '../utils';

const TodoList = () => {
  const [showMore, setShowMore] = useState(false);
  const [isChecked, setIsChecked] = useState(false)

  const onCheckItem  = (index) => (e) => {
   // setIsChecked(!isChecked)
     console.log(e,index,"ddfg")
  }

  const sorted = sortItem(listItem)

  const groupedData = groupByKey(sorted, 'author')

const groupedEvent = Object.values(groupedData)

  return (
    <>
    <div className='todoItem-container'>
      <ul>
      {showMore ? groupedEvent.map(item => item.map((items, index) => (
       <li key={index}>
       <Status item={items} checked={isChecked}  onchange={onCheckItem(index)}/>
       <Comment item={items} checked={isChecked} onchange={onCheckItem(index)}/>
       </li>
      ))): groupedEvent.slice(0,6).map(item => item.map((items, index) => (
        <li key={index}>
        <Status item={items} checked={isChecked} onchange={onCheckItem(index)}/>
       <Comment item={items} checked={isChecked} onchange={onCheckItem(index)}/>
        </li>
       )))}
       </ul>
    </div>
    <button onClick={()=>setShowMore(!showMore)}>showMore {groupedEvent.length - 6}</button>
    </>
  )
}

export default TodoList