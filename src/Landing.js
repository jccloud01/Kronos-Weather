import { Link } from "react-router-dom";

function Landing() {
    return(
        <div className='homeElement'>
			<h1 className="welcomeTitle"> Welcome to Kronos Weather... </h1>
			<div className='mainButton'>
				<Link className='btn btn-blue' id='button' to='/MainDisplay'>
					Click to Start!
				</Link>
			</div>
		</div>
    );
}

export default Landing;