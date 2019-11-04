import React from "react"
import Image from "./Image"
import imagesData from "./imagesData"
import Navbar from "./Navbar"
import "./App.css"

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            score: 0,
            topScore: 0,
            images: imagesData,
            message: "Click an image to begin!"
        };
    };

    scoreUp = () => {
        this.setState(prevState => {
            if (this.state.score === this.state.topScore){
                return {
                    score: prevState.score + 1,
                    topScore: prevState.topScore + 1,
                    message: "You guessed correctly!"
                };
            } else {
                return {
                    score: prevState.score + 1,
                    message: "You guessed correctly!"
                }
            }
        });
    };

    setNewGame = () => {
        this.setState({
            score: 0,
            message: "You guessed incorrectly!"
        });
    };

    returnAllFalse = () => {
        this.setState(prevState => {
            const returnImages = prevState.images.map(image => {
                image.clicked = false;
                return image
            });
            return {
                images: returnImages
            };
        });
    };

    winGame = () => {
        return (
            <div>
                <Navbar score={this.state.score} topScore={this.state.topScore} message={this.state.message}/>
                <div className="container text-center">
                    <img id="win" src="https://thumbs.gfycat.com/CircularEnormousFreshwatereel-small.gif" alt="win" />
                </div>
            </div>
        );
    };


    clicked = (id) => {
        this.setState(prevState => {
            let updatedImages = prevState.images.map(image => {
                if (image.id === id) {
                    if (!image.clicked) {
                        image.clicked = !image.clicked;
                        this.scoreUp();
                    } else {
                        this.setNewGame();
                        this.returnAllFalse();
                    }
                };
                return image
            });
            updatedImages.sort(() => Math.random() - 0.5)
            return {
                images: updatedImages
            };
        });
    };

    render() {
        const showImages = this.state.images.map(image => <Image image={image} key={image.id} clicked={this.clicked} />)
        if (this.state.score === 12) {
            return (
                this.winGame()
            )
        } else {
            return (
                <div>
                    <Navbar score={this.state.score} topScore={this.state.topScore} message={this.state.message}/>
                    <div className="imageContainer container">
                    {showImages}
                    </div>
                </div>
            );
        }
    };
};

export default App;