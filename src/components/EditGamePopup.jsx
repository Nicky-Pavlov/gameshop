import { useState } from 'react'
import crossIcon from '../assets/cross.svg'
import starIcon from '../assets/star.svg'

const PLAYER_OPTIONS = ['1 player', '2 players', '2-4 players', '4-6 players', '6+ players']
const AGE_OPTIONS = ['6+', '8+', '10+', '12+', '14+', '16+', '18+']
const DIFFICULTY_OPTIONS = ['Easy', 'Easy-Medium', 'Medium', 'Medium-Hard', 'Hard']

function EditGamePopup({ game, onClose, onConfirm }) {
  const [formData, setFormData] = useState({
    name: game?.name ?? '',
    rating: game?.rating ?? '',
    difficulty: game?.difficulty ?? '',
    players: game?.players ?? '',
    age: game?.age ?? '',
    imageName: game?.imageName ?? 'No image picked',
  })

  const handleChange = (field) => (event) => {
    setFormData((prev) => ({ ...prev, [field]: event.target.value }))
  }

  const handleRatingChange = (event) => {
    const nextValue = event.target.value
    if (nextValue === '') {
      setFormData((prev) => ({ ...prev, rating: '' }))
      return
    }

    const numericValue = Number(nextValue)
    if (Number.isNaN(numericValue)) {
      return
    }

    const clampedValue = Math.max(0, Math.min(5, numericValue))
    setFormData((prev) => ({ ...prev, rating: clampedValue.toString() }))
  }

  const handleRatingBlur = () => {
    if (formData.rating === '') {
      return
    }
    const numericValue = Number(formData.rating)
    if (!Number.isNaN(numericValue)) {
      setFormData((prev) => ({ ...prev, rating: numericValue.toFixed(1) }))
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!formData.name.trim()) {
      return
    }
    onConfirm({ ...game, ...formData })
  }

  return (
    <div className="game-form-backdrop" role="presentation">
      <form className="game-form-popup" role="dialog" aria-modal="true" aria-label="Edit game" onSubmit={handleSubmit}>
        <h2 className="game-form-title">Editing a game</h2>

        <div className="game-form-field">
          <label>Name:</label>
          <input type="text" value={formData.name} onChange={handleChange('name')} />
        </div>

        <div className="game-form-field game-form-rating">
          <label>Rating:</label>
          <div className="game-form-rating-row">
            <img className="rating-star-icon" src={starIcon} alt="" aria-hidden="true" />
            <input
              className="game-form-rating-input"
              type="number"
              min="0"
              max="5"
              step="0.1"
              placeholder="0.0"
              value={formData.rating}
              onChange={handleRatingChange}
              onBlur={handleRatingBlur}
            />
          </div>
        </div>

        <div className="game-form-field">
          <label>Difficulty:</label>
          <select value={formData.difficulty} onChange={handleChange('difficulty')}>
            {!DIFFICULTY_OPTIONS.includes(formData.difficulty) && formData.difficulty ? (
              <option value={formData.difficulty}>{formData.difficulty}</option>
            ) : null}
            <option value="">Select difficulty</option>
            {DIFFICULTY_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="game-form-field">
          <label>Players:</label>
          <select value={formData.players} onChange={handleChange('players')}>
            {!PLAYER_OPTIONS.includes(formData.players) && formData.players ? (
              <option value={formData.players}>{formData.players}</option>
            ) : null}
            <option value="">Select players</option>
            {PLAYER_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="game-form-field">
          <label>Age:</label>
          <select value={formData.age} onChange={handleChange('age')}>
            {!AGE_OPTIONS.includes(formData.age) && formData.age ? (
              <option value={formData.age}>{formData.age}</option>
            ) : null}
            <option value="">Select age</option>
            {AGE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="game-form-field game-form-file">
          <label>Image:</label>
          <div className="game-form-file-row">
            <button type="button" className="file-pick-button">
              Pick a file
            </button>
            <span className="file-name">{formData.imageName}</span>
            <button
              type="button"
              className="file-clear-button"
              onClick={() => setFormData((prev) => ({ ...prev, imageName: 'No image picked' }))}
            >
              <img className="file-clear-icon" src={crossIcon} alt="" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="game-form-actions">
          <button type="button" className="delete-popup-button delete-popup-button-neutral" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" className="game-form-confirm">
            Confirm
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditGamePopup
