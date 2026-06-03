import './Assignment.css'

function Assignment(){
    return(
        <div className="assignment" style={{marginTop:"10px"}}>
            <div className="assignmentHead">
                <h3>Upcoming Assignments</h3>
                <button style={{color:"#4686d3",border:"none",backgroundColor:"white"}}>View All</button>
            </div>
            <div className='cards'>
                <div className="assignmentCard">
                    <h3>Mathematics</h3>
                    <p>Complete Chapter 5</p>
                    <p>📅 20 May, 2024</p>
                    <div className="progressBar">
                        <div className="progress"></div>
                    </div>
                    <p>60%</p>
                </div>
                <div className="assignmentCard">
                    <h3>Mathematics</h3>
                    <p>Complete Chapter 5</p>
                    <p>📅 20 May, 2024</p>
                    <div className="progressBar">
                        <div className="progress"></div>
                    </div>
                    <p>60%</p>
                </div>
                <div className="assignmentCard">
                    <h3>Mathematics</h3>
                    <p>Complete Chapter 5</p>
                    <p>📅 20 May, 2024</p>
                    <div className="progressBar">
                        <div className="progress"></div>
                    </div>
                    <p>60%</p>
                </div>
                <div className="assignmentCard">
                    <h3>Mathematics</h3>
                    <p>Complete Chapter 5</p>
                    <p>📅 20 May, 2024</p>
                    <div className="progressBar">
                        <div className="progress"></div>
                    </div>
                    <p>60%</p>
                </div>
            </div>
        </div>
    );
}

export default Assignment