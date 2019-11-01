import React from "react"

function Image (props){
    return(
        <div>
            <img
                alt={props.key}
                src={props.src}
            />
        </div>
    )
}

export default Image