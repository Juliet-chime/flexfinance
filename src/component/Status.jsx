import React from "react";
import circle from "../images/circle.svg";
import { calculateDateDifference } from "../utils";
import Comment from "../component/Comment";

export const Status = ({
  item,
  author,
  checked,
  currChecked,
  index,
  listItem,
  onchange,
}) => {
  function authorWithActivity(value) {
    return value.author === item.author && value.type === "activity";
  }

  function authorWithComments(value) {
    return value.author === item.author && value.type === "comment";
  }

  let comments = listItem?.filter(authorWithComments);

  let activities = listItem?.filter(authorWithActivity);

  return (
    <div>
      <div>
        {activities ? (
          <div>
            {item.author === author && item.type === "activity" && (
              <div>
                <div className="status">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={checked ? index <= currChecked : false}
                    onChange={() => onchange(index)}
                  />
                  <label htmlFor="" className="labelitem">
                    <div className="initial">{item.author.substring(0, 1)}</div>
                    <div>
                      <h1>
                        {item.author}{" "}
                        <span className="title-fadecolor">
                          has changed Status to
                        </span>{" "}
                        <img src={circle} alt="" /> {item.activity.status}
                      </h1>
                    </div>
                    <div>
                      <p className="title-fadecolor">
                        {calculateDateDifference(item.createdAt)} days ago
                      </p>
                    </div>
                  </label>
                </div>
                {activities.length >= 2 ? (
                  <div className="activity-wrapper">
                    {activities?.map((item, index) => (
                      <div className="status" key={index}>
                        <div className="initial">
                          {item.author.substring(0, 1)}
                        </div>
                        <div>
                          <h1>
                            {item.author}{" "}
                            <span className="title-fadecolor">
                              has changed Status to
                            </span>{" "}
                            <img src={circle} alt="" /> {item.activity.status}
                          </h1>
                        </div>
                        <div>
                          <p className="title-fadecolor">
                            {calculateDateDifference(item.createdAt)} days ago
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            )}
          </div>
        ) : null}
      </div>

      {comments ? (
        <div>
          {comments?.map((item, index) => (
            <div key={index}>
              <Comment item={item} />
            </div>
          ))}

        </div>
      ) : null}
    </div>
  );
};

