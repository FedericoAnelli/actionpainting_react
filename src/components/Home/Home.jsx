import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/contactUs");
    }

    return (
        <div className="home">
            <h1>WE ARE YOUR BEST CHOICE</h1>
            <p>Action Painting Services, Inc. offers a wide range of<br />services based on your needs and budget. Having more<br />than 20 years of experience with highly trained<br />professional painters, we guarantee to exceed your<br />expectations.</p>
            <button className="buttonContactUs" onClick={() => handleClick()}>CONTACT US</button>
        </div>
    );
}

export default Home;
