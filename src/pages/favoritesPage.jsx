import React from "react";
import { useContext } from "react";
import MeetUpItem from "../components/meetup/meetUpItem";
import FavoritesContext from "../store/favorites-context";
const FavoritesPage = () => {
  const favoriteCntx = useContext(FavoritesContext);
  const favorites = favoriteCntx.favorites;
  

  return (
    <div>
      <h1>Favorites</h1>
      {favorites.map(f => {
        return <MeetUpItem title={f.title} description={f.description} address={f.address} image={f.image} id={f.id} />;
      })}
    </div>
  );
};

export default FavoritesPage;
