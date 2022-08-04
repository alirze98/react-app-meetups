import React, { useRef, useState } from "react";
import Card from "../ui/card";
import classes from "./newMeetUpForm.module.css";

const NewMeetUpForm = (props) => {
  const titleInput = useRef();
  const urlInput = useRef();
  const addressInput = useRef();
  const descriptionInput = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    const title = titleInput.current.value;
    const url = urlInput.current.value;
    const address = addressInput.current.value;
    const description = descriptionInput.current.value;
    const newItem = {
      title,
      image:url,
      address,
      description,
    };
    props.onAddItem(newItem);
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.control}>
          <label htmlFor="title">MeetUp Title</label>
          <input ref={titleInput} type="text" id="title" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">MeetUp Image</label>
          <input ref={urlInput} type="ulr" id="image" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">MeetUp address</label>
          <input ref={addressInput} type="text" id="address" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea ref={descriptionInput} id="description" required rows="5" />
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetUpForm;
