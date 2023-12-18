import React, { useState } from 'react';
import './App.css';
import foto from './img/softexrecife_logo-removebg-preview.png';
import cartao from './img/laranja.jpg';

function App() {
  const [cpf, setCpf] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [perfil1, setPerfil1] = useState(false);
  const [perfil2, setPerfil2] = useState(false);

  const handleCpfChange = (event) => {
    setCpf(event.target.value);
  };

  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePerfil1Change = (event) => {
    setPerfil1(event.target.checked);
    setPerfil2(false);
  };

  const handlePerfil2Change = (event) => {
    setPerfil2(event.target.checked);
    setPerfil1(false);
  };

  const handleSubmit = () => {
    // Logic to handle form submission
  };

  return (
    <div className="App">
      <div className="cabecalho">
        <header className="App-header">
          <img src={foto} className="softex" alt="logo"/>
          <img src={foto} alt="logo"/>
          <ul>
            <li>Usuário</li>
            <li>Condomínio</li>
            <li>Mídia</li>
          </ul>
        </header>
      </div>
      <h1>Cadastro de Usuário</h1>
      <div className="formularios">
        <form className="formulario" onSubmit={handleSubmit}>
          <label htmlFor="cpf">CPF</label>
          <input type="number" name="cpf" id="cpf" value={cpf} onChange={handleCpfChange}/><br/><br/>
          <label htmlFor="nome">NOME COMPLETO</label>
          <input type="text" name="nome" id="nome" value={nome} onChange={handleNomeChange}/><br/><br/>
          <label htmlFor="email">EMAIL</label>
          <input type="email" name="email" id="email" value={email} onChange={handleEmailChange}/><br/><br/>
          <label htmlFor="username">USUÁRIO</label>
          <input type="text" name="username" id="username" value={username} onChange={handleUsernameChange}/><br/><br/>
          <label htmlFor="password">SENHA</label>
          <input type="password" name="password" id="password" value={password} onChange={handlePasswordChange}/><br/><br/>
          <input
            type="checkbox"
            id="perfil1"
            checked={perfil1}
            onChange={handlePerfil1Change}
          />
          <label htmlFor="perfil1">Perfil Administrador</label>
          <br />
          <input
            type="checkbox"
            id="perfil2"
            checked={perfil2}
            onChange={handlePerfil2Change}
          />
          <label htmlFor="perfil2">Perfil Usuário</label>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default App;
