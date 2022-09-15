import "./GalleryImage.css";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const GalleryImage = ({ src, alt, key }) => {

    const handleClick = () => {
        Swal.fire({
            imageUrl: src,
            imageAlt: alt,
            imageHeight: "100%",
            imageWidth: "auto",
            showConfirmButton: false,
            showCloseButton: true,
            background: "rgba(0, 0, 0, 0.8)"
        });
    };


    return (
        <motion.div className="project" key={key}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        exit={{ opacity: 0 }}>
            <img className="projectImage" src={src} alt={alt} onClick={() => handleClick()} />
        </motion.div>
    );
}

export default GalleryImage;