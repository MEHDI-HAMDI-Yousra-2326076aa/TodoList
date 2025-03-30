import React from "react";

function CategoryList({ categories = [], setCategories, tasks = [], relations = [] }) {
    const handleDelete = (id) => {
        setCategories(prevCategories => prevCategories.filter(cat => cat.id !== id));
    };

    return (
        <div>
            <h2>📂 Liste des Catégories</h2>
            {categories.length === 0 ? (
                <p>Aucune catégorie disponible.</p>
            ) : (
                categories.map((category) => {
                    // Vérifie que relations et tasks existent avant de filtrer
                    const relatedTasks = relations.length > 0 && tasks.length > 0
                        ? relations
                            .filter(rel => rel.categorie === category.id)
                            .map(rel => tasks.find(task => task.id === rel.tache))
                            .filter(task => task) // Supprime les valeurs undefined
                        : [];

                    return (
                        <div
                            key={category.id}
                            style={{
                                backgroundColor: category.color,
                                padding: "10px",
                                margin: "10px 0",
                                borderRadius: "5px",
                                color: "#fff"
                            }}
                        >
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <span style={{ fontWeight: "bold" }}>{category.title}</span>
                                <button
                                    onClick={() => handleDelete(category.id)}
                                    style={{ background: "red", color: "#fff", border: "none", padding: "5px 10px", cursor: "pointer" }}>
                                    🗑
                                </button>
                            </div>

                            {/* Affichage des tâches liées */}
                            {relatedTasks.length > 0 ? (
                                <ul style={{ paddingLeft: "20px", marginTop: "5px" }}>
                                    {relatedTasks.map(task => (
                                        <li key={task.id} style={{ listStyle: "none" }}>📝 {task.title}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p style={{ fontSize: "14px", fontStyle: "italic", marginTop: "5px" }}>
                                    📌 Aucune tâche liée
                                </p>
                            )}
                        </div>
                    );
                })
            )}
        </div>
    );
}

export default CategoryList;
