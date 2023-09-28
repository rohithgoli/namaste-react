import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
    constructor(props) {
        super(props)
        console.log("Parent Constructor")
    }

    componentDidMount() {
        console.log("Parent component")
    }

    render() {
        console.log("Parent render")
        return (
            <div>
                <h1>About</h1>
                <h2>This is Namaste React</h2>
                <UserClass name={"Rohith Goli (class)"} location={"India (class)"} />
            </div> 
        )
    }
}


// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is Namaste React</h2>
//             {/* <User name={"Rohith Goli (function)"} location={"India (function)"} /> */}
//             <UserClass name={"Rohith Goli (class)"} location={"India (class)"} />
//         </div>
//     )
// }

export default About;