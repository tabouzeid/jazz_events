import React from 'react';

export default function EventForm(props) {
    console.log("event form, props is", props.musicevent)
    return (

        <form className="col-10 mx-auto my-0" >
            <div className="form-group">
                < label className="EventForm" > <h3> Date </h3></label >
                <br></br>
                <input className="col-12 form-control"
                    value={props.musicevent.date}
                    type="date"
                    style={{
                        fontFamily: "'Raleway', sans-serif"
                    }}
                    name="date"
                    placeholder="date"
                    onChange={props.handleInputChange}
                />
            </div >

            <div className="form-group">
                <label className="EventForm"><h3> Venue Name </h3></label>
                <br></br>
                <input className="col-12 form-control"
                    value={props.musicevent.venuename}
                    type="text"
                    style={{
                        fontFamily: "'Raleway', sans-serif"
                    }}
                    name="venueName"
                    placeholder="Venue Name"
                    onChange={props.handleInputChange}
                />
            </div>

            <div className="form-group">
                <label className="EventForm"><h3> Address </h3></label>
                <br></br>
                <input className="col-12 form-control"
                    value={props.musicevent.address}
                    type="text"
                    style={{
                        fontFamily: "'Raleway', sans-serif"
                    }}
                    name="address"
                    placeholder="Address"
                    onChange={props.handleInputChange}
                />
            </div>

            <div className="form-group">
                <label className="EventForm"><h3> Event Name </h3></label>
                <br></br>
                <input className="col-12 form-control"
                    value={props.musicevent.eventName}
                    type="text"
                    style={{
                        fontFamily: "'Raleway', sans-serif"
                    }}
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
                    style={{
                        fontFamily: "'Raleway', sans-serif"
                    }}
                    name="cover"
                    placeholder="cover cost"
                    onChange={props.handleInputChange}
                />
            </div>
        </form >
    );
}