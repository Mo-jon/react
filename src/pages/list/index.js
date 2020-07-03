import React, { useState, useEffect } from 'react';
import ListItem from '../../components/listItem';
import Nav from '../../components/nav'

function List() {
    const [list, setList] = useState([]);
    const [count, setCount] = useState(0);

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
        setTimeout(() => {
            let l = [];
            for (let i = 0; i < 10; i++) {
                l.push('内容' + i)
            }
            setList(l)
        }, 100);
    };

    return (
        <div>
            <Nav> </Nav>
            {list.map((item, index) =>
                <ListItem text = {item} key = {index}></ListItem>
            )}
            <button onClick = {() => setCount(count + 1)}>
                点击我执行钩子 {count}
            </button>
        </div>
    )
}

export default List