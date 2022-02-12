import React from 'react';
import Main from '../../components/Main.js/Main';

const RegisterScreen = () => {
  return (
    <form>
      <div>
        <label>
          Name
          <input type="text" id="name" required />
        </label>
      </div>
      <div>
        <label>
          Email
          <input type="text" />
        </label>
      </div>
      <div>
        <label>
          Password
          <input type="text" />
        </label>
      </div>
      <div>
        <label>
          Confirm Password
          <input type="text" />
        </label>
      </div>
      <div>
        <label>
          Confirm Password
          <input type="text" />
        </label>
      </div>
    </form>
  );
};

export default RegisterScreen;
