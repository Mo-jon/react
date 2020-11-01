import React, { useState } from 'react';
import Api from '../../services/api';
import Store from '../../store'
import Nav from '../../components/nav'

function Login(props){
    const [form, setForm] = useState({
        name: "",
        password: ""
    });

    function submit(){
        Api.login(form.name, form.password).then(res => {
            console.log('[服务器返回结果]', res);
            if(!res.error){
                let data = res.data;
                Store.dispatch({
                    type: 'setUser',
                    value: {
                        id: data.admin_id,
                        token: data.admin_token
                    }
                });
                // router 跳转
                props.history.push('/list');
            }
        })
    }

    return (
        <div className="login">
            <Nav></Nav>
            <div>
                <div>
                    <label>用户名</label>
                    <input type="text" value={form.name} onChange={(event)=>setForm({...form, name: event.target.value})}></input>
                </div>
                <div>
                    <label>密码</label>
                    <input type="text" value={form.password} onChange={(event)=>setForm({...form, password: event.target.value})}></input>
                </div>
                <button onClick={submit}>提交</button>
            </div>
        </div>
    );
}

export default Login