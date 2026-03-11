function AdminCards({ game, onEdit, onDelete }) {
	return (
		<article className="admin-card" aria-label={`${game.name} card`}>
			<p className="admin-card-name">{game.name}</p>
			<div className="admin-card-actions" aria-label="Card actions">
				<button type="button" className="admin-card-button" onClick={onEdit}>
					Edit
				</button>
				<button type="button" className="admin-card-button" onClick={onDelete}>
					Delete
				</button>
			</div>
		</article>
	)
}

export default AdminCards
