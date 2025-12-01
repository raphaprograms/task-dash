import type { Task } from "../types";
import TaskItem from "./TaskItem";

type TaskListProps = {
    tasks: Task[]
}

function TaskList({ tasks }: TaskListProps) {
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
                />
            ))}
        </div>
    )
}

export default TaskList;