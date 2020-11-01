import React from 'react';

function ListItem(props){
    function sendEvent(id){
        props.myEvent(id)
    }

    return(
    <div onClick={()=>{console.log('我冒泡了')}}>
        {props.text.crop_id} <span>--</span> {props.text.crop_name}

        {/* 发送事件给父组件 */}
        <button onClick={(e)=>{
                // 阻止事件冒泡
                e.stopPropagation();
                sendEvent(props.text.crop_id);
            }
        }>
            发送事件到父组件
        </button>
    </div>
    )
}

export default ListItem