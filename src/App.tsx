import './App.css';
import { Usuario } from './models/Usuario.ts';
import { useState } from 'react';

function App() {
  const [tentativa, setTentativa] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [mostrarRedefinir, setMostrarRedefinir] = useState(false);

  const u1 = new Usuario('João', 25, '1234');

  const verificarSenha = () => {
    if (u1.verificarSenha(tentativa)) {
      setMensagem('✅ Senha correta!');
      setMostrarRedefinir(false);
    } else {
      setMensagem('❌ Senha incorreta.');
      setMostrarRedefinir(true);
    }
  };

  const redefinirSenha = () => {
    if (novaSenha.trim() && novaSenha.length >= 4) {
      u1.redefinirSenha(novaSenha);
      setMensagem('🔐 Senha redefinida com sucesso!');
      setMostrarRedefinir(false);
      setNovaSenha('');
      setTentativa('');
    } else {
      setMensagem('⚠️ Informe uma nova senha válida.');
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h2>Sistema de Usuário</h2>
      <p>{u1.apresentar()}</p>

      <input
        type="password"
        placeholder="Digite a senha"
        value={tentativa}
        onChange={(e) => setTentativa(e.target.value)}
      />
      <button onClick={verificarSenha}>Verificar</button>

      <p>{mensagem}</p>

      {mostrarRedefinir && (
        <>
          <input
            type="password"
            placeholder="Nova senha"
            value={novaSenha}
            onChange={(e) => setNovaSenha(e.target.value)}
          />
          <button onClick={redefinirSenha}>Redefinir Senha</button>
        </>
      )}
    </div>
  );
}

export default App;
