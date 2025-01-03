import { useState } from 'react';

const useAuth = () => {
  const [newAccount, setNewAccount] = useState(true);
  const [formData, setFormData] = useState({ id: '', password: '', name: '', phoneNumber: '' });
  const [loading, setLoading] = useState(false);

  const toggleNewAccount = () => {
    setNewAccount((prev) => !prev);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
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

  return {
    newAccount,
    formData,
    loading,
    toggleNewAccount,
    handleChange,
    handleSubmit,
  };
};

export default useAuth;
