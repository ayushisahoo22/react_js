import "./Quick.css";

function Quick() {
    const actions = [
        "➕ Add Task",
        "📚 Add Subject",
        "⏱ Study Timer",
        "📝 Add Note"
    ];

    return (
        <div className="quickActions">
            <div className="quickHeader">
                <h3>Quick Actions</h3>
            </div>
            <div className="actionCards">
                {actions.map((action, index) => (
                    <div className="actionCard" key={index}>
                        {action}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Quick;