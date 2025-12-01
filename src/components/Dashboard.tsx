import { useState } from 'react';
import type { Task } from '../types';
import TaskList from './Tasklist';


function Dashboard() {
    const [tasks, setTasks] = useState<Task[]>([
        { id: 1, title: 'Task 1', completed: true, createdAt: new Date('2025-03-01')},
        { id: 2, title: 'Task 2', completed: false, createdAt: new Date('2025-04-04')},
        { id: 3, title: 'Task 3', completed: true, createdAt: new Date('2025-05-05')},
        { id: 4, title: 'Task 4', completed: false, createdAt: new Date('2025-05-06')},  
    ])

    return (
        <div>
            <h1>Task Dashboard</h1>

            <p>Total tasks: {tasks.length}</p>

            <TaskList tasks={tasks} />
        </div>
    )


}

export default Dashboard;