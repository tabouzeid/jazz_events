import React from 'react';
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";

export default function EventForm(props) {
    return (
        <Container fluid>
            <Container>
                <Row>
                    <Col size="12">
                        <form>
                            <div className="form-group">
                                <label className="EventForm"><h3> VenueNames </h3></label>
                                <br></br>
                                <input className="col-12 form-control"
                                    value={props.musicevent}
                                    type="text"
                                    name="Event Name"
                                    placeholder="Venue Name"
                                    onChange={props.addVenuename}
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