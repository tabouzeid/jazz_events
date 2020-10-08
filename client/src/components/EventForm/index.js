import React from 'react';
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";

export default function EventForm(props) {
    console.log("event form, props is", props)
    return (
        <Container fluid>
            <Container>
                <Row>
                    <Col size="12">
                        <form>
                            <div className="form-group">
                                <label className="EventForm"><h3> Date </h3></label>
                                <br></br>
                                <input className="col-12 form-control"
                                    value={props.musicevent.date}
                                    type="date"
                                    name="date"
                                    placeholder="date"
                                    onChange={props.handleInputChange}
                                />
                            </div>

                            <div className="form-group">
                                <label className="EventForm"><h3> VenueName </h3></label>
                                <br></br>
                                <input className="col-12 form-control"
                                    value={props.musicevent.venuename}
                                    type="text"
                                    name="venuename"
                                    placeholder="Venue Name"
                                    onChange={props.handleInputChange}
                                    //onChange={props.addVenuename}
                                />
                            </div>

                            <div className="form-group">
                                <label className="EventForm"><h3> Address </h3></label>
                                <br></br>
                                <input className="col-12 form-control"
                                    value={props.musicevent.address}
                                    type="text"
                                    name="address"
                                    placeholder="Address"
                                    onChange={props.handleInputChange}
                                />
                            </div>

                            <div className="form-group">
                                <label className="EventForm"><h3> startTime </h3></label>
                                <br></br>
                                <input className="col-12 form-control"
                                    value={props.musicevent.startTime}
                                    type="time"
                                    name="startTime"
                                    placeholder="Start Time"
                                    onChange={props.handleInputChange}
                                />
                            </div>

                            <div className="form-group">
                                <label className="EventForm"><h3> Event Name </h3></label>
                                <br></br>
                                <input className="col-12 form-control"
                                    value={props.musicevent.eventName}
                                    type="text"
                                    name="eventName"
                                    placeholder="Event Name"
                                    onChange={props.handleInputChange}
                                />
                            </div>

                            <div className="form-group">
                                <label className="EventForm"><h3> Cover </h3></label>
                                <br></br>
                                <input className="col-12 form-control"
                                    value={props.musicevent.cover}
                                    type="number"
                                    name="cover"
                                    placeholder="cover cost"
                                    onChange={props.handleInputChange}
                                />
                            </div>

                            <div className="form-group">
                                <label className="EventForm"><h3> Set Start Time </h3></label>
                                <br></br>
                                <input className="col-12 form-control"
                                    value={props.musicevent.sets[0].startTime}
                                    type="time"
                                    name="sets[0].startTime"
                                    placeholder="setStart Time"
                                    onChange={props.handleInputChange}
                                />
                            </div>
                            <button type="submit" className="submitBtn btn btn-primary" onClick={props.handleFormSubmit}>
                                Submit 
                             </button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}