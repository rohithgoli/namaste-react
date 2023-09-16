import {SOCIAL_FB_URL, SOCIAL_PIN_INTEREST_URL, SOCIAL_INSTA_URL, SOCIAL_TWITTER_URL} from '../utils/constants'

const SocialLogo = (props) => {
    const {socialUrlItem} = props;
    const {socialUrl} = socialUrlItem;

    return (
        <img
            className="footer-social-image"
            src={socialUrl}
        />
    )
}

export default SocialLogo;