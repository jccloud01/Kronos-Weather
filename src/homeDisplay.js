import Weather from "./Weather";
import Reminder from "./Reminder";
import "./components.css";
import Homepage from './useables/Homepage.jpg'

function homeDisplay() {
	return (
		<div>
		<div className="background">
			<img src={Homepage} alt="serene-mountain" ></img>
		</div>
		<div className='bodyPage'>
			<Weather />
			<Reminder />
		</div>
		</div>
		
	);
}

export default homeDisplay;