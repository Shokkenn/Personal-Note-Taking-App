import React, { useState } from "react";
import API from "../api";
import { timeAgo } from "../utils/timeAgo";

export default function NoteCard({ note, refresh }) {
  const [isEditing, setEditing] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  const handleDelete = async () => {
    if (window.confirm("Delete this note?")) {
      await API.delete(`/notes/${note._id}`);
      refresh();
    }
  };

  const handleUpdate = async () => {
    await API.put(`/notes/${note._id}`, { title, content });
    setEditing(false);
    refresh();
  };

  return (
    <div className="note-card" style={{ backgroundColor: note.color }}>
      {isEditing ? (
        <>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button onClick={handleUpdate}>Save</button>
        </>
      ) : (
        <>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <small>{timeAgo(note.createdAt)}</small>
          <div className="actions">
            <button onClick={() => setEditing(true)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
}
