import { createContext, useState } from "react";

const FavoritesContext = createContext({
    favorites:[],
    totalFavorites:0,
    addFavorite:(meetup)=>{},
    removeFavorite:(id)=>{},
    itemIsFavorite:(id)=>{},
})

export function FavoritesContextProvider(props){

    const [userFavorites,setUserFavorites]=useState([])

    function addFavoriteHandler(meetup){
        setUserFavorites((prevUserFavorites)=>{
           return prevUserFavorites.concat(meetup)
        })
    }

    function removeFavoriteHandler(id){
        setUserFavorites(prevUserFavorites=>{
            return prevUserFavorites.filter(item =>{
                return item.id !== id
            })
        })

    }
    
    function isFavoriteHandler(id){
        return userFavorites.some(item=>{
             return item.id === id
        })
    }

    const context = {
        favorites:userFavorites,
        totalFavorites:userFavorites.length,
        addFavorite:addFavoriteHandler,
        removeFavorite:removeFavoriteHandler,
        itemIsFavorite:isFavoriteHandler
    }

    return(
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
    )
}
export default FavoritesContext