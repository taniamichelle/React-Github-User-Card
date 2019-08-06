import React from 'react';
import './App.scss';
import UserCard from './components/UserCard';
import FollowersCard from './components/FollowersCard';

class App extends React.Component {
  constructor() {
    //super provides us access to `this`
    super();
    this.state = {

    };
  }



  render() {

    // this.fetchFollowers();
    return (
      <div className="App">
        <header className="App-header">
          <h1>Current User: </h1>
          <UserCard />
        </header>
        <div className='followers'>
          <h2>Followers:</h2>
          <FollowersCard />
        </div>
      </div>
    );
  }


}

export default App;
