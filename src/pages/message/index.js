import React, { useState, useEffect } from 'react';

import Nav from '../../components/nav'
import Test from '../../components/test';
import Dom from '../../components/dom';
import Store from '../../store'


function Message() {
    // 获取store中的user信息
    const [user, setUser] = useState("");

    useEffect(()=>{
        getUser();
    }, [])

    // 获取user信息
    function getUser() {
        let u = Store.getState().user;
        setUser(JSON.stringify(u));
    }

    return (
        <div className="Message">
            this is page of Message
            <p>Store user：{user}</p>
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