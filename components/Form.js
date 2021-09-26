import React, { useState } from 'react';
import PropTypes from 'prop-types';
const Form = ({ errorMessage, onSubmit }) => {
  const [email, setEmail] = useState('user@gmail.com');
  const [password, setPassword] = useState('123456');
  return (
    <form onSubmit={onSubmit}>
      <label>
        <span>Type your GitHub username</span>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          name="email"
          value={email}
          placeholder="Enter email..."
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          name="password"
          value={password}
          placeholder="Enter password..."
        />
      </label>

      <button type="submit">Login</button>

      {errorMessage && <p className="error">{errorMessage}</p>}

      <style jsx>{`
        form,
        label {
          display: flex;
          flex-flow: column;
        }
        label > span {
          font-weight: 600;
        }
        input {
          padding: 8px;
          margin: 0.3rem 0 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        .error {
          color: brown;
          margin: 1rem 0 0;
        }
      `}</style>
    </form>
  );
};

export default Form;

Form.propTypes = {
  errorMessage: PropTypes.string,
  onSubmit: PropTypes.func,
};
