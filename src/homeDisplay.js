import Weather from "./Weather";
import "./App.css";

function homeDisplay() {
	return (
		<div className="homeDisplayed">
			<div className='DisplayElement'>
				<h1> Hello </h1>
				<Weather />
			</div>
		</div>
		
	);
}

export default homeDisplay;