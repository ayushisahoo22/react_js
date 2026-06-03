import './Subject.css'
function Subject(){
    return (
        <div className="subjectOverview" style={{marginTop:"10px"}}>
            <div className="subjectHeader">
                <h3>Subject Overview</h3>
                <button style={{color:"#4686d3",border:"none",backgroundColor:"white"}}>View All</button>
            </div>
            <div className="subjectCards">
                <div className="subjectCard">
                    <h3>Mathematics</h3>
                    <p>8 Tasks</p>
                    <h4>75%</h4>
                </div>
                <div className="subjectCard">
                    <h3>Physics</h3>
                    <p>6 Tasks</p>
                    <h4>50%</h4>
                </div>
                <div className="subjectCard">
                    <h3>Chemistry</h3>
                    <p>5 Tasks</p>
                    <h4>40%</h4>
                </div>
                <div className="subjectCard">
                    <h3>Biology</h3>
                    <p>7 Tasks</p>
                    <h4>60%</h4>
                </div>
            </div>
        </div>
    );
}
export default Subject