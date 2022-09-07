import { groupBy } from "lodash";
import React, { useState } from "react";
//import groupBy from "lodash/groupBy";
import { Status } from "../component/Status";
// import Comment from '../component/Comment';
import { listItem } from "../data";
//import { groupBy } from '../utils';
import { sortItem } from "../utils";
import { groupByKey } from "../utils";

const TodoList = () => {
  const [showMore, setShowMore] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [currChecked, setCurrChecked] = useState();

  function onCheckItem( index) {
    setCurrChecked(index);
    setIsChecked(true);
  }

  const sorted = sortItem(listItem);

  const groupedData = groupByKey(sorted, "author");

  const groupedEvent = Object.values(groupedData);

  return (
    <>
      <div className="todoItem-container">
        {showMore ? (
          <ul className="ul">
            {groupedEvent.map((items, index) => (
              <li key={index}>
                <Status
                  item={items[0]}
                  author={items[0].author}
                  checked={isChecked}
                  currChecked={currChecked}
                  index={index}
                  listItem={listItem}
                  onchange={onCheckItem}
                />
              </li>
            ))}
          </ul>
        ) : (
          <ul className="ul">
            {groupedEvent.slice(0, 6).map((items, index) => (
              <li key={index}>
                <Status
                  item={items[0]}
                  author={items[0].author}
                  checked={isChecked}
                  currChecked={currChecked}
                  index={index}
                  listItem={listItem}
                  onchange={onCheckItem}
                />
              </li>
            ))}
            <button className="button" onClick={() => setShowMore(true)}>
              show {groupedEvent.length} more events
            </button>
          </ul>
        )}
      </div>
    </>
  );
};

export default TodoList;