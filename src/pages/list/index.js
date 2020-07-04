import React, { useState, useEffect } from 'react';
import ListItem from '../../components/listItem';
import Nav from '../../components/nav'
import Api from '../../services/api';

function List() {
    const [list, setList] = useState([]);
    const [count, setCount] = useState(0);
    const [selectItem, setSelectItem] = useState(null);

    // 第二个参数传[]，表示只加载一次
    useEffect(() => {
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
        <div>
            <Nav> </Nav>
            <p>当前选择：{selectItem}</p>
            {list.map((item, index) =>
                <ListItem text={item} key={index} myEvent={childrenEvent}></ListItem>
            )}
            <button onClick = {() => setCount(count + 1)}>
                点击我执行钩子 {count}
            </button>
        </div>
    )
}

export default List