import plusAddIcon from '../assets/plus-add-icon.svg'

function AddButton({ onClick }) {
	return (
		<button className="add-button" type="button" aria-label="Add" onClick={onClick}>
			<span className="add-button-icon" aria-hidden="true">
				<img className="add-button-icon-image" src={plusAddIcon} alt="" />
			</span>
			<span className="add-button-label">Add</span>
		</button>
	)
}

export default AddButton
