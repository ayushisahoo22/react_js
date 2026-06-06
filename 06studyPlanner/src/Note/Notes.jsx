import { useState } from "react";
import "./Notes.css";

function Notes() {

    const [notes, setNotes] = useState([]);

    const [showForm, setShowForm] = useState(false);

    const [title, setTitle] = useState("");

    const [content, setContent] = useState("");

    const [selectedNote, setSelectedNote] = useState(null);

    const addNote = () => {

        if (!title.trim() || !content.trim()) {
            return;
        }

        const newNote = {
            id: Date.now(),
            title,
            content
        };

        setNotes([...notes, newNote]);

        setTitle("");
        setContent("");

        setShowForm(false);
    };

    return (
        <div className="notesPage">

            <div className="notesHeader">
                <h1>📝 Notes</h1>

                <button
                    className="addBtn"
                    onClick={() => setShowForm(true)}
                >
                    + New Note
                </button>
            </div>

            {showForm && (
                <div className="noteForm">

                    <input
                        type="text"
                        placeholder="Note Title"
                        value={title}
                        onChange={(e) =>
                            setTitle(e.target.value)
                        }
                    />

                    <textarea
                        placeholder="Write your note here..."
                        value={content}
                        onChange={(e) =>
                            setContent(e.target.value)
                        }
                    ></textarea>

                    <button onClick={addNote}>
                        Save Note
                    </button>

                </div>
            )}

            {notes.length === 0 ? (
                <div className="emptyState">

                    <h2>No Notes Yet</h2>

                    <p>
                        Click "New Note" to create your first note.
                    </p>

                </div>
            ) : (
                <div className="notesGrid">

                    {notes.map((note) => (
                        <div
                            className="noteCard"
                            key={note.id}
                            onClick={() =>
                                setSelectedNote(note)
                            }
                        >
                            <h3>{note.title}</h3>

                            <p>
                                {note.content.length > 80
                                    ? note.content.substring(0, 80) + "..."
                                    : note.content}
                            </p>
                        </div>
                    ))}

                </div>
            )}

            {selectedNote && (
                <div className="modalOverlay">

                    <div className="modal">

                        <button
                            className="closeBtn"
                            onClick={() =>
                                setSelectedNote(null)
                            }
                        >
                            ✕
                        </button>

                        <h2>{selectedNote.title}</h2>

                        <p>{selectedNote.content}</p>

                    </div>

                </div>
            )}

        </div>
    );
}

export default Notes;