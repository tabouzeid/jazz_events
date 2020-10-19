import React from 'react';

export default function EventForm(props) {
    console.log("event form, props is", props.musicevent)
    return (

        <form className="col-10 mx-auto" >
            <div className="form-group">
                < label className="EventForm" > <h3> Date </h3></label >
                <br></br>
                <input className="col-12 form-control"
                    value={props.musicevent.date}
                    type="date"
                    name="date"
                    placeholder="date"
                    onChange={props.handleInputChange}
                />
            </div >

            <div className="form-group">
                <label className="EventForm"><h3> VenueName </h3></label>
                <br></br>
                <input className="col-12 form-control"
                    value={props.musicevent.venuename}
                    type="text"
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

            {/* <button type="submit" className="submitBtn btn btn-primary" onClick={props.handleFormSubmit}>
                                Submit
                             </button> */}
        </form >
    );
}