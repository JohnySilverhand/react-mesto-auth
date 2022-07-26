import React from "react"
import { useHistory, withRouter } from "react-router-dom";
import Header from "./Header.js";


function Login({onAuthorize}) {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  let history =  useHistory();

  function onRegister() {
    history.push('/sign-up');
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    if(!email || !password) {
      return;
    }
    setEmail('');
    setPassword('');
    onAuthorize(email, password);
  }

  return(
  <section>
    <Header
      text='Регистрация'
      onClick={onRegister}
    />
      <div className="login">
        <h2 className="login__header">Вход</h2>
        <form onSubmit={handleSubmit} className="popup__form login__form">
          <input
            className="popup__input login__input"
            value={email}
            onChange={handleEmail}
            placeholder='Email'
          >
          </input>
          <input
            className="popup__input login__input"
            value={password}
            onChange={handlePassword}
            placeholder='Пароль'
          >
          </input>
          <button type="submit" className="poup__form-submit login__button-submit">
            Войти
          </button>
        </form>
      </div>
  </section>
  )
}

export default withRouter (Login);