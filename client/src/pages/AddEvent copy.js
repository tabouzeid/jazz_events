import React, { useState } from "react";
import EventForm from "../components/EventForm";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import API from "../utils/API";

function AddEvent() {
    const [venuename, setVenuename] = useState("");

    const addVenuename = (e) => {
        //setEvents([...events, { venuename: e.target.value }]);
        setVenuename(e.target.value)
        console.log("Enter add venue name funciton, venue name is", {venuename});
    }

    const handleFormSubmit = (e) => {
        console.log ("When Submit form: venuename is:", {venuename});
        setVenuename("");
    }

    return (
        <Container fluid>
            <Container>
                <Row>
                    <Col size="12">
                        <EventForm 
                        musicevent={venuename} addVenuename={addVenuename} handleFormSubmit={handleFormSubmit}
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    )
} // AddEvent 

export default AddEvent;