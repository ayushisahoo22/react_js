import "./Welcome.css";
function Welcome({ name, progress }) {
    return (
        <div className="welcomeCard">
            <div className="welcomeContent">
                <h2>Hello {name} 👋</h2>
                <p>
                    You've completed <strong>{progress}%</strong> of your weekly goal
                </p>
                <p>Keep going, you're doing great!</p>
                <button className="goalBtn">
                    View My Goals
                </button>
            </div>
            <div className="blob1"></div>
            <div className="blob2"></div>
            <div className="blob3"></div>
            <div className="blob4"></div>

        </div>
    );
}

export default Welcome;