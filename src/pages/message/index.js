import React from 'react';

import Nav from '../../components/nav'
import Test from '../../components/test';
import Dom from '../../components/dom';


function Message() {
    return (
        <div className="Message">
            this is page of Message
            <Nav></Nav>
            <Test name='this is a name of Message set'></Test>
            <Dom></Dom>
            <Dom count={12} top={<h1>我是一个插入标题</h1>} bottom={<b>我是一个插入底部</b>}>
                <p>我是一个插入的html</p>
            </Dom>
        </div>
    );
}

export default Message;