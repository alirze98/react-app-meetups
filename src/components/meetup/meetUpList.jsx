import React from "react";
import MeetUpItem from "./meetUpItem";
import classes from './meetUpList.module.css'

const MeetUpList = (props) => {
  
  return (
    <ul className={classes.list}>
      {props.data.map((item) => {
        return (
          <MeetUpItem
            id={item.id}
            title={item.title}
            image={item.image}
            address={item.address}
            description={item.description}
          />
        );
      })}
    </ul>
  );
};

export default MeetUpList;
