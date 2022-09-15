import "./GalleryImage.css";
import Swal from "sweetalert2";

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
        <div className="project" key={key}>
            <img className="projectImage" src={src} alt={alt} onClick={() => handleClick()} />
        </div>
    );
}

export default GalleryImage;