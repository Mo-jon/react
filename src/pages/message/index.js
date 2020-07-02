import React from 'react';
import Test from '../../components/test';
import Dom from '../../components/dom';

function Message() {
    return (
        <div className="Message">
            this is page of Message
            <ul>
                <li><a href="#/home">Home</a></li>
                <li><a href="#/about">About</a></li>
                <li><a href="#/message">Message</a></li>
            </ul>
            <Test name='this is a name of Message set'></Test>
            <Dom></Dom>
            <Dom count={12}></Dom>
        </div>
    );
}

export default Message;