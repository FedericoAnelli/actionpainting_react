import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/contactUs");
    }

    return (
        <div className="home">
            <h1 className="mainHeading">WE ARE YOUR BEST CHOICE</h1>
            <p className="centralText">Action Painting Services, Inc. offers a wide range of services based on your needs and budget. Having more than 30 years of experience with highly trained professional painters, we guarantee to exceed your expectations.</p>
            <button className="buttonContactUs" onClick={() => handleClick()}>CONTACT US</button>
        </div>
    );
}

export default Home;
