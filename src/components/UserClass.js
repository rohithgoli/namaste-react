import React from 'react';

class UserClass extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            userInfo: {},
        }
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/rohithgoli");
        const json = await data.json();
        this.setState({userInfo: json});
    }

    componentDidUpdate() {
        console.log("componentDidUpdate called")
    }

    componentWillUnmount() {
        console.log("componentWillUnmount called")
    }

    render() {
        const {name, location, avatar_url} = this.state.userInfo;
        return (
            <div>
                <img src={avatar_url} />
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h5>Contact: @rohithgoli</h5>
            </div>
        )
    }
}

export default UserClass;