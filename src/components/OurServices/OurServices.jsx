import "./OurServices.css";
import commercialPaintingIcon from "../../media/images/commercialPainting.svg";
import residentialPaintingIcon from "../../media/images/residentialPainting.svg";
import concreteRestorationIcon from "../../media/images/concreteRestoration.svg";
import { motion } from "framer-motion";

const OurServices = () => {

    return (
        <div className="ourServices">
            <motion.div className="bucketImage" 
            initial={{ translateX: -300, opacity: 0 }}
            animate={{ translateX: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            ></motion.div>
            <motion.div className="ourServicesText"
            initial={{ translateX: 300, opacity: 0 }}
            animate={{ translateX: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}>
                <h2 className="ourServicesTitle">We Offer<br />Best Painting<br />Services & Solutions</h2>
                <div className="yellowDivisionLineServices"></div>
                <div className="servicesContainer">
                    <div className="cardService"> <div className="yellowContainer"> <img className="iconClass" src={commercialPaintingIcon} alt="Commercial Painting" /> </div><p>Commercial Painting</p></div>
                    <div className="cardService"> <div className="yellowContainer"><img className="iconClass" src={residentialPaintingIcon} alt="Residential Painting" /> </div><p>Residential Painting</p></div>
                    <div className="cardService"> <div className="yellowContainer"><img className="iconClass" src={concreteRestorationIcon} alt="Concrete Restoration" /> </div><p>Concrete Restoration</p></div>
                </div>
            </motion.div>
        </div>
    );
}

export default OurServices;