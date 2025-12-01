import type { Task } from '../types';

type TaskItemProps = {
    task: Task
}

function TaskItem({ task }: TaskItemProps) {
    return ( 
        <div>
            <input 
                type="checkbox"
                checked={task.completed}
                readOnly
            />
            <span
                style={{
                    textDecoration: task.completed ? 'line-through' : 'none'

                }}>
                {task.title}
            </span>

            <button>Delete</button>
        </div>
    )
}

export default TaskItem;