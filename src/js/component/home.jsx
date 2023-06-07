import React,{useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [color, setColor] = useState("")
	return (
		<div className="d-flex flex-column align-items-center justify-content-around">
			<div id="box1">

			</div>
			<div className="d-flex flex-column align-items-center"id="box">
				<div className={"red"+(color === 'red' ? 'selected': '')}
					onClick={()=> setColor('red')}
				></div>
				<div className={"green"+(color === 'green' ? 'selected': '')}
					onClick={()=> setColor('green')}
				></div>
				<div className={"yellow"+(color === 'yellow' ? 'selected': '')}
					onClick={()=> setColor('yellow')}
				></div>
			</div>
		</div>
	);
};

export default Home;
