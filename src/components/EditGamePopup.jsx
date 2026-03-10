import crossIcon from '../assets/cross.svg'
import starIcon from '../assets/star.svg'

function EditGamePopup({ name = 'Azul', onClose }) {
  return (
    <div className="game-form-backdrop" role="presentation">
      <div className="game-form-popup" role="dialog" aria-modal="true" aria-label="Edit game">
        <h2 className="game-form-title">Editing a game</h2>

        <div className="game-form-field">
          <label>Name:</label>
          <input type="text" value={name} readOnly />
        </div>

        <div className="game-form-field game-form-rating">
          <label>Rating</label>
          <p>
            <img className="rating-star-icon" src={starIcon} alt="" aria-hidden="true" />{' '}
            4,8
          </p>
        </div>

        <div className="game-form-field">
          <label>Difficulty:</label>
          <input type="text" value="Easy-Medium" readOnly />
        </div>

        <div className="game-form-field">
          <label>Players:</label>
          <input type="text" value="2-4 players" readOnly />
        </div>

        <div className="game-form-field">
          <label>Age:</label>
          <input type="text" value="8+" readOnly />
        </div>

        <div className="game-form-field game-form-file">
          <label>Image:</label>
          <div className="game-form-file-row">
            <button type="button" className="file-pick-button">
              Pick a file
            </button>
            <span className="file-name">azul-image.jpg</span>
            <button type="button" className="file-clear-button" onClick={onClose}>
              <img className="file-clear-icon" src={crossIcon} alt="" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="game-form-actions">
          <button type="button" className="game-form-confirm" onClick={onClose}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  )
}

export default EditGamePopup
