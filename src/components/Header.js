import Logo from "./Logo";
import NavContainer from "./NavContainer";

const Header = () => {
    return (
        <div className="flex justify-between px-4 items-center">
            <Logo />
            <NavContainer />
        </div>
    )
}

export default Header;