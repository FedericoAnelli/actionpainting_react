import "./Testimonials.css";
import testimonials0 from "../../media/images/testimonials_Logos/testimonials0.webp";
import testimonials1 from "../../media/images/testimonials_Logos/testimonials1.webp";
import testimonials2 from "../../media/images/testimonials_Logos/testimonials2.webp";
import testimonials3 from "../../media/images/testimonials_Logos/testimonials3.webp";
import testimonials4 from "../../media/images/testimonials_Logos/testimonials4.webp";
import testimonials5 from "../../media/images/testimonials_Logos/testimonials5.webp";

const Testimonials = () => {

    const testimonials = [
        {
            id: 0,
            src: testimonials0,
        },
        {
            id: 1,
            src: testimonials1,
        },
        {
            id: 2,
            src: testimonials2,
        },
        {
            id: 3,
            src: testimonials3,
        },
        {
            id: 4,
            src: testimonials4,
        },
        {
            id: 5,
            src: testimonials5,
        },
    ];


    return (
        <div className="testimonials">
            <h2>Testimonials</h2>
            <div className="testimonialsGallery">
                {testimonials.map((testimonial) => (
                    <div className="testimonial" key={testimonial.id}>
                        <img className="testimonialImage" src={testimonial.src} alt="Testimonial" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Testimonials;