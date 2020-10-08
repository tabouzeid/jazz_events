import React, { useState } from "react";
import EventForm from "../components/EventForm";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import API from "../utils/API";

function AddEvent() {
    const [mevents, setEvents] = useState({
        date: "",
        venueName: "",
        address: "",
        startTime: "" ,
        eventName: "",
        cover: "",
        sets: [
            { startTime: "" ,
              artistList: "" }
        ]
    });


    const handleInputChange = e => {
        e.preventDefault();
        console.log("Inside handleInputchange, e.target", e.target);
        const { name, value } = e.target
        setEvents({ ...mevents, [name]: value })
        console.log("Enter Handle Input Change funciton after setEvents, venue name is", mevents);

        // Before i call this individual function addVenuename, and code below works for a single 
        //setEvents({...mevents, venuename: e.target.value});
        //console.log("Enter add venue name funciton, venue name is", mevents.venuename);
    }

    const handleFormSubmit = (e) => {
        //console.log ("When Submit form: venuename is:", {venuename});
        console.log("When Submit form: venuename is:", mevents);
        API.saveEvent(mevents);

    }

    return (
        <Container fluid>
            <Container>
                <Row>
                    <Col size="12">
                        <EventForm
                            //musicevent={mevents.venuename} addVenuename={addVenuename} handleFormSubmit={handleFormSubmit}
                            musicevent={mevents} handleInputChange={handleInputChange} handleFormSubmit={handleFormSubmit}
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    )
} // AddEvent 

export default AddEvent;