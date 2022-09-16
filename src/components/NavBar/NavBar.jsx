import "./NavBar.css";
import logo from "../../media/images/actionPaintingLogo.svg";
import { Link } from "react-router-dom";

const NavBar = () => {

    return (
        <nav className="navbarGrid">
            <div className="topNav">
                <ul className="topNavUl">
                    <li className="topNavTexts"><span className="material-symbols-outlined iconSpacing">smartphone</span><p><strong>Commercial:</strong> 954-436-8899 | <strong>Residential:</strong> 954-901-9025</p></li>
                    <li className="topNavTexts"><span className="material-symbols-outlined iconSpacing">mail</span> <strong> actionpainting1@att.net </strong></li>
                    <li className="topNavAddress"><span className="material-symbols-outlined iconSpacing">location_on</span><strong>5200 SW 164th Terrace South West Ranches, FL 33331</strong></li>
                </ul>
            </div>
            <div className="bottomNav">
                <ul className="bottomNavUl">
                    <li className="bottomNavLogo"><img className="logo" src={logo} alt="Action Painting Services Logo"></img></li>
                    <li><Link className="bottomNavTexts" to="/"> <span className="material-symbols-outlined mobileLogos">home</span>HOME </Link></li>
                    <li><Link className="bottomNavTexts" to="/aboutUs"><span className="material-symbols-outlined mobileLogos">apartment</span>ABOUT US</Link></li>
                    <li><Link className="bottomNavTexts" to="/ourServices"><span className="material-symbols-outlined mobileLogos">format_paint</span>OUR SERVICES</Link></li>
                    <li><Link className="bottomNavTexts" to="/ourWork/apartmentCondominium"><span className="material-symbols-outlined mobileLogos">work_history</span>OUR WORK</Link></li>
                    <li><Link className="bottomNavTexts" to="/testimonials"><span className="material-symbols-outlined mobileLogos">groups</span>TESTIMONIALS</Link></li>
                    <li><Link className="bottomNavTexts" to="/contactUs"><span className="material-symbols-outlined mobileLogos">call</span>CONTACT US</Link></li>
                </ul>
            </div>
        </nav>
    );  
    }

export default NavBar;