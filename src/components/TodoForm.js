import React, { useState } from "react";

function TodoForm({ setTodos, categories }) {
    const [title, setTitle] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [description, setDescription] = useState("");
    const [urgent, setUrgent] = useState(false);
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.length < 3) return alert("Le titre doit avoir au moins 3 caractères");

        const newTask = {
            id: Date.now(),
            title,
            dueDate,
            description,
            urgent,
            category,
            status: "Nouveau",
            createdAt: new Date().toISOString(),
        };

        setTodos(prevTodos => [...prevTodos, newTask]);
        setTitle("");
        setDueDate("");
        setDescription("");
        setUrgent(false);
        setCategory("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Titre" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
            <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
            <label>
                <input type="checkbox" checked={urgent} onChange={() => setUrgent(!urgent)} /> Urgent
            </label>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Sélectionner une catégorie</option>
                {categories.map((cat) => (
                    <option key={cat.id} value={cat.name}>{cat.name}</option>
                ))}
            </select>
            <button type="submit">Ajouter Tâche</button>
        </form>
    );
}

export default TodoForm;
