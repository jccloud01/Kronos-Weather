import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import aboutPage from './aboutPage';
import KronosLogo from './useables/KronosLogo.png';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import homeDisplay from './homeDisplay';


function App() {



  const buttonClick = () => {
	document.getElementById('button').style.display = 'none';
  }; 

	return (
		<div className='App'>
			<div className='Header'>
				<div className='leftHead'>
					<img className='mainLogo' src={KronosLogo} alt='Logo' />
					<h1 className='displayName'> Kronos </h1>
				</div>
				<div className='rightHead'>
					<div className='Navigation'>
						<div className='navbar'>
							<Link className='innerLink' to='/homeDisplay'>
								{' '}
								Home{' '}
							</Link>
							<Link className='innerLink' to='/about'>
								{' '}
								About{' '}
							</Link>
						</div>
					</div>
				</div>
			</div>
      <div className="bodyPage">

        <Link
          className="btn btn-blue"
          id="button"
          onClick={buttonClick}
          to="/homeDisplay">
            Click to Start!
          </Link>

      </div>

			<Switch>
				<Route path='/homepage' exact render={() => <Redirect to='/' />} />
        <Route exact path='./homeDisplay' component={homeDisplay} />
				<Route exact path='/about' component={aboutPage} />
			</Switch>
		</div>
	);
}

export default App;
