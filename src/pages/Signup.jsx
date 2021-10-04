import React from 'react';
import Header from '../components/Header';
import { useState } from 'react';

function Signup({username, password, updateUser}) {
    return (
        <div>
            <Header />
            <div className="login">
                <div className="loginWrapper">
                    <div className="loginBox">
                        <label>Correo electronico:</label>
                        <input defaultValue={username} onChange={updateUser} />
                        <label>Usuario:</label>
                        <input defaultValue={username} onChange={updateUser} />
                        <label>Contraseña:</label>
                        <input type="password" defaultValue={password} onChange={updateUser} />
                        <label>Repetir Contraseña:</label>
                        <input type="password" defaultValue={password} onChange={updateUser} />
                        <div  className="loginActions">
                            <button>Registrarme</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

const SignupContainer = () =>{
    const [model, setModel] = useState({});
    const updateUser = (event) =>{
        console.log(event.target.value)
    }

    const props = {
        username: model.username,
        password: model.password,
        updateUser
    }

    return <Signup {... props} />
}


export default SignupContainer