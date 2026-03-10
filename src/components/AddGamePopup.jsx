import starIcon from '../assets/star.svg'

function AddGamePopup({ onClose }) {
  return (
    <div className="game-form-backdrop" role="presentation">
      <div className="game-form-popup" role="dialog" aria-modal="true" aria-label="Add game">
        <h2 className="game-form-title">Adding a game</h2>

        <div className="game-form-field">
          <label>Name:</label>
          <input type="text" value="" readOnly />
        </div>

        <div className="game-form-field game-form-rating">
          <label>Rating</label>
          <p>
            <img className="rating-star-icon" src={starIcon} alt="" aria-hidden="true" />{' '}
            -
          </p>
        </div>

        <div className="game-form-field">
          <label>Difficulty:</label>
          <input type="text" value="" readOnly />
        </div>

        <div className="game-form-field">
          <label>Players:</label>
          <input type="text" value="" readOnly />
        </div>

        <div className="game-form-field">
          <label>Age:</label>
          <input type="text" value="" readOnly />
        </div>

        <div className="game-form-field game-form-file">
          <label>Image:</label>
          <div className="game-form-file-row">
            <button type="button" className="file-pick-button">
              Pick a file
            </button>
            <span className="file-name">No image picked</span>
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

export default AddGamePopup
