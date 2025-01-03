import useAuth from '@/hooks/useAuth';

const Auth = () => {
  const { newAccount, formData, loading, toggleNewAccount, handleChange, handleSubmit } = useAuth();

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit();
  };

  return (
    <>
      <form onSubmit={onSubmit}>
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
        <button onClick={toggleNewAccount}>
          {newAccount ? '계정이 이미 있으신가요? 로그인' : '아직 회원이 아니신가요? 회원가입'}
        </button>
      </div>
    </>
  );
};

export default Auth;
