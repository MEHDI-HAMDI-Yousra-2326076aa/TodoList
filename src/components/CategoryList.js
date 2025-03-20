import React from "react";

function CategoryList({ categories, setCategories }) {
    const handleDelete = (id) => {
        setCategories(prevCategories => prevCategories.filter(cat => cat.id !== id));
    };

    return (
        <div>
            <h2>📂 Liste des Catégories</h2>
            {categories.length === 0 ? (
                <p>Aucune catégorie disponible.</p>
            ) : (
                categories.map((category) => (
                    <div
                        key={category.id}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            backgroundColor: category.color,
                            padding: "10px",
                            margin: "5px 0",
                            borderRadius: "5px",
                            color: "#fff",
                            justifyContent: "space-between"
                        }}
                    >
                        <span>{category.name}</span>
                        <button onClick={() => handleDelete(category.id)} style={{ background: "red", color: "#fff", border: "none", padding: "5px 10px", cursor: "pointer" }}>🗑</button>
                    </div>
                ))
            )}
        </div>
    );
}

export default CategoryList;
