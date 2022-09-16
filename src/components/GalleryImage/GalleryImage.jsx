import "./GalleryImage.css";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const GalleryImage = ({ src, alt }) => {

    const handleClick = () => {
        Swal.fire({
            imageUrl: src,
            imageAlt: alt,
            imageHeight: "100%",
            imageWidth: "auto",
            showConfirmButton: false,
            showCloseButton: true,
            background: "none",
        });
    };


    return (
        <motion.div className="project" 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        exit={{ opacity: 0 }}>
            <img className="projectImage" src={src} alt={alt} onClick={() => handleClick()} />
        </motion.div>
    );
}

export default GalleryImage;