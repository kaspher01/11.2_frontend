import React, { useState } from 'react';
import './App.css';

function App() {
  const [userData, setUserData] = useState(null);

  const getRandomUser = () => {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => setUserData(data.results[0]))
        .catch(error => console.error('Error fetching random user data:', error));
  };

  return (
      <div className="App">
        <header className="App-header">
          <h1>Random User Generator</h1>
          <button onClick={getRandomUser}>Generate Random User</button>
          {userData && (
              <div className="user-container">
                <img
                    src={userData.picture.large}
                    alt={`${userData.name.first} ${userData.name.last}`}
                />
                <p>
                  Name: {userData.name.title} {userData.name.first}{' '}
                  {userData.name.last}
                </p>
                <p>Email: {userData.email}</p>
                <p>Phone: {userData.phone}</p>
                <p>Country: {userData.location.country}</p>
              </div>
          )}
        </header>
      </div>
  );
}

export default App;

