import { useState } from 'react';

const Auth = () => {
  const [newAccount, setNewAccount] = useState(true);
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const signUp = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, password, name, phoneNumber }),
      });

      if (response.ok) {
        alert('회원가입 성공');
      } else {
        alert('회원가입 실패');
      }
    } catch (e) {
      console.log('회원가입 중 오류 발생: ', e);
    }
  };

  const signIn = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, password }),
      });

      if (response.ok) {
        alert('로그인 성공');
      } else {
        alert('로그인 실패');
      }
    } catch (e) {
      console.log('로그인 중 오류 발생: ', e);
    }
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
        {newAccount && (
          <>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="이름" required />
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="전화번호"
              required
            />
          </>
        )}
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
