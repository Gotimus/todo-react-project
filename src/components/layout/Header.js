import React from 'react';
import { FaPizzaSlice } from 'react-icons/fa';

export const Header = () => {
    return <header className="header" data-testid="header">
        <nav>
            <div className="logo">
                <img src="/images/logo.png" alt="TodoApp"></img>
            </div>
            <div className="settings">
                <ul>
                    <li className="settings__add">+</li>
                    <li className="settings__darkmode">
                        <FaPizzaSlice></FaPizzaSlice>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
}