import React from "react";
import Card from "../ui/card";
import classes from "./meetUpItem.module.css";
import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";

const MeetUpItem = (props) => {
  const favoriteCntx = useContext(FavoritesContext)
  const isFavorite = favoriteCntx.itemIsFavorite(props.id)
  function toggleHandler(){ 
   if(isFavorite){
    favoriteCntx.removeFavorite(props.id)
   }else{
    favoriteCntx.addFavorite({
      title:props.title,
      address:props.address,
      description:props.description,
      image:props.image,
      id:props.id
    })
   }
  }
  
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleHandler}>{isFavorite?"remove from favorites":"to favorites"}</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetUpItem;
