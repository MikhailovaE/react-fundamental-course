import React, {useContext} from 'react';
import Input from "../Component/UI/Input/Input";
import Button from "../Component/UI/Button/Button";
import {AuthContext} from "../context";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const router = useNavigate()

    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true')
        router(`/`);
    }

    return (
        <div>
            <h1>Страница для логина</h1>
            <form onSubmit={login}>
                <Input type="text" placeholder="Введите логин"/>
                <Input type="password" placeholder="Введите пароль"/>
                <Button>Войти</Button>
            </form>
        </div>
    );
};

export default Login;
