import "./OurWork.css";
import { useState, useEffect } from "react";
import GalleryImage from "../GalleryImage/GalleryImage";
import { motion } from "framer-motion";
import project0 from "../../media/images/projectGallery_apartmentCondominium/project0.webp";
import project1 from "../../media/images/projectGallery_apartmentCondominium/project1.webp";
import project2 from "../../media/images/projectGallery_apartmentCondominium/project2.webp";
import project3 from "../../media/images/projectGallery_apartmentCondominium/project3.webp";
import project4 from "../../media/images/projectGallery_apartmentCondominium/project4.webp";
import project5 from "../../media/images/projectGallery_apartmentCondominium/project5.webp";
import project6 from "../../media/images/projectGallery_apartmentCondominium/project6.webp";
import project7 from "../../media/images/projectGallery_apartmentCondominium/project7.webp";
import project8 from "../../media/images/projectGallery_apartmentCondominium/project8.webp";
import project9 from "../../media/images/projectGallery_apartmentCondominium/project9.webp";
import project10 from "../../media/images/projectGallery_apartmentCondominium/project10.webp";
import project11 from "../../media/images/projectGallery_apartmentCondominium/project11.webp";
import project12 from "../../media/images/projectGallery_apartmentCondominium/project12.webp";
import project13 from "../../media/images/projectGallery_apartmentCondominium/project13.webp";
import project14 from "../../media/images/projectGallery_apartmentCondominium/project14.webp";
import project15 from "../../media/images/projectGallery_apartmentCondominium/project15.webp";
import multiunit1 from "../../media/images/projectGallery_multiunit/multiunit1.webp";
import multiunit2 from "../../media/images/projectGallery_multiunit/multiunit2.webp";
import multiunit3 from "../../media/images/projectGallery_multiunit/multiunit3.webp";
import multiunit4 from "../../media/images/projectGallery_multiunit/multiunit4.webp";
import multiunit5 from "../../media/images/projectGallery_multiunit/multiunit5.webp";
import multiunit6 from "../../media/images/projectGallery_multiunit/multiunit6.webp";
import retail1 from "../../media/images/projectGallery_retail/retail1.webp";
import retail2 from "../../media/images/projectGallery_retail/retail2.webp";
import retail3 from "../../media/images/projectGallery_retail/retail3.webp";
import retail4 from "../../media/images/projectGallery_retail/retail4.webp";
import retail5 from "../../media/images/projectGallery_retail/retail5.webp";
import retail6 from "../../media/images/projectGallery_retail/retail6.webp";
import retail7 from "../../media/images/projectGallery_retail/retail7.webp";
import retail8 from "../../media/images/projectGallery_retail/retail8.webp";
import retail9 from "../../media/images/projectGallery_retail/retail9.webp";
import retail10 from "../../media/images/projectGallery_retail/retail10.webp";
import retail11 from "../../media/images/projectGallery_retail/retail11.webp";
import retail12 from "../../media/images/projectGallery_retail/retail12.webp";
import retail13 from "../../media/images/projectGallery_retail/retail13.webp";
import retail14 from "../../media/images/projectGallery_retail/retail14.webp";
import retail15 from "../../media/images/projectGallery_retail/retail15.webp";
import warehouse1 from "../../media/images/projectGallery_warehouse/warehouse1.webp";
import warehouse2 from "../../media/images/projectGallery_warehouse/warehouse2.webp";
import warehouse3 from "../../media/images/projectGallery_warehouse/warehouse3.webp";
import warehouse4 from "../../media/images/projectGallery_warehouse/warehouse4.webp";
import warehouse5 from "../../media/images/projectGallery_warehouse/warehouse5.webp";
import warehouse6 from "../../media/images/projectGallery_warehouse/warehouse6.webp";
import warehouse7 from "../../media/images/projectGallery_warehouse/warehouse7.webp";
import warehouse8 from "../../media/images/projectGallery_warehouse/warehouse8.webp";
import warehouse9 from "../../media/images/projectGallery_warehouse/warehouse9.webp";
import warehouse10 from "../../media/images/projectGallery_warehouse/warehouse10.webp";
import residential1 from "../../media/images/projectGallery_residential/residential1.webp";
import residential2 from "../../media/images/projectGallery_residential/residential2.webp";
import residential3 from "../../media/images/projectGallery_residential/residential3.webp";
import residential4 from "../../media/images/projectGallery_residential/residential4.webp";
import residential5 from "../../media/images/projectGallery_residential/residential5.webp";
import residential6 from "../../media/images/projectGallery_residential/residential6.webp";
import concrete1 from "../../media/images/projectGallery_concrete/concrete1.webp";
import concrete2 from "../../media/images/projectGallery_concrete/concrete2.webp";
import concrete3 from "../../media/images/projectGallery_concrete/concrete3.webp";
import concrete4 from "../../media/images/projectGallery_concrete/concrete4.webp";
import concrete5 from "../../media/images/projectGallery_concrete/concrete5.webp";
import concrete6 from "../../media/images/projectGallery_concrete/concrete6.webp";
import concrete7 from "../../media/images/projectGallery_concrete/concrete7.webp";
import concrete8 from "../../media/images/projectGallery_concrete/concrete8.webp";
import concrete9 from "../../media/images/projectGallery_concrete/concrete9.webp";
import concrete10 from "../../media/images/projectGallery_concrete/concrete10.webp";
import concrete11 from "../../media/images/projectGallery_concrete/concrete11.webp";
import concrete12 from "../../media/images/projectGallery_concrete/concrete12.webp";


const OurWork = () => {
    const [type, setType] = useState("Apartment Condominium");
    const [project, setProject] = useState([]);
    
    const images = [
        {
            id: 0,
            src: project0,
            alt: "Apartment Condominum",
            type: "Apartment Condominium",
        },
        {
            id: 1,
            src: project1,
            alt: "Apartment Condominum",
            type: "Apartment Condominium",
        },
        {
            id: 2,
            src: project2,
            alt: "Apartment Condominum",
            type: "Apartment Condominium",
        },
        {
            id: 3,
            src: project3,
            alt: "Apartment Condominum",
            type: "Apartment Condominium",
        },
        {
            id: 4,
            src: project4,
            alt: "Apartment Condominum",
            type: "Apartment Condominium",
        },
        {
            id: 5,
            src: project5,
            alt: "Apartment Condominum",
            type: "Apartment Condominium",
        },
        {
            id: 6,
            src: project6,
            alt: "Apartment Condominum",
            type: "Apartment Condominium",
        },
        {
            id: 7,
            src: project7,
            alt: "Apartment Condominum",
            type: "Apartment Condominium",
        },
        {
            id: 8,
            src: project8,
            alt: "Apartment Condominum",
            type: "Apartment Condominium",
        },
        {
            id: 9,
            src: project9,
            alt: "Apartment Condominum",
            type: "Apartment Condominium",
        },
        {
            id: 10,
            src: project10,
            alt: "Apartment Condominum",
            type: "Apartment Condominium",
        },
        {
            id: 11,
            src: project11,
            alt: "Apartment Condominum",
            type: "Apartment Condominium",
        },
        {
            id: 12,
            src: project12,
            alt: "Apartment Condominum",
            type: "Apartment Condominium",
        },
        {
            id: 13,
            src: project13,
            alt: "Apartment Condominum",
            type: "Apartment Condominium",
        },
        {
            id: 14,
            src: project14,
            alt: "Apartment Condominum",
            type: "Apartment Condominium",
        },
        {
            id: 15,
            src: project15,
            alt: "Apartment Condominum",
            type: "Apartment Condominium",
        },
        {
            id: 16,
            src: multiunit1,
            alt: "Multi Unit Residential Building",
            type: "Multi-Unit Residential Building",
        },
        {
            id: 17,
            src: multiunit2,
            alt: "Multi Unit Residential Building",
            type: "Multi-Unit Residential Building",
        },
        {
            id: 18,
            src: multiunit3,
            alt: "Multi Unit Residential Building",
            type: "Multi-Unit Residential Building",
        },
        {
            id: 19,
            src: multiunit4,
            alt: "Multi Unit Residential Building",
            type: "Multi-Unit Residential Building",
        },
        {
            id: 20,
            src: multiunit5,
            alt: "Multi Unit Residential Building",
            type: "Multi-Unit Residential Building",
        },
        {
            id: 21,
            src: multiunit6,
            alt: "Multi Unit Residential Building",
            type: "Multi-Unit Residential Building",
        },
        {
            id: 22,
            src: retail1,
            alt: "Retail",
            type: "Retail",
        },
        {
            id: 23,
            src: retail2,
            alt: "Retail",
            type: "Retail",
        },
        {
            id: 24,
            src: retail3,
            alt: "Retail",
            type: "Retail",
        },
        {
            id: 25,
            src: retail4,
            alt: "Retail",
            type: "Retail",
        },
        {
            id: 26,
            src: retail5,
            alt: "Retail",
            type: "Retail",
        },
        {
            id: 27,
            src: retail6,
            alt: "Retail",
            type: "Retail",
        },
        {
            id: 28,
            src: retail7,
            alt: "Retail",
            type: "Retail",
        },
        {
            id: 29,
            src: retail8,
            alt: "Retail",
            type: "Retail",
        },
        {
            id: 30,
            src: retail9,
            alt: "Retail",
            type: "Retail",
        },
        {
            id: 31,
            src: retail10,
            alt: "Retail",
            type: "Retail",
        },
        {
            id: 32,
            src: retail11,
            alt: "Retail",
            type: "Retail",
        },
        {
            id: 33,
            src: retail12,
            alt: "Retail",
            type: "Retail",
        },
        {
            id: 34,
            src: retail13,
            alt: "Retail",
            type: "Retail",
        },
        {
            id: 35,
            src: retail14,
            alt: "Retail",
            type: "Retail",
        },
        {
            id: 36,
            src: retail15,
            alt: "Retail",
            type: "Retail",
        },
        {
            id: 37,
            src: warehouse1,
            alt: "Warehouse",
            type: "Warehouses",
        },
        {
            id: 38,
            src: warehouse2,
            alt: "Warehouse",
            type: "Warehouses",
        },
        {
            id: 39,
            src: warehouse3,
            alt: "Warehouse",
            type: "Warehouses",
        },
        {
            id: 40,
            src: warehouse4,
            alt: "Warehouse",
            type: "Warehouses",
        },
        {
            id: 41,
            src: warehouse5,
            alt: "Warehouse",
            type: "Warehouses",
        },
        {
            id: 42,
            src: warehouse6,
            alt: "Warehouse",
            type: "Warehouses",
        },
        {
            id: 43,
            src: warehouse7,
            alt: "Warehouse",
            type: "Warehouses",
        },
        {
            id: 44,
            src: warehouse8,
            alt: "Warehouse",
            type: "Warehouses",
        },
        {
            id: 45,
            src: warehouse9,
            alt: "Warehouse",
            type: "Warehouses",
        },
        {
            id: 46,
            src: warehouse10,
            alt: "Warehouse",
            type: "Warehouses",
        },
        {
            id: 47,
            src: residential1,
            alt: "Residential",
            type: "Residential",
        },
        {
            id: 48,
            src: residential2,
            alt: "Residential",
            type: "Residential",
        },
        {
            id: 49,
            src: residential3,
            alt: "Residential",
            type: "Residential",
        },
        {
            id: 50,
            src: residential4,
            alt: "Residential",
            type: "Residential",
        },
        {
            id: 51,
            src: residential5,
            alt: "Residential",
            type: "Residential",
        },
        {
            id: 52,
            src: residential6,
            alt: "Residential",
            type: "Residential",
        },
        {
            id: 53,
            src: concrete1,
            alt: "Concrete",
            type: "Concrete Restoration",
        },
        {
            id: 54,
            src: concrete2,
            alt: "Concrete",
            type: "Concrete Restoration",
        },
        {
            id: 55,
            src: concrete3,
            alt: "Concrete",
            type: "Concrete Restoration",
        },
        {
            id: 56,
            src: concrete4,
            alt: "Concrete",
            type: "Concrete Restoration",
        },
        {
            id: 57,
            src: concrete5,
            alt: "Concrete",
            type: "Concrete Restoration",
        },
        {
            id: 58,
            src: concrete6,
            alt: "Concrete",
            type: "Concrete Restoration",
        },
        {
            id: 59,
            src: concrete7,
            alt: "Concrete",
            type: "Concrete Restoration",
        },
        {
            id: 60,
            src: concrete8,
            alt: "Concrete",
            type: "Concrete Restoration",
        },
        {
            id: 61,
            src: concrete9,
            alt: "Concrete",
            type: "Concrete Restoration",
        },
        {
            id: 62,
            src: concrete10,
            alt: "Concrete",
            type: "Concrete Restoration",
        },
        {
            id: 63,
            src: concrete11,
            alt: "Concrete",
            type: "Concrete Restoration",
        },
        {
            id: 64,
            src: concrete12,
            alt: "Concrete",
            type: "Concrete Restoration",
        }

    ];


    const handleClick = (e) => {
        if (e.target.innerText === "arrow_forward");
        {
            if (type === "Apartment Condominium") {
                setType("Multi-Unit Residential Building");
            }
            if (type === "Multi-Unit Residential Building") {
                setType("Retail");
            }
            if (type === "Retail") {
                setType("Warehouses");
            }
            if (type === "Warehouses") {
                setType("Residential");
            }
            if (type === "Residential") {
                setType("Concrete Restoration");
            }
        } 

        if (e.target.innerText === "arrow_back")
        {
            if (type === "Multi-Unit Residential Building") {
                setType("Apartment Condominium");
            }
            if (type === "Retail") {
                setType("Multi-Unit Residential Building");
            }
            if (type === "Warehouses") {
                setType("Retail");
            }
            if (type === "Residential") {
                setType("Warehouses");
            }
            if (type === "Concrete Restoration") {
                setType("Residential");
            }
        }
    }

    return (
        <div className="ourWork">
            <div className="galleryHeader">
            {type === "Apartment Condominium" ? null : <span className="material-symbols-outlined arrowStyling" onClick={(e) => handleClick(e)}> arrow_back </span>}
            <motion.h2  initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        exit={{ opacity: 0 }}>{type}</motion.h2>
            {type === "Concrete Restoration" ? null : (<span className="material-symbols-outlined arrowStyling" onClick={(e) => handleClick(e)}> arrow_forward </span>)}
            </div>
            <div className="projectGallery">
                {images.map((image) => {
                    if (image.type === type) {
                        return (
                                <GalleryImage src={image.src} alt={image.alt} key={image.id} />
                        );
                    }
                }
                )}
            </div>
        </div>
    );
}

export default OurWork;