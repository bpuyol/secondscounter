//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
let digitOne = 0;
let digitTwo = 0;
let digitThree = 0;
let digitFour = 0;
let digitFive = 0;
let digitSix = 0;


setInterval(function () { 
    digitOne++;
    if (digitOne === 10) {
        digitTwo++;
        digitOne = 0;
    }
    if (digitTwo === 10) {
        digitThree++;
        digitTwo = 0;
    }
    if (digitThree === 10) {
        digitFour++;
        digitThree = 0;
    }
    if (digitFour === 10) {
        digitFive++;
        digitFour = 0;
    }
    if (digitFive === 10) {
        digitSix++;
        digitFive = 0;
    }
    ReactDOM.render(<Home digitOne={digitOne} digitTwo={digitTwo} digitThree={digitThree} digitFour={digitFour} digitFive={digitFive} digitSix={digitSix}/>, document.querySelector("#app"));
}, 1000);

Counter.propTypes= {
    digitOne: propTypes.number,
    digitTwo: propTypes.number,
    digitThree: propTypes.number,
    digitFour: propTypes.number,
    digitFive: propTypes.number,
    digitSix: propTypes.number
}

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));