import React, { useEffect, useState } from "react";
import API from "./api";
import NoteCard from "./components/NoteCard";
import NoteForm from "./components/NoteForm";
import SearchBar from "./components/SearchBar";
import "./styles.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");

  const fetchNotes = async () => {
    const res = await API.get("/notes");
    setNotes(res.data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const filtered = notes.filter(
    (n) =>
      n.title.toLowerCase().includes(search.toLowerCase()) ||
      n.content.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Notes App</h1>
      <SearchBar value={search} onChange={setSearch} />
      <NoteForm refresh={fetchNotes} />
      <div className="grid">
        {filtered.map((note) => (
          <NoteCard key={note._id} note={note} refresh={fetchNotes} />
        ))}
      </div>
    </div>
  );
}

export default App;
