import React, { useState } from 'react';

function Dom(props) {
    // useState 设置默认值，setCount 更新值
    let [count, setCount] = useState(() => {
        // 计算初始state
        return props.count ? props.count : 0
    });

    const add = () => {
        let c = count + 1
        setCount(c);
        console.log('[DomComponent]', count)
    }

    return (
        <div>
            当前值：{count}
            <button onClick={add}>点击我+1</button>

            {props.top && <hr />}
            <div style={{ background: '#ccc' }}>
                <h1>插槽使用</h1>
                {/* 插入top */}
                <div className="SplitPane-top">
                    {props.top}
                </div>

                {/* 插槽 */}
                {props.children}

                {/* 插入bottom */}
                <div className="SplitPane-bottom">
                    {props.bottom}
                </div>
            </div>
        </div>
    )
}

export default Dom