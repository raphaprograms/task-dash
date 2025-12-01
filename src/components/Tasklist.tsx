import type { Task } from "../types";
import TaskItem from "./TaskItem";

type TaskListProps = {
    tasks: Task[],
    onToggleTask: (id: number) => void
    onDeleteTask: (id: number) => void
}

function TaskList({ tasks, onToggleTask, onDeleteTask }: TaskListProps) {
    if (tasks.length === 0) {
        return (
            <div>
                <p>No tasks found</p>
                <p>Add a task to get started.</p>
            </div>
        )
    }

    return (
        <div>
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onToggle={() => onToggleTask(task.id)}
                    onDelete={() => onDeleteTask(task.id)}
                />
            ))}
        </div>
    )
}

export default TaskList;