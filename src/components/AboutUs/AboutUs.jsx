import "./AboutUs.css";
import { motion } from "framer-motion";


const AboutUs = () => {

    return (
        <motion.div className="aboutUs" 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0 }}>
            <div className="building1"></div>
            <div className="building2"></div>
            <div className="textContainer">
                <p>Welcome to Action Painting</p>
                <h2>A painting contractor company</h2>
                <div className="yellowDivisionLine"></div>
                <p>Founded in 1989 and incorporated in 2002 by Michael O'Toole, Action Painting Services Inc. is one of the most respected painting companies in South Florida. With over 20 years experience, we pride ourselves in offering quality work on Commercial, Industrial and Residential projects. All work performed by expert and fully trained painters. We are dedicated to quality exterior and interior painting, waterproofing, and concrete restoration. Our completed projects include, high rises, condominiums, warehouses, new construction, residential homes just to name a few.</p>
                <div className="bottomBox"><p className="years">30+</p><p className="experience">Years working experience</p></div>
            </div>
        </motion.div>
    );
}

export default AboutUs;