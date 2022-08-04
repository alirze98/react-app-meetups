import React, { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./mainNavigation.module.css";
import FavoritesContext from "../../store/favorites-context";

const MainNavigation = () => {
  const favoriteCntx = useContext(FavoritesContext);
  const totalFavorites = favoriteCntx.totalFavorites;
  console.log(totalFavorites);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">My Favorites</Link>
            <span className={classes.badge}>{totalFavorites}</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
