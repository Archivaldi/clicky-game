import React from "react"
import "./App.css"

function Image (props){
    return(
        <div className="img">
            <img
                alt={props.image.id}
                src={props.image.src}
                onClick={() => {props.clicked(props.image.id)}}
            />
        </div>
    );
};

export default Image