import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="content"><h2>Welcome.</h2>
        <span>You're near the end of your luteal phase.</span>
        <span>Try taking it slow.</span>
        <button>Workout Plan Today</button>
        <button onClick={() => navigate("/calendar")}>Calendar</button></div>
    )
}

export default Home;