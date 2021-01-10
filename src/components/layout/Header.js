import React, { useState } from 'react';
import { FaPizzaSlice } from 'react-icons/fa';
import { AddTask } from '../AddTask';

export const Header = ({ darkMode, setDarkMode}) => {
    const [shouldShowMain, setShouldShowMain] = useState(false);
    const [showQuickAddTask, setShowQuickAddTask] = useState(false);

    return (<header className="header" data-testid="header">
        <nav>
            <div className="logo">
                <img src="/images/logo.png" alt="TodoApp"></img>
            </div>
            <div className="settings">
                <ul>
                    <li 
                    data-testid="quick-add-task-action"
                    className="settings__add">
                    <button
                        aria-label="Quick Add Task"
                        type="button"
                    onClick={() => {setShowQuickAddTask(true); setShouldShowMain(true);
                       
                    }}
                    onKeyDown={() =>{
                        setShowQuickAddTasks(true);
                        setShouldShowMain(true);
                    }}
                >
                    +
                    </button>
                    </li>
                    <li
                        data-testid="dark-mode-action"
                        className="settings__darkmode"
                        >
                        <button
                        aria-label="Darkmode on/off"
                        type="button" 
                        onClick={()) => setDarkMode(!darkMode){'}'}
                        onKeyDown={()) => setDarkMode(!darkMode){'}'}
                
                    >
                        <FaPizzaSlice></FaPizzaSlice>
                    </li>
                </ul>
            </div>
        </nav>

        <AddTask
            showAddTaskMain={false}
            shouldShowMain={shouldShowMain}
            showQuickAddTask={showQuickAddTask}
            setShowQuickAddTask={setShowQuickAddTask}
            />
    </header>
    );
};