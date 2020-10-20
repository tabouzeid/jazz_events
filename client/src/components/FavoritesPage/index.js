import React, { useState, useEffect } from 'react';
import Event from '../Event';
import axios from "axios";

export default function FavoritesPage() {

    //query for user = 123 get all associated event id's
    //for event ids populate the favoritedevent
    const [favorites, setFavorites] = useState([]);
    useEffect(() => {
        axios.get("/api/favorites").then((favorites) => {
            setFavorites(favorites.data);
        })
    }, [])

    const deleteEventFromFavorites = (event) => {

        let index = parseInt(event.target.getAttribute("index"));

        favorites.splice(index, 1);

        axios.put("/api/favorites", favorites)
            .then((response) => {
                setFavorites(response.data);
                alert("Your favorites have been updated");
            })
            .catch((err) => {
                alert("There was an error while updating your favorites");
            })
    }

    return (
        <div className="mt-5" style={{ height: "76vh" }}>

            <h2 className="text-center">Saved Events</h2>
            <div className="mx-auto col-10 mt-5">
                {favorites.map((favorite, index) =>
                    <Event
                        key={index}
                        index={index}
                        id={index}
                        date={favorite.date}
                        venueName={favorite.venueName}
                        address={favorite.address}
                        startTime={favorite.startTime}
                        eventName={favorite.eventName}
                        cover={favorite.cover}
                        sets={favorite.sets}
                        buttonBehavior={deleteEventFromFavorites}
                        buttonText={"Delete"} />)}
            </div>
        </div>

    );
}
