import React from 'react';
import Event from '../Event';

export default function FavoritesPage() {

    //query for user = 123 get all associated event id's

    //for event ids populate the favoritedevent

    let favorites = [];
    let results = [];
    
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-header">
                            Saved
                        </div>
                        <div className="card-body">
                            {favorites.map((favorite, index) =>
                                <Event
                                    key={index}
                                    id={index}
                                    date={results.date}
                                    venueName={results.venueName}
                                    address={results.address}
                                    startTime={results.startTime}
                                    eventName={results.eventName}
                                    cover={results.cover}
                                    sets={results.sets} />)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
