import "./App.css";
import KronosLogo from './useables/KronosLogo.png';
import { Link } from 'react-router-dom';

function Header() {
    return (
	<div className='Header'>
		<div className='leftHead'>
			<img className='mainLogo' src={KronosLogo} alt='Logo' />
			<h1 className='displayName'> Kronos </h1>
		</div>

		<div className='rightHead'>
			<div className='Navigation'>
				<div className='navbar'>
					<Link className='innerLink' to='/homepage'>
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
    )
}

export default Header;
