import { NavLink, Route, Routes } from 'react-router-dom'
import './App.css'

function HomePage() {
  return (
    <section>
      <h1>Home</h1>
      <p>Welcome to GameCafe. Start your next gaming session here.</p>
    </section>
  )
}

function ExplorePage() {
  return (
    <section>
      <h1>Explore</h1>
      <p>Browse game titles, events, and featured experiences.</p>
    </section>
  )
}

function BookingPage() {
  return (
    <section>
      <h1>Booking</h1>
      <p>Reserve your seat, setup, or private room in a few clicks.</p>
    </section>
  )
}

function ProfilePage() {
  return (
    <section>
      <h1>Profile</h1>
      <p>Manage your account, preferences, and recent bookings.</p>
    </section>
  )
}

function App() {
  return (
    <div className="app-shell">
      <nav className="top-nav" aria-label="Main navigation">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/explore">Explore</NavLink>
        <NavLink to="/booking">Booking</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </nav>

      <main className="page-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
