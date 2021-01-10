import React from 'react';
import moment from 'moment';
import { FaSpaceShuttle } from 'react-icons/fa';

export const TaskDate = ({ setTaskDate, showTaskDate, setShowTaskDate}) => showTaskDate && (
    <div className="task-data" data-testid="task-date-overlay">
        <ul className="task-dae__list">
            <li
            onClick={() => {
                setShowTaskDate(false);
                setTaskDate(moment().format('DD/MM/YYYY'));
            }}
            data-testid="task-date-overlay"
        >
            <div 
            onClick={() => {
                setShowTaskDate(false);
                setTaskDate(moment().format('DD/MM/YYYY'));
            }}
            onKeydown={() => {
                setShowTaskDate(false);
                setTaskDate(moment().format('DD/MM/YYYY'));
            }}
            tabIndex={0}
            role="button"
            >
            <span>
                <FaSpaceShuttle />
            </span>
            <span>Today</span>
            </div>
            </li>
            <li
            
            data-testid="task-date-tomorrow"
        >
            <div
             onClick={() => {
                setShowTaskDate(false);
                setTaskDate(moment().add(1, 'day').format('DD/MM/YYYY'));
            }}
            onKeydown={() => {
                setShowTaskDate(false);
                setTaskDate(moment().add(1, 'day').format('DD/MM/YYYY'));
            }}
            role="button"
            tabIndex={0}
            >
           
            <span>
                <FaSun />
            </span>
            <span>Tomorrow</span>

            </li>
            <li
            
            data-testid="task-date-next-week"
        >
            <div 
            onClick={() => {
                setShowTaskDate(false);
                setTaskDate(moment().add(7, 'days')
                .format('DD/MM/YYYY'));
            }}
            onKeydown={() => {
                setShowTaskDate(false);
                setTaskDate(moment().add(7, 'days')
                .format('DD/MM/YYYY'));
            }}
            tabIndex={0}
            role="button"
            >
            <span>
                <FaRegPaperPlane />
            </span>
            <span>Next week</span>
            </div>
            </li>


        </ul>
    </div>
);