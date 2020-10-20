import React, { useContext } from 'react';
import UserContext from "../../utils/UserContext";
import musicNote from "../../assets/musicNote.png";

function Event(props) {

    const { admin, user } = useContext(UserContext);

    let days = [
        'Sun',
        'Mon',
        'Tue',
        'Wed',
        'Thur',
        'Fri',
        'Sat'
    ]

    let months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ]

    let eventDate = new Date(props.date);
    let googleMapsQuery = "https://www.google.com/maps/search/?api=1&query=" + props.address;

    return (
        <div className="col-8 d-flex mx-auto my-4">
            <div className="d-flex flex-column mr-5 my-auto">

                <h6 className="my-0">{days[eventDate.getDay()]}</h6>
                <h3 className="my-0">{months[eventDate.getMonth()] + " " + eventDate.getUTCDate()}</h3>
                <h6 className="my-0">{eventDate.getFullYear()}</h6>

            </div>

            <div className="ml-4 flex-fill">
                <div className="d-flex justify-content-between border-bottom">
                    <h5>{props.eventName} at {props.venueName}</h5>
                    <div><img src={musicNote} alt="music note" style={{ height: "15px" }} /></div>
                </div>
                <div>
                    <div className="d-flex justify-content-between mt-2">
                        <h6><a href={googleMapsQuery} target="_blank" rel="noopener noreferrer">{props.address}</a></h6>
                        {admin ?
                            (
                                <button className="btn btn-light my-auto ml-3 btn-sm saveUnsave" type="button" onClick={props.buttonBehavior} index={props.index}>{props.buttonText}</button>
                            ) : user ? (
                                <button className="btn btn-light my-auto ml-3 btn-sm saveUnsave" type="button" onClick={props.buttonBehavior} index={props.index}>{props.buttonText}</button>
                            ) : (<div></div>)}
                    </div>
                    <div className="mt-2">
                        {props.sets.map((set, index) => (
                            <div key={index}>
                                <p className="my-0 pt-0" style={{
                                    fontFamily: "'Raleway', sans-serif"
                                }}>{set.startTime}: {set.artistList}</p>
                            </div>
                        ))}
                        <p className="text-muted pt-3" style={{
                            fontFamily: "'Raleway', sans-serif"
                        }}>{props.cover === 0 || "" ? "Free" : "$" + props.cover}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Event;

