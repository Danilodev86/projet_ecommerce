import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as EmailValidator from 'email-validator';


function LoginUser() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [erroMessage, setErroMessage] = useState('');

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!EmailValidator.validate(username) || (password.length <= 7) ) {
            setErroMessage('E-mail ou Senha Incorreto')
            return;
        }
        setErroMessage('');
        navigate("/produtos");

    };


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username"></label>
                <input placeholder='Digite seu Usuário'
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} />
            </div><br />

   
            <div>
                <label htmlFor="password"></label>
                <input placeholder='Digite sua Senha'
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div><br />
            {erroMessage && <p>{erroMessage}</p>}
            <span>
                <button type="submit" id='loginUser'>Login</button>
                <button type="button">Esqueci a Senha</button>
            </span>

        </form>
    );
}

export default LoginUser;
