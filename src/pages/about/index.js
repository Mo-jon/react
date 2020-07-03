import React, { useState, useEffect } from 'react';
import Nav from '../../components/nav'
import Store from '../../store'

function About() {
    // 获取store中的user信息
    const [user, setUser] = useState("");

    useEffect(()=>{
        getUser();
    }, [])

    // 获取user信息
    function getUser() {
        let u = Store.getState().user;
        console.log(u);
        setUser(JSON.stringify(u));
    }

    // 更新user信息
    function updateUser(){
        let n = Math.round(Math.random()*100);
        Store.dispatch({
            type: 'setUser',
            value: {
                id: n,
                token: '******'+n
            }
        })
        // 重新获取
        getUser();
    }

    return (
        <div className="About">
            this is page of About
            <Nav></Nav>
            <button onClick={updateUser}>更新user信息</button>
            <p>Store user：{user}</p>
        </div>
    );
}

export default About;