import React, { FC } from 'react';
import Header from '../../components/Header/Header';
import { useState } from 'react';
import RegistrationLayout from '../../Layout/Registration';
import Panel from '../../components/Panel';
import Form from '../../components/Form/Form';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { UserModel } from '../../models/loginModel';
import { useHistory } from 'react-router-dom';
import styles from './Login.module.scss'
import loginButton from '../../assets/fb.png'

interface LoginProps {
    username?: string,
    password?: string,
    updateUser: (value: string, name: string) => void
}

const LoginHeader = () => {
    const history = useHistory()
    const handleSignUpClick = () => {
        history.push('/signup')
    }

    return <Header addonRight={<Button size="small" onClick={handleSignUpClick}>Sign up</Button>} />
}

const Login: FC<LoginProps> = ({ username, password, updateUser }) => {
    return (
        <RegistrationLayout header={<LoginHeader />}>
            <Panel>
                <Form>
                    <Input defaultValue={username} label="User:" name="username" onChange={updateUser} />
                    <Input defaultValue={password} label="Password:" name="password" type="password" onChange={updateUser} />
                    <Button size="big" onClick={function (): void {
                        throw new Error('Function not implemented.');
                    }}>Login</Button>
                    <a href="#">Forgot the password?</a>
                </Form>
            </Panel>
        </RegistrationLayout>
    );
}

const FacebookLogin: FC<{}> = () => <RegistrationLayout header={<Header />}>
    <Form>
        <div className={styles.login}>
            <h1>The place to meet your Neighbors</h1>
            <img src={loginButton} />
        </div>
    </Form>
</RegistrationLayout>


const LoginContainer = () => {
    const [model, setModel] = useState<UserModel>({});
    const updateUser = (value: string, name: string) => {
        const newModel: { [key: string]: string | undefined } = { ...model };
        newModel[name] = value
        setModel(newModel)
    }

    const props = {
        ...model,
        updateUser
    }

    return <FacebookLogin />
}


export default LoginContainer