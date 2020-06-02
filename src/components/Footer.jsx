import React from "react";
import '../scss/footer/footer.scss'
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import {Link} from "react-router-dom";

function Footer(props) {
    return (
        <div className={'phantom'}>
            <div className={'footerContainer'}>
                <div className={'footerInfo'}>
                    <h4 className={'footerTitle'}>Recipe - Food - Nutrition</h4>
                    <h5 className={'footerCopyright'}>© 2020 psevernyj Producted by</h5>
                </div>
                <div>
                    <ul className={'iconsBar'}>
                        <li className={'iconsItem'}><Link to={"#"}><GitHubIcon color="action"/></Link></li>
                        <li className={'iconsItem'}><Link to={"#"}><YouTubeIcon color="secondary"/></Link></li>
                        <li className={'iconsItem'}><Link to={"#"}><FacebookIcon color="primary"/></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default Footer;