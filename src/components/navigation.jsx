import { NavLink } from 'react-router-dom'
import homeIcon from '../assets/home-icon.svg'
import exploreIcon from '../assets/explore-icon.svg'
import bookingIcon from '../assets/booking-icon.svg'
import profileIcon from '../assets/profile-icon.svg'

function Navigation() {
	return (
		<nav className="bottom-nav" aria-label="Main navigation">
			<NavLink to="/" end aria-label="Home">
				<img src={homeIcon} alt="" aria-hidden="true" />
			</NavLink>
			<NavLink to="/explore" aria-label="Explore">
				<img src={exploreIcon} alt="" aria-hidden="true" />
			</NavLink>
			<NavLink to="/booking" aria-label="Booking">
				<img src={bookingIcon} alt="" aria-hidden="true" />
			</NavLink>
			<NavLink to="/profile" aria-label="Profile">
				<img src={profileIcon} alt="" aria-hidden="true" />
			</NavLink>
		</nav>
	)
}

export default Navigation
