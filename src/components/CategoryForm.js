import React, { useState } from "react";

function CategoryForm({ setCategories }) {
    const [name, setName] = useState("");
    const [color, setColor] = useState("#000000");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.length < 3) return alert("Le nom doit avoir au moins 3 caractères");

        setCategories(prevCategories => [...prevCategories, { id: Date.now(), name, color }]);
        setName("");
        setColor("#000000");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Nom de la catégorie" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
            <button type="submit">Ajouter Catégorie</button>
        </form>
    );
}

export default CategoryForm;
