import { useState } from "react"
import FormRegister from '../components/FormRegister'
import { useNavigate } from 'react-router-dom'
import useAuthStore from '../store/Store';
import { jwtDecode } from "jwt-decode";

const Login = () => {

  const navigate = useNavigate()
  const useHandleClickRegister = () => navigate('/register')

  const authStore = useAuthStore();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const useHandleLogin = async (e) => {

    e.preventDefault();

    let response = await fetch(`${process.env.REACT_APP_API_URL}/api/token/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 'username': username, 'password': password }),
    });

    const data = await response.json();

    if (response.status === 200) {
      const user = jwtDecode(data.access);
      authStore.login(user, data);
      navigate('/');
    } else if (response.status === 401) {
      alert('Incorrect data');
    } else {
      alert('Something went wrong');
    }
  }

  return (
    <div className="register h-screen flex justify-center items-center">
      <FormRegister
        btnTop = "Log in"
        btnBot = "Sign in"
        handleClickBtnTop = {useHandleLogin}
        handleClickBtnBot = {useHandleClickRegister}
        valueUserName = {(e) => setUsername(e.target.value)}
        valuePassword = {(e) => setPassword(e.target.value)}
      />
    </div>
  )
}

export default Login