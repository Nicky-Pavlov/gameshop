function SearchBar() {
	return (
		<form className="search-bar" role="search" onSubmit={(event) => event.preventDefault()}>
			<input type="search" placeholder="Search" aria-label="Search games" />
			<button type="submit" aria-label="Search">
				<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
					<path
						d="M11 4a7 7 0 0 1 5.47 11.37l3.58 3.58a1 1 0 1 1-1.42 1.42l-3.58-3.58A7 7 0 1 1 11 4Zm0 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z"
						fill="currentColor"
					/>
				</svg>
			</button>
		</form>
	)
}

export default SearchBar
