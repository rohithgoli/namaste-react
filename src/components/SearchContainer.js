const SearchContainer = (props) => {

    const {searchText, updateSearchText, displaySearchResults} = props

    return (
        <div className="flex-row justify-center w-full">
            <input 
                type="search"
                className="search-input"
                value={searchText} 
                onChange={(e) => updateSearchText(e.target.value)}
            />
            <button 
                type="button"
                className="search-btn"
                onClick={displaySearchResults}
            >
                Search
            </button>
        </div>
    )
}

export default SearchContainer;