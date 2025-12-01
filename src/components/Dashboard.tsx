import { useState } from 'react';
import type { Task } from '../types';
import TaskList from './Tasklist';
import TaskForm from './TaskForm';
import TaskFilter from './TaskFilter';
import SearchBar from './SearchBar';
import TaskStats from './TaskStats';    

type FilterType = 'all' | 'completed' | 'pending'

function Dashboard() {
    const [tasks, setTasks] = useState<Task[]>([
        { id: 1, title: 'Task 1', completed: true, createdAt: new Date('2025-03-01')},
        { id: 2, title: 'Task 2', completed: false, createdAt: new Date('2025-04-04')},
        { id: 3, title: 'Task 3', completed: true, createdAt: new Date('2025-05-05')},
        { id: 4, title: 'Task 4', completed: false, createdAt: new Date('2025-05-06')},  
    ])

    const [filter, setFilter] = useState<FilterType>('all');

    const [searchTerm, setSearchTerm] = useState('');

    const handleAddTask = (title: string) => {
        const newTask: Task = {
            id: Date.now(),
            title: title,
            completed: false,
            createdAt: new Date()
        }

        setTasks(prevTasks => [...prevTasks, newTask])
    }

    const handleToggleTask = (id: number) => {
        setTasks(prevTasks => 
            prevTasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task
            ) 
        )
    }

    const handleDeleteTask = (id: number) => {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== id))
    }

    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.completed).length;
    const pendingTasks = tasks.filter(task => !task.completed).length;

    const filteredTasks = tasks
        .filter(task => {
            if (filter === 'completed') return task.completed
            if (filter == 'pending') return !task.completed
            return true
        })
        .filter(task => {
            return task.title.toLowerCase().includes(searchTerm.toLowerCase())
        })

    return (
        <div>
            <h1>Task Dashboard</h1>
            <TaskForm onAddTask={handleAddTask} />

            <p>Total tasks: {tasks.length}</p>
            
            <SearchBar
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
            />

            <TaskFilter 
                currentFilter={filter}
                onFilterChange={setFilter}
            />

            <p>Showing {filteredTasks.length} of {totalTasks} tasks 
                {searchTerm && `matching "${searchTerm}"`}
                {filter !== 'all' && `${filter}`}
            </p>

              <TaskList 
                tasks={filteredTasks}
                onToggleTask={handleToggleTask}
                onDeleteTask={handleDeleteTask}
                 />
        </div>
    )


}

export default Dashboard;