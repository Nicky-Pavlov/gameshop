import { useState } from 'react'
import starIcon from '../assets/star.svg'

const PLAYER_OPTIONS = ['1 player', '2 players', '2-4 players', '4-6 players', '6+ players']
const AGE_OPTIONS = ['6+', '8+', '10+', '12+', '14+', '16+', '18+']
const DIFFICULTY_OPTIONS = ['Easy', 'Easy-Medium', 'Medium', 'Medium-Hard', 'Hard']

function AddGamePopup({ onClose, onConfirm }) {
  const [formData, setFormData] = useState({
    name: '',
    rating: '',
    difficulty: '',
    players: '',
    age: '',
    imageName: 'No image picked',
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
    onConfirm(formData)
  }

  return (
    <div className="game-form-backdrop" role="presentation">
      <form className="game-form-popup" role="dialog" aria-modal="true" aria-label="Add game" onSubmit={handleSubmit}>
        <h2 className="game-form-title">Adding a game</h2>

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
            <button type="button" className="file-pick-button" onClick={() => {}}>
              Pick a file
            </button>
            <span className="file-name">{formData.imageName}</span>
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

export default AddGamePopup
