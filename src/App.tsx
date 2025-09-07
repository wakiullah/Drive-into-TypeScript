import { useState } from "react";
import "./App.css";

type Note = {
  title: string;
  description: string;
  id: number;
};

function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && description.trim()) {
      const newNote: Note = {
        title: title.trim(),
        description: description.trim(),
        id: Date.now(),
      };
      setNotes((prev) => [...prev, newNote]);
      setTitle("");
      setDescription("");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Create Note</h1>

      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Note title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <textarea
            placeholder="Short description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            className="w-full p-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
          />
        </div>

        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg font-medium"
        >
          Create Note
        </button>
      </form>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Notes ({notes.length})</h2>
        {notes.map((note) => (
          <div
            key={note.id}
            className="border border-gray-200 rounded-lg p-4 mb-3 bg-gray-50"
          >
            <h3 className="text-xl font-medium mb-2">{note.title}</h3>
            <p className="text-gray-600">{note.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
