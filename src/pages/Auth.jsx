import { useState } from 'react';

const Auth = () => {
  const [newAccount, setNewAccount] = useState(true);
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const signUp = async (e) => {
    e.preventDefault();
    alert('회원가입 성공');
  };

  const signIn = async (e) => {
    e.preventDefault();
    alert('로그인 성공');
  };

  return (
    <>
      <form onSubmit={newAccount ? signUp : signIn}>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} placeholder="아이디" required />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호"
          required
        />
        <button type="submit">{newAccount ? '회원가입' : '로그인'}</button>
      </form>
      <div>
        <button onClick={() => setNewAccount(!newAccount)}>
          {newAccount ? '계정이 이미 있으신가요? 로그인' : '아직 회원이 아니신가요? 회원가입'}
        </button>
      </div>
    </>
  );
};

export default Auth;
