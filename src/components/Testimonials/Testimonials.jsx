import "./Testimonials.css";
import testimonials0 from "../../media/images/testimonials_Logos/testimonials0.webp";
import testimonials1 from "../../media/images/testimonials_Logos/testimonials1.webp";
import testimonials2 from "../../media/images/testimonials_Logos/testimonials2.webp";
import testimonials3 from "../../media/images/testimonials_Logos/testimonials3.webp";
import testimonials4 from "../../media/images/testimonials_Logos/testimonials4.webp";
import testimonials5 from "../../media/images/testimonials_Logos/testimonials5.webp";
import testimonialDoc1 from "../../media/images/testimonials_Docs/sherwinWilliams.webp";
import testimonialDoc2 from "../../media/images/testimonials_Docs/simonLyons.webp";
import testimonialDoc3 from "../../media/images/testimonials_Docs/streamLine.webp";
import testimonialDoc4 from "../../media/images/testimonials_Docs/miamiBeachMarina.webp";
import testimonialDoc5 from "../../media/images/testimonials_Docs/ckTest.webp";
import testimonialDoc6 from "../../media/images/testimonials_Docs/bonneVie.webp";
import Swal from 'sweetalert2';
import { motion } from "framer-motion";

const Testimonials = () => {

    const testimonials = [
        {
            id: 0,
            src: testimonials0,
            alt: "Sherwin Williams Testimonial",
            testimonial: testimonialDoc1
        },
        {
            id: 1,
            src: testimonials1,
            alt: "Simon Lyons Testimonial",
            testimonial: testimonialDoc2
        },
        {
            id: 2,
            src: testimonials2,
            alt: "Streamline Testimonial",
            testimonial: testimonialDoc3
        },
        {
            id: 3,
            src: testimonials3,
            alt: "Miami Beach Marina Testimonial",
            testimonial: testimonialDoc4
        },
        {
            id: 4,
            src: testimonials4,
            alt: "CK Testimonial",
            testimonial: testimonialDoc5
        },
        {
            id: 5,
            src: testimonials5,
            alt: "Bonne Vie Testimonial",
            testimonial: testimonialDoc6
        },
    ];

    const handleClick = (e) => {
        Swal.fire({
            imageUrl: e.testimonial,
            imageAlt: e.alt,
            imageHeight: "100%",
            imageWidth: "auto",
            showConfirmButton: false,
            showCloseButton: true,
            background: "none",
        });
    }

    return (
        <div className="testimonials">
            <h2>Testimonials</h2>
            <div className="testimonialsGallery">
                {testimonials.map((testimonial) => (
                    <motion.div className="testimonial" key={testimonial.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    exit={{ opacity: 0 }}>
                        <img className="testimonialImage" onClick={({e}) => handleClick(testimonial)} src={testimonial.src} alt="Testimonial" />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Testimonials;