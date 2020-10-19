import React, { useState, useEffect } from 'react';
import Event from "../Event"
import Carousel from "../Carousel"
import axios from "axios"


export default function EventsPage() {

    const [events, setEvent] = useState([])
    const [favorites, setFavorites] = useState([]);


    useEffect(() => {
        axios.get("/api/event").then((eventsList) => {
            setEvent(eventsList.data)
        }).then(axios.get("/api/favorites").then((favorites) => {
            setFavorites(favorites.data);
        }))
    }, [])

    const handleOnInputChange = (() => {
        const startdate = document.getElementById("searchInput").value;
        axios.get("/api/event/" + startdate).then((eventsList) => {
            setEvent(eventsList.data);
        })
    })

    const saveEventToFavorites = (event) => {
        let index = parseInt(event.target.getAttribute("index"));
        favorites.push(events[index]);

        axios.put("/api/favorites", favorites)
            .then((response) => {
                setFavorites(response.data);
                console.log(response);
                alert("Your favorites have been updated");
            })
            .catch((err) => {
                alert("There was an error while updating your favorites");
            })
    }

    return (
        <div className="mx-auto d-flex flex-column mt-5">
            {/* <img src={Logo} alt="bones_logo" style={logoStyle} /> */}
            <Carousel />
            <div className="input-group my-5 d-flex justify-content-center align-items-center">
                <h5 className="mr-3 my-auto">Search Events by Date:</h5>
                <input type="date" className="form-control col-2" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="searchInput" />
                <button type="button" style={{ backgroundColor: "#1f60a8" }} className="btn my-auto ml-3 btn-sm text-white" onClick={handleOnInputChange}>Search</button>
            </div>
            {events.map((event, index) =>
                <Event
                    key={event._id}
                    index={index}
                    id={index}
                    date={event.date}
                    venueName={event.venueName}
                    address={event.address}
                    startTime={event.startTime}
                    eventName={event.eventName}
                    cover={event.cover}
                    sets={event.sets}
                    buttonBehavior={saveEventToFavorites}
                    buttonText={"Save"} />)}

        </div>

    );
}