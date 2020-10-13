import React, { useState, useEffect } from 'react';
import Calendar from "../Calendar"
import Event from "../Event"
import axios from "axios"
// import API from "../../utils/API"

export default function EventsPage() {
    const mystyle = {
        paddingTop: "5rem"
    };

    const [events, setEvent] = useState([])

    useEffect(() => {
        axios.get("/api/event").then((eventsList) => {
            console.log(eventsList.data)
            setEvent(eventsList.data)
        })
    }, [])

    // API.getEvent().then(function (obj) {
    //     setEvent(obj.data);
    // })

    return (
        <div className="mx-auto d-flex flex-column" style={mystyle}>
            <Calendar />
            {events.map((event, index) =>
                <Event
                    key={event._id}
                    id={index}
                    date={event.date}
                    venueName={event.venueName}
                    address={event.address}
                    startTime={event.startTime}
                    eventName={event.eventName}
                    cover={event.cover}
                    sets={event.sets} />)}
        </div>
    );
}