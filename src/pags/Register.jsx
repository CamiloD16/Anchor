import { useState } from 'react'
import useAuthStore from '../store/Store'
import FormRegister from '../components/FormRegister'
import { useNavigate } from 'react-router-dom'

const Register = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const authStore = useAuthStore()

  const navigate = useNavigate()
  const useHandleClick = () => navigate("/login")

  const useHandleRegister = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/register/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      })

      if (response.ok) {
        const data = await response.json()
        const { user, token } = data
        authStore.login(user, token)
        navigate("/login")
        alert("Successful registration")
      } else if(response === "404"){
        alert("That username is already in use")
      } else {
        alert("Error")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="register h-screen flex justify-center items-center">
      <FormRegister
        btnTop = "Register"
        btnBot = "Go to login"
        username = {username}
        password = {password}
        valueUserName = {(e) => setUsername(e.target.value)}
        valuePassword = {(e) => setPassword(e.target.value)}
        handleClickBtnTop = {useHandleRegister}
        handleClickBtnBot = {useHandleClick}
      />
    </div>
  )
}

export default Register