import { Button, Input } from '@material-ui/core';
import './todo-list.css';
import { useRef, useState } from 'react';

const ToDoList = () => {
    const [tasks, setTasks] = useState<{ task: string, completed: boolean }[]>([]);
    const [currentTask, setCurrentTask] = useState('');

    const inputTask = useRef<any>(null);

    const addTask = () => {
        if (currentTask) {
            setTasks([...tasks, { task: currentTask, completed: false }]);
            inputTask.current.value = '';
            setCurrentTask('');
        }
    }

    const deleteTask = (taskToDelete: string) => {
        setTasks(tasks.filter(task => {
            return task.task !== taskToDelete;
        }));
    }

    const completeTask = (taskToComplete: string) => {
        setTasks(tasks.map(task => {
            if (task.task === taskToComplete) {
                task.completed = true;
            }
            return task;
        }));
    };

    return (
        <div>
            <h1>Todo List</h1>
            <div>
                <Input inputRef={inputTask} className="input" type="text" placeholder="Task..."
                    onChange={(event) => { setCurrentTask(event.target.value)}} 
                    onKeyDown={(event) => { if (event.key === 'Enter') { addTask() }}}
                />
                <Button className="button" variant="contained" color="primary" onClick={ addTask }>Add task</Button>
            </div>
            <hr/>
            <ul>
                {tasks.map((val, key) => {
                    return  (
                        <div key={key} className="task">
                            <li>{val.task}</li>
                            <Button onClick={() => completeTask(val.task)}>Complete</Button>
                            <Button onClick={() => deleteTask(val.task)}>X</Button>
                            {val.completed ? <h1>Task Completed</h1> : <h1>Not done yet</h1>}
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}

export default ToDoList;