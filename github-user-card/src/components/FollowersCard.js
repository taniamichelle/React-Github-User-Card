import React from 'react';

class FollowersCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            followedBy: []
        }
    }
    componentDidMount() {
        this.fetchFollowers();
    }
    fetchFollowers = () => {
        // fetch the user's followers
        fetch('https://api.github.com/users/taniamichelle/followers')
            .then(res => {
                return res.json();
            })
            //After fetching the data, set it to state 
            .then(followers => this.setState({ followedBy: followers }, console.log(followers)))
            .catch(error => {
                console.log('fetchFollowers error:  ', error);
            })
    }

    render() {
        return (
            <div>
                {this.state.followedBy.map(followedBy => {
                    return (
                        <div className='follower-info'>
                            <p className='follower-login'>Login: {followedBy.login}</p>
                            <p className='follower-bio'>Bio: {followedBy.bio}</p>
                            <p className='follower-type'>Type: {followedBy.type}</p>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default FollowersCard;