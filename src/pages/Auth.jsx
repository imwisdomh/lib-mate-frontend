import { useState } from 'react';

const Auth = () => {
  const [newAccount, setNewAccount] = useState(true);
  const [formData, setFormData] = useState({ id: '', password: '', name: '', phoneNumber: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const url = newAccount ? 'http://localhost:8080/api/auth/signup' : 'http://localhost:8080/api/auth/signin';

    const body = newAccount
      ? { id: formData.id, password: formData.password, name: formData.name, phoneNumber: formData.phoneNumber }
      : { id: formData.id, password: formData.password };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        alert(newAccount ? '회원가입 성공' : '로그인 성공');
      } else {
        alert(newAccount ? '회원가입 실패' : '로그인 실패');
      }
    } catch (e) {
      console.error(newAccount ? '회원가입 중 오류 발생:' : '로그인 중 오류 발생:', e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="id" value={formData.id} onChange={handleChange} placeholder="아이디" required />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="비밀번호"
          required
        />
        {newAccount && (
          <>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="이름" required />
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="전화번호"
              required
            />
          </>
        )}
        <button type="submit" disabled={loading}>
          {loading ? '처리 중...' : newAccount ? '회원가입' : '로그인'}
        </button>
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
