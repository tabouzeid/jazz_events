import React, { useState } from "react";
import EventForm from "../components/EventForm";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import API from "../utils/API";
import { CalendarPlusFill, CalendarMinusFill } from "react-bootstrap-icons";
import "./style.css"

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
        console.log("Array performances ", performances);
    }

    const handleAddFields = () => {
        setPerformances([...performances, { startTime: "", artistList: "" }])
    }

    const handleRemoveFields = (index) => {
        const values = [...performances];
        values.splice(index, 1);
        setPerformances(values);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("Array performances in Form SUbmit ", performances);
        let data = {
            date: mevents.date,
            venueName: mevents.venueName,
            address: mevents.address,
            startTime: mevents.startTime,
            eventName: mevents.eventName,
            cover: mevents.cover,
            sets: performances
        }

        console.log("When Submit form: DATA is:", data);
        API.saveEvent(data);
    }

    return (
        <Container fluid>
            <Container>
                <Row>
                    <Col size="8">
                        <EventForm
                            musicevent={mevents}
                            handleInputChange={handleInputChange}
                            handleFormSubmit={handleFormSubmit}
                        />
                    </Col>
                    <Col size="12">
                        <div>
                            <h2> Show Time and Performers </h2>
                        </div>

                        <Row>
                            <form>
                                {performances.map((performance, index) => (
                                    <div key={index}>
                                        <input
                                            className="Btn"
                                            type="time"
                                            name="startTime"
                                            label="Show Start Time"
                                            value={performance.startTime}
                                            onChange={event => handlePerformanceChange(index, event)} />


                                        <input
                                            className="Btn"
                                            type="text"
                                            name="artistList"
                                            label="Show Performer"
                                            value={performance.artistList}
                                            onChange={event => handlePerformanceChange(index, event)} />

                                        <CalendarPlusFill
                                            size={40}
                                            onClick={() => handleAddFields()} />

                                        <CalendarMinusFill
                                            size={40}
                                            onClick={() => handleRemoveFields(index)} />
                                    </div>
                                ))}

                            </form>
                        </Row>
                    </Col>
                    <Col size="12">
                        <br></br>
                        <Row>
                            <div>
                                <button type="submit" className="submitBtn btn btn-primary" onClick={handleFormSubmit}>
                                    Submit
                             </button>
                            </div>
                        </Row>
                    </Col>

                </Row>
                <br></br>
            </Container>
        </Container>
    )
} // AddEvent 

export default AddEvent;