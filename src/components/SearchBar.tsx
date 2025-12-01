type SearchBarProps = {
  searchTerm: string
  onSearchChange: (term: string) => void
}

function SearchBar({ searchTerm, onSearchChange}: SearchBarProps) {

    return (
        <div>
            <input 
                type="text" 
                value={searchTerm} 
                onChange={(e) => onSearchChange(e.target.value)} 
                placeholder="Search Tasks"
            />
        </div>
    )
}

export default SearchBar;