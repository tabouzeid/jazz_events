import React from "react";

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
        <div className="card border-light mx-auto mt-3">
            <div >{props.date}: {props.eventName} at {props.venueName}</div>
            <div className="card-body">
                <h3 className="card-title">{props.startTime} / {props.address} / {props.cover}</h3>
                <div>{props.sets.map(set => (
                    <div>
                        <p>{set.startTime}</p>
                        <p>{set.artists}</p>
                    </div>
                ))}
                </div>
            </div>
        </div>

    )
}

export default Event;

