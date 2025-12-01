
type FilterType = 'all' | 'completed' | 'pending';

type TaskFilterProps = {
    currentFilter: FilterType;
    onFilterChange: (filter: FilterType) => void
}

function TaskFilter({ currentFilter, onFilterChange }: TaskFilterProps) {
    const filters: { value: FilterType; label: string }[] = [
        { value: 'all', label:'All '},
        { value: 'completed', label:'Completed'},
        { value: 'pending', label:'Pending'}
    ]

    return (
        <div>
            {filters.map((filter) => (
                <button
                    key={filter.value}
                    onClick={() => onFilterChange(filter.value)}
                    style={{
                        cursor: 'pointer',
                        backgroundColor: currentFilter === filter.value ? '#2196F3' : '#e0e0e0',
                        color: currentFilter === filter.value ? 'white' : '#333',
                        fontWeight: currentFilter === filter.value ? 'bold' : 'normal'
                    }}  >
                        {filter.label}
                </button>
            ))}
        </div>
    )
}

export default TaskFilter;