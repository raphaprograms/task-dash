

type TaskStatsProps = {
    total: number,
    completed: number,
    pending: number
}

function TaskStats({ total, completed, pending}: TaskStatsProps) {
    const compPercentage = total > 0 ? Math.round((completed / total) * 100) : 0

    return (
        <div>
            <div>Total: {total}</div>

            <div>Completed: {completed}</div>

            <div>Pending: {pending}</div>

            <div>Progress: {compPercentage}%</div>
            
        </div>
    )
 }

 export default TaskStats;