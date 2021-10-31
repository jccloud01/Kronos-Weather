import './App.css';
import KronosLogo from './useables/KronosLogo.png';

function Header() {
	return (
		<div className='Header'>
			<div className='rightHead' id='innertext'>
				<img className='mainLogo' src={KronosLogo} alt='Logo' />
				<h1 className='displayName'> Kronos </h1>
				<div className='Navigation'>
					<ul class='Nav' id='innertext'>
						<li className='navelement'> Home </li>
						<li className='navelement'> About </li>
						<li className='navelement'> Sign Up </li>
						<li className='navelement'> Search </li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Header;
