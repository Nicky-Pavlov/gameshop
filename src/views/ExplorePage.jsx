import { useEffect, useState } from 'react'
import mainLogo from '../assets/main-logo.png'
import AddButton from '../components/AddButton.jsx'
import AddGamePopup from '../components/AddGamePopup.jsx'
import AdminCards from '../components/AdminCards.jsx'
import DeletePopup from '../components/DeletePopup.jsx'
import EditGamePopup from '../components/EditGamePopup.jsx'
import SearchBar from '../components/SearchBar.jsx'

const EXPLORE_GAMES_STORAGE_KEY = 'gamecafe.explore.games'

const DEFAULT_GAMES = [
  {
    id: 1,
    name: 'Azul',
    rating: '4,8',
    difficulty: 'Easy-Medium',
    players: '2-4 players',
    age: '8+',
    imageName: 'azul-image.jpg',
  },
]

function ExplorePage() {
  const [isAddPopupOpen, setIsAddPopupOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [games, setGames] = useState(() => {
    try {
      const savedGames = localStorage.getItem(EXPLORE_GAMES_STORAGE_KEY)
      if (!savedGames) {
        return DEFAULT_GAMES
      }

      const parsedGames = JSON.parse(savedGames)
      return Array.isArray(parsedGames) ? parsedGames : DEFAULT_GAMES
    } catch {
      return DEFAULT_GAMES
    }
  })
  const [gameToEdit, setGameToEdit] = useState(null)
  const [gameToDelete, setGameToDelete] = useState(null)

  useEffect(() => {
    localStorage.setItem(EXPLORE_GAMES_STORAGE_KEY, JSON.stringify(games))
  }, [games])

  const handleAddGame = (newGame) => {
    setGames((prev) => [{ id: Date.now(), ...newGame }, ...prev])
    setIsAddPopupOpen(false)
  }

  const handleEditGame = (updatedGame) => {
    setGames((prev) => prev.map((game) => (game.id === updatedGame.id ? updatedGame : game)))
    setGameToEdit(null)
  }

  const handleDeleteGame = () => {
    if (!gameToDelete) {
      return
    }
    setGames((prev) => prev.filter((game) => game.id !== gameToDelete.id))
    setGameToDelete(null)
  }

  const filteredGames = games.filter((game) =>
    game.name.toLowerCase().includes(searchQuery.trim().toLowerCase()),
  )

  return (
    <>
      <section className="explore-page">
        <img className="explore-logo" src={mainLogo} alt="GameCafe logo" />
      </section>
      <header className="explore-header">
        <h1>Games</h1>
      </header>
      <SearchBar value={searchQuery} onChange={setSearchQuery} />
      <AddButton onClick={() => setIsAddPopupOpen(true)} />
      {filteredGames.map((game) => (
        <AdminCards
          key={game.id}
          game={game}
          onEdit={() => setGameToEdit(game)}
          onDelete={() => setGameToDelete(game)}
        />
      ))}

      {isAddPopupOpen && (
        <AddGamePopup onClose={() => setIsAddPopupOpen(false)} onConfirm={handleAddGame} />
      )}
      {gameToEdit && (
        <EditGamePopup game={gameToEdit} onClose={() => setGameToEdit(null)} onConfirm={handleEditGame} />
      )}
      {gameToDelete && (
        <DeletePopup
          name={gameToDelete.name}
          onClose={() => setGameToDelete(null)}
          onConfirm={handleDeleteGame}
        />
      )}
    </>
  )
}

export default ExplorePage
