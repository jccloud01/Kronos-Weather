import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import aboutPage from './aboutPage';
import homeDisplay from './homeDisplay';
import Landing from './Landing';
import { Switch, Route, Redirect } from 'react-router-dom';



function App() {
   
  return (
		<div className='App'>
			<Header />
      
			<Switch>
				<Route path='/homepage' exact render={() => <Redirect to='/' />} />
        <Route exact path='/' component={Landing}/>
				<Route exact path='/about' component={aboutPage} />
				<Route exact path='/MainDisplay' component={homeDisplay} />
			</Switch>
		</div>
	);
}

export default App;
