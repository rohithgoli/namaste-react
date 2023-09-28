import React from 'react';

class UserClass extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0,
        }
    }

    render() {
        const {name, location} = this.props;
        const {count} = this.state;

        return (
            <div>
                <h1>count = {count}</h1>
                <button
                    onClick={() => {
                        //Never Update State Variables Directly
                        this.setState({
                            count: this.state.count + 1
                        });
                    }}
                >
                    Increase Count
                </button>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h5>Contact: @rohithgoli</h5>
            </div>
        )
    }
}

export default UserClass;