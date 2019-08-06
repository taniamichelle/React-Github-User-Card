import React from 'react';

class UserCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: []
        }
    }
    componentDidMount() {
        this.fetchUser();
    }
    fetchUser = () => {
        // When your component mounts, send a GET request to the following URL
        fetch('https://api.github.com/users/taniamichelle')
            .then(res => {
                return res.json();
            })
            //After fetching the data, set it to state 
            .then(person => this.setState({ user: person }, console.log(person)))
            .catch(err => {
                console.log('fetchUser error: ', err);
            });
    }
    render() {

        // this.fetchUser();
        return (
            <div className='user-info'>
                <p className='user-name'>Name: {this.state.user.name}</p>
                <p className='user-followers'>Followers: {this.state.user.followers}</p>
                <p className='user-repos'>Public Repos: {this.state.user.public_repos}</p>
            </div>
        );
    }
}

export default UserCard;