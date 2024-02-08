import React from "react";
import Counter from "./secondscounter";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	return (
		
		<div className="text-center">
			<h1 id='demo'><Counter digitOne={props.digitOne} digitTwo={props.digitTwo} digitThree={props.digitThree} digitFour={props.digitFour} digitFive={props.digitFive} digitSix={props.digitSix}/></h1>
		</div>
	);
	
};

export default Home;