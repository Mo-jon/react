import React, { useState, useEffect } from 'react';
import Nav from './components/nav';
import Test from './components/test';
import Slot from './components/slot';
import ListItem from './components/listItem';
import Store from '../store';
import Api from '../services/api';

function Demo(props) {
    // 路由跳转
    const [route] = useState(props.history);
    // 获取store中的user信息
    const [user, setUser] = useState("");
    // 列表
    const [list, setList] = useState([]);
    const [count, setCount] = useState(0);
    const [selectItem, setSelectItem] = useState(null);

    // 第二个参数传[]，表示只加载一次
    useEffect(()=>{
        getUser();
        getList();
    }, []);

    // 第二个参数传[count]，每次count变化时执行
    useEffect(() => {
        let print = function() {
            console.log('我是钩子： 被执行了', count)
        }; print();

        // 销毁组件时，取消订阅
        return function cleanup() {
            print = null
        }
    }, [count])

    // 获取user信息
    function getUser() {
        let u = Store.getState().user;
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

    // 获取列表
    function getList() {
        Api.shopList().then(res => {
            console.log('获取列表:', res)
            if(res.res){
                setList(res.data)
            }
        })
    };

    // 接收子组件事件
    function childrenEvent(value){
        console.log('我接收了一个子组件事件', value);
        setSelectItem(value)
    }

    return (
        <div className="Message">
            <button  onClick={() => route.push('/home')}>跳转首页</button>
            this is page of Message
            <p>Store user：{user}</p>
            <button onClick={updateUser}>更新user信息</button>
            <Nav></Nav>
            <Test name='this is a name of Message set'></Test>
            <Slot count={12} top={<h1>我是一个插入标题</h1>} bottom={<b>我是一个插入底部</b>}>
                <p>我是一个插入的html</p>
            </Slot>

            <h1>列表使用</h1>
            <p>当前选择：{selectItem}</p>
            {list.map((item, index) =>
                <ListItem text={item} key={index} myEvent={childrenEvent}></ListItem>
            )}
            <button onClick = {() => setCount(count + 1)}>
                点击我执行钩子 {count}
            </button>
        </div>
    );
}

export default Demo;