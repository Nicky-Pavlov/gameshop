import { useState } from 'react'
import DeletePopup from './DeletePopup.jsx'
import EditGamePopup from './EditGamePopup.jsx'

function AdminCards({ name = 'Azul' }) {
	const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false)
	const [isEditPopupOpen, setIsEditPopupOpen] = useState(false)

	return (
		<>
			<article className="admin-card" aria-label={`${name} card`}>
				<p className="admin-card-name">{name}</p>
				<div className="admin-card-actions" aria-label="Card actions">
					<button type="button" className="admin-card-button" onClick={() => setIsEditPopupOpen(true)}>
						Edit
					</button>
					<button
						type="button"
						className="admin-card-button"
						onClick={() => setIsDeletePopupOpen(true)}
					>
						Delete
					</button>
				</div>
			</article>

			{isEditPopupOpen && <EditGamePopup name={name} onClose={() => setIsEditPopupOpen(false)} />}
			{isDeletePopupOpen && <DeletePopup name={name} onClose={() => setIsDeletePopupOpen(false)} />}
		</>
	)
}

export default AdminCards
