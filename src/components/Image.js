import React from "react"

function Image (props){
    return(
        <div>
            <img
                alt={props.image.id}
                src={props.image.src}
                onClick={() => {props.clicked(props.image.id)}}
            />
        </div>
    );
};

export default Image