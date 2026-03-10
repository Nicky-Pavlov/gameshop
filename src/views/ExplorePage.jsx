import { useState } from 'react'
import mainLogo from '../assets/main-logo.png'
import AddButton from '../components/AddButton.jsx'
import AddGamePopup from '../components/AddGamePopup.jsx'
import AdminCards from '../components/AdminCards.jsx'
import SearchBar from '../components/SearchBar.jsx'

function ExplorePage() {
  const [isAddPopupOpen, setIsAddPopupOpen] = useState(false)

  return (
    <>
      <section className="explore-page">
        <img className="explore-logo" src={mainLogo} alt="GameCafe logo" />
      </section>
      <header className="explore-header">
        <h1>Games</h1>
      </header>
      <SearchBar />
      <AddButton onClick={() => setIsAddPopupOpen(true)} />
      <AdminCards name="Azul" />

      {isAddPopupOpen && <AddGamePopup onClose={() => setIsAddPopupOpen(false)} />}
    </>
  )
}

export default ExplorePage
