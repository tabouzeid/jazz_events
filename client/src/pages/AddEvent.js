import React, { useState } from "react";
import EventForm from "../components/EventForm";
import API from "../utils/API";
import { CalendarPlusFill, CalendarMinusFill } from "react-bootstrap-icons";

function AddEvent() {

    const [mevents, setEvents] = useState({
        date: "",
        venueName: "",
        address: "",
        eventName: "",
        cover: ""
    });

    // State Variable to store an Array of each object that has {time, Artist}
    const [performances, setPerformances] = useState(
        [
            { startTime: "", artistList: "" }
        ]
    );

    const handleInputChange = e => {
        const { name, value } = e.target
        setEvents({ ...mevents, [name]: value })
    }

    const handlePerformanceChange = (index, event) => {
        const values = [...performances];
        values[index][event.target.name] = event.target.value;
        setPerformances(values);
    }

    const handleAddFields = () => {
        setPerformances([...performances, { startTime: "", artistList: "" }])
    }

    const handleRemoveFields = (index) => {
        if (performances.length === 1) {
            alert("Sorry you cannot remove the only available Show Time and Performance fields")
        } else {
            const values = [...performances];
            values.splice(index, 1);
            setPerformances(values);
        }

    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        let data = {
            date: mevents.date,
            venueName: mevents.venueName,
            address: mevents.address,
            startTime: mevents.startTime,
            eventName: mevents.eventName,
            cover: mevents.cover,
            sets: performances
        }

        API.saveEvent(data);
        //Empty the fields on the screen
        setEvents({
            date: "",
            venueName: "",
            address: "",
            eventName: "",
            cover: ""
        });
        setPerformances([{ startTime: "", artistList: "" }]);
    }

    return (
        <div className="container col-9 mt-5">
            <h1 className="text-center">Add Event</h1>
            <EventForm
                musicevent={mevents}
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
            />
            <div className="mx-auto mt-0">
                <h2 className="text-center pb-3"> Show Time and Performers </h2>
                <form className="my-0 mx-auto">

                    {performances.map((performance, index) => (
                        <div className="d-flex justify-content-center" key={index}>
                            <input
                                className="Btn mr-2"
                                type="time"
                                name="startTime"
                                label="Show Start Time"
                                value={performance.startTime}
                                onChange={event => handlePerformanceChange(index, event)} />


                            <input
                                className="Btn mx-2"
                                type="text"
                                style={{
                                    fontFamily: "'Raleway', sans-serif"
                                }}
                                name="artistList"
                                label="Show Performer"
                                value={performance.artistList}
                                onChange={event => handlePerformanceChange(index, event)} />

                            <CalendarPlusFill
                                size={30}
                                onClick={() => handleAddFields()}
                                className="mx-2" />

                            <CalendarMinusFill
                                size={30}
                                onClick={() => handleRemoveFields(index)} />
                        </div>
                    ))}

                </form>
                <div className="d-flex justify-content-center mb-5">
                    <button type="submit" className="btn mx-auto text-white" style={{ backgroundColor: "#0060a4" }} onClick={handleFormSubmit}>
                        Submit</button></div>
            </div>
        </div >

    )
} // AddEvent 

export default AddEvent;