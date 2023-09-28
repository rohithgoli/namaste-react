import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <h2>This is Namaste React</h2>
            {/* <User name={"Rohith Goli (function)"} location={"India (function)"} /> */}
            <UserClass name={"Rohith Goli (class)"} location={"India (class)"} />
        </div>
    )
}

export default About;