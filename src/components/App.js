import React from "react"
import Image from "./Image"
import imagesData from "./imagesData"

class App extends React.Component {
    render(){
        const showImages = imagesData.map(image => <Image src={image.src} key={image.key} />)
        return (
                <div>
                    {showImages}
                </div>
            )
    } 
}

export default App;