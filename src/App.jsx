import { Route, Routes } from 'react-router-dom'
import Layout from './Layout.jsx'
import BookingPage from './views/BookingPage.jsx'
import ExplorePage from './views/ExplorePage.jsx'
import HomePage from './views/HomePage.jsx'
import ProfilePage from './views/ProfilePage.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="explore" element={<ExplorePage />} />
        <Route path="booking" element={<BookingPage />} />
        <Route path="profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  )
}

export default App
