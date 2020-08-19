import React, { useState, useEffect, createContext } from 'react';
import logo from './logo.svg';
import './App.css';
import { Auth } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import MyAccount from './components/MyAccount.js';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState('');

  const UserContext = createContext({
    user: null,
  });

  useEffect(() => {
    try {
      setLoading(true);
      Auth.currentAuthenticatedUser({
        bypassCache: false // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
      }).then(user => {
        setUser(user);
        //console.log(user);
      }).catch(err => {
        console.log(err);
      })
    } catch (err) {
      console.log(err);
    }
  }, []);

  const verifyAuth = () => {
    Auth.currencAuthenticatedUser()
      .then((user) => {
        setUser(user);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  async function checkUser() {
    try {
      const user = await Auth.currencAuthenticatedUser();
      setUser(user);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <UserContext.Provider value={user}>
        <MyAccount />
      </UserContext.Provider>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
