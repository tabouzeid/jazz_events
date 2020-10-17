import React, { useState, useEffect } from 'react';
import Event from '../Event';
import axios from "axios";

export default function FavoritesPage() {

    //query for user = 123 get all associated event id's
    //for event ids populate the favoritedevent

    const [favorites, setFavorites] = useState([]);
    useEffect(() => {
        axios.get("/api/favorites").then((favorites) => {
            console.log(favorites.data)
            setFavorites(favorites.data);
        })
    }, [])

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-8 mx-auto">
                    <div className="card">
                        <div className="card-header">
                            Saved
                        </div>
                        <div className="card-body">
                            {favorites.map((favorite, index) =>
                                <Event
                                    key={index}
                                    id={index}
                                    date={favorite.date}
                                    venueName={favorite.venueName}
                                    address={favorite.address}
                                    startTime={favorite.startTime}
                                    eventName={favorite.eventName}
                                    cover={favorite.cover}
                                    sets={favorite.sets} />)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
