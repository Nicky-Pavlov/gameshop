import { Outlet } from 'react-router-dom'
import Navigation from './components/navigation.jsx'
import './App.css'

function Layout() {
  return (
    <div className="app-shell">
      <main className="page-content">
        <Outlet />
      </main>

      <Navigation />
    </div>
  )
}

export default Layout
