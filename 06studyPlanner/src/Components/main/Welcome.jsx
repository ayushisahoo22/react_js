import './Welcome.css'
function Welcome(){
    return(
        <div className="main">
            <div className='left'>
                <h2>Hello Ayushi 👋</h2>
                <p>You've completed 60% of your weekly goal</p>
                <p>Keep going on</p>
                <button style={{width:"fit-content",
                    backgroundColor:"#4686d3",
                    padding:"5px",border:"none",
                    borderRadius:"10px",color:"white"}}>View My Goals</button>
            </div>
            <div className="blob1"></div>
            <div className="blob2"></div>
            <div className="blob3"></div>
            <div className="blob4"></div>
        </div>
    )
}
export default Welcome;