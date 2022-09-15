import "./OurWork.css";
import { useState, useEffect } from "react";
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

const OurWork = () => {
    const [type, setType] = useState("apartmentCondominium");
    const [project, setProject] = useState([]);
    
    const images = [
        {
            id: 0,
            src: project0,
            alt: "Apartment Condominum",
            type: "apartmentCondominium",
        },
        {
            id: 1,
            src: project1,
            alt: "Apartment Condominum",
            type: "apartmentCondominium",
        },
        {
            id: 2,
            src: project2,
            alt: "Apartment Condominum",
            type: "apartmentCondominium",
        },
        {
            id: 3,
            src: project3,
            alt: "Apartment Condominum",
            type: "apartmentCondominium",
        },
        {
            id: 4,
            src: project4,
            alt: "Apartment Condominum",
            type: "apartmentCondominium",
        },
        {
            id: 5,
            src: project5,
            alt: "Apartment Condominum",
            type: "apartmentCondominium",
        },
        {
            id: 6,
            src: project6,
            alt: "Apartment Condominum",
            type: "apartmentCondominium",
        },
        {
            id: 7,
            src: project7,
            alt: "Apartment Condominum",
            type: "apartmentCondominium",
        },
        {
            id: 8,
            src: project8,
            alt: "Apartment Condominum",
            type: "apartmentCondominium",
        },
        {
            id: 9,
            src: project9,
            alt: "Apartment Condominum",
            type: "apartmentCondominium",
        },
        {
            id: 10,
            src: project10,
            alt: "Apartment Condominum",
            type: "apartmentCondominium",
        },
        {
            id: 11,
            src: project11,
            alt: "Apartment Condominum",
            type: "apartmentCondominium",
        },
        {
            id: 12,
            src: project12,
            alt: "Apartment Condominum",
            type: "apartmentCondominium",
        },
        {
            id: 13,
            src: project13,
            alt: "Apartment Condominum",
            type: "apartmentCondominium",
        },
        {
            id: 14,
            src: project14,
            alt: "Apartment Condominum",
            type: "apartmentCondominium",
        },
        {
            id: 15,
            src: project15,
            alt: "Apartment Condominum",
            type: "apartmentCondominium",
        }
    ];

    useEffect(() => {
        images.map((image) => {
            if (image.type === type) {
                const data = {
                    id: image.id,
                    ...image,
                }
                setProject(data);
        }
        });
    }, [type]);

    return (
        <div className="ourWork">
            <h2>Apartment Condominiums</h2>
            <div className="projectGallery">
                {images.map((image) => {
                    if (image.type === type) {
                        return (
                            <div className="project" key={image.id}>
                                <img className="projectImage" src={image.src} alt={image.alt} />
                            </div>
                        );
                    }
                }
                )}
            </div>
        </div>
    );
}

export default OurWork;