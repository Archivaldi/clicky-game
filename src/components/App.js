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
            images: imagesData
        };
    };

    scoreUp = () => {
        this.setState(prevState => {
            if (this.state.score === this.state.topScore){
                return {
                    score: prevState.score + 1,
                    topScore: prevState.topScore + 1
                };
            } else {
                return {
                    score: prevState.score + 1
                }
            }
        });
    };

    setNewGame = () => {
        this.setState({
            score: 0
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
                <h1>You WON!</h1>
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
                    <Navbar score={this.state.score} topScore={this.state.topScore} />
                    <div className="imageContainer container">
                    {showImages}
                    </div>
                </div>
            );
        }
    };
};

export default App;