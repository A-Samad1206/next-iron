import { useState } from 'react';
import useUser from '../lib/useUser';
import Layout from '../components/Layout';
import Form from '../components/Form';
import fetchJson from '../lib/fetchJson';

const Login = () => {
  const { mutateUser } = useUser({
    redirectTo: '/profile-sg',
    redirectIfFound: true,
  });

  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e) {
    console.log('Submiut ');
    e.preventDefault();
    // console.log('e.currentTarget', e.currentTarget.username.value);
    const body = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    };
    const axios = (url, data) => ({
      url: `${url}`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    });
    try {
      const data = await fetchJson(
        axios('http://localhost:4000/api/v1/auth/login', body)
      );
      mutateUser(await fetchJson(axios('/api/user', data)));
    } catch (error) {
      console.error("'An unexpected error happened:',");
      console.log(error);
      setErrorMsg(error?.message);
    }
  }

  return (
    <Layout>
      <div className="login">
        <h1>Go</h1>
        {/* <button onClick={handleSubmit}>Submit</button> */}

        <Form isLogin errorMessage={errorMsg} onSubmit={handleSubmit} />
      </div>
      <style jsx>{`
        .login {
          max-width: 21rem;
          margin: 0 auto;
          padding: 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
      `}</style>
    </Layout>
  );
};

export default Login;
