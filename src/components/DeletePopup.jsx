function DeletePopup({ name, onClose }) {
  return (
    <div className="delete-popup-backdrop" role="presentation">
      <div className="delete-popup" role="dialog" aria-modal="true" aria-label="Delete confirmation">
        <p className="delete-popup-title">Are you sure you want to delete {name}?</p>
        
        <div className="delete-popup-actions">
          <button
            type="button"
            className="delete-popup-button delete-popup-button-neutral"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="button"
            className="delete-popup-button delete-popup-button-danger"
            onClick={onClose}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeletePopup
