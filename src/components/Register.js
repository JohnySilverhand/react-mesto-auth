import React from "react"
import { useHistory } from "react-router-dom";
import Header from "./Header.js";

function Register({onButtonClick}) {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  let history =  useHistory();

  function onLogin() {
    history.push('/sign-in');
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    onButtonClick(email, password)
  }

  return(
  <section>
    <Header
      text='Войти'
      onClick = {onLogin}
    />
      <div>
        <h2>Регистрация</h2>
        <form onSubmit={handleSubmit}>
          <input
            value={email}
            onChange={handleEmail}
            placeholder='Email'
          >
          </input>
          <input
            value={password}
            onChange={handlePassword}
            placeholder='Пароль'
          >
          </input>
          <button
            type="submit"
          >
            Зарегестрироваться
          </button>
        </form>
        <p>Уже зарегестрированы? Войти</p>
      </div>
  </section>
  )
}

export default Register;