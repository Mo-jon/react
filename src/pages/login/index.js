import React, { useState } from 'react';
import Api from '../../services/api';

function Login(){
    const [form, setForm] = useState({
        name: "",
        password: ""
    });

    function submit(){
        console.log('提交', form)
        Api.login(form.name, form.password).then(resp => {
            console.log('[服务器返回结果]', resp)
        })
    }

    return (
        <div className="login">
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