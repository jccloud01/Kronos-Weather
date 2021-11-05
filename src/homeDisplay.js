import Weather from "./Weather";
import "./App.css";

function homeDisplay() {
	return (
		<div className="homeDisplayed">
			<div className='DisplayElement'>
				<Weather />
			</div>
		</div>
		
	);
}

export default homeDisplay;