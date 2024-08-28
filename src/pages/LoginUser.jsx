import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as EmailValidator from 'email-validator';
import { FcGoogle } from "react-icons/fc";
import '../style/LoginUser.css';

function LoginUser() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [erroMessage, setErroMessage] = useState('');
    const [buttonDisabled, setButtonDisabled] = useState(true); // Estado do botão

    const navigate = useNavigate();

    useEffect(() => {
        if (EmailValidator.validate(username) && password.length > 7) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [username, password]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!EmailValidator.validate(username) || (password.length <= 7)) {
            setErroMessage('E-mail ou Senha Incorreto');
            return;
        }
        setErroMessage('');
        navigate("/produtos");
    };

    return (
        <div className='centerLogin'>
            <h1>Portal e-commerce</h1>
            <div >
                <form onSubmit={handleSubmit}>
                    <div className='login'>
                        <label htmlFor="username">E-mail:</label><br />
                        <input
                            placeholder='Informe seu e-mail'
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />

                        <br />

                        <div>
                            <label htmlFor="password">Senha:</label><br />
                            <input
                                placeholder='Informe sua senha'
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    {erroMessage && <p>{erroMessage}</p>}

                    <span className='buttonLogin'>
                        <button type="submit" id='loginUser' disabled={buttonDisabled}>
                            Entrar
                        </button><br />
                    </span>

                    <a id="restaurarSenha" href="/recuperar-senha">Não consigo entrar na conta</a>
                    <br /><br /><br />
                    <button type="button" id='cadastrarConta'>
                        cadastrar conta
                    </button><br /><br />

                    <button  type="button" id='entrarGoogle'><FcGoogle />continuar com google
                    </button><br /><br />

                </form>
            </div>
        </div>

    );
}

export default LoginUser;

