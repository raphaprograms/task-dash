import { useState } from 'react';

type TaskFormProps = {
    onAddTask: (title: string) => void
}


function TaskForm({ onAddTask }: TaskFormProps) {
    const [title, setTitle] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (title.trim() === '') return

        onAddTask(title.trim())

        setTitle('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input 
                    type="text" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder='Enter a new task...' 
                />
                <button
                    type="submit"
                >
                    Add Task
                </button>
            </div>
        </form>
    )
}

export default TaskForm;