import Logo from "./Logo";
import SocialLogo from "./SocialLogo";
import { SOCIAL_URL_LIST, DEV_URL, SOURCE_1_URL, SOURCE_2_URL } from "../utils/constants";

const Footer = () => {
    return (
        <div className="footer-container">
            <Logo />
            <div className="footer-content-container">
            <p>&copy; 2023 FoodMuch</p>
            <span> Desgined & Developed with &hearts; for React by <a target="_blank" href={DEV_URL}>Rohith Goli</a></span>
            <p>Inspired by <a target="_blank" href={SOURCE_1_URL}>NamasteDev.com</a> & <a target="_blank" href={SOURCE_2_URL}>NxtWave</a></p>
            </div>
            <div>
                { SOCIAL_URL_LIST.map(socialUrlItem => <SocialLogo socialUrlItem={socialUrlItem} key={socialUrlItem.id}/>)}
            </div>
        </div>
    )
}

export default Footer;