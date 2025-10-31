import React, { useState } from "react";
import { SketchPicker } from "react-color";
import API from "../api";

export default function NoteForm({ refresh }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [color, setColor] = useState("#ffffff");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/notes", { title, content, color });
    setTitle("");
    setContent("");
    setColor("#ffffff");
    refresh();
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        maxLength={100}
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
        required
      />
      <p>{content.length} characters</p>
      <SketchPicker color={color} onChangeComplete={(c) => setColor(c.hex)} />
      <button type="submit">Add Note</button>
    </form>
  );
}
