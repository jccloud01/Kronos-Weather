import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import aboutPage from './aboutPage';
import homeDisplay from './homeDisplay';
import Landing from './Landing';
import { Switch, Route, Redirect } from 'react-router-dom';
import quotes from './Quotes';
import Weather from './Weather';



function App() {
   
  return (
		<div className='App'>
			<Header />

			<Switch>
				<Route path='/homepage' exact render={() => <Redirect to='/' />} />
				<Route exact path='/' component={Landing} />
				<Route exact path='/About' component={aboutPage} />
				<Route exact path='/MainDisplay' component={homeDisplay} />
				<Route exact path='/Inspiration' component={quotes} />
			</Switch>
		</div>
	);
}

export default App;
