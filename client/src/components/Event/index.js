import React from "react";
import musicNote from "../../assets/musicNote.png";

function Event(props) {

    // <div class="card">
    //     <h5 class="card-header">Featured</h5>
    //     <div class="card-body">
    //         <h5 class="card-title">Special title treatment</h5>
    //         <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    //         <a href="#" class="btn btn-primary">Go somewhere</a>
    //     </div>
    // </div>

    /////////////


    return (
        <div className="mx-auto my-3 col-9">
            <div className="d-flex justify-content-between border-bottom">
                <h5 className="text-center">{props.eventName} at {props.venueName}</h5>
                <div className="pb-1"><img src={musicNote} alt="music note" /></div>
            </div>
            <div>
                <div className="d-flex justify-content-between mt-2">
                    <h6>{props.address}</h6>
                    <button className="btn btn-info my-auto ml-3 btn-sm saveUnsave" type="button" onClick={props.buttonBehavior} index={props.index}>{props.buttonText}</button>
                </div>
                <ul>
                    <li>Doors open at {props.startTime}</li>
                    <li>Date: {new Date(props.date).toDateString()} </li>
                    <li>Cover: ${props.cover}</li>
                    <div>
                        {props.sets.map((set, index) => (
                            <div key={index}>
                                <li>{set.startTime}, {set.artistList}</li>
                            </div>
                        ))}
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Event;

