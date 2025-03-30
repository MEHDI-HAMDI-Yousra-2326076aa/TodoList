import React, { useState } from "react";
import TodoList from "./TodoList";
import CategoryList from "./CategoryList";

function MainContent({ viewMode, todos, setTodos, categories, setCategories }) {
    const [filter, setFilter] = useState("En attente");
    const [sortBy, setSortBy] = useState("date_echeance");

    // Ajout du filtre pour les catégories
    const [categoryFilter, setCategoryFilter] = useState("Tous"); // "Tous", "Actif", "Inactif"

    const cleanTitle = (title) => title.replace(/^\d+\.\s*/, "").toLowerCase();

    // Filtrage des tâches
    const filteredTodos = [...todos]
        .filter(todo => filter === "Tous" || todo.etat === filter)
        .sort((a, b) => {
            if (sortBy === "date_creation") return new Date(a.date_creation) - new Date(b.date_creation);
            if (sortBy === "date_echeance") return new Date(a.date_echeance) - new Date(b.date_echeance);
            if (sortBy === "title") return cleanTitle(a.title).localeCompare(cleanTitle(b.title), "fr", { sensitivity: "base" });
            return 0;
        });

    // Filtrage des catégories
    const filteredCategories = categories.filter(category => {
        if (categoryFilter === "Tous") return true; // Si on veut toutes les catégories
        if (categoryFilter === "Actif") return category.actif; // Filtrer les catégories actives
        if (categoryFilter === "Inactif") return !category.actif; // Filtrer les catégories inactives
        return true;
    });

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>
                {viewMode === "tasks" ? "🧸 Mes Tâches" : "📂 Mes Catégories"}
            </h2>

            {viewMode === "tasks" ? (
                <>
                    <div style={styles.filters}>
                        <label style={styles.label}>📌 Filtrer :</label>
                        <select onChange={(e) => setFilter(e.target.value)} value={filter} style={styles.select}>
                            <option value="Tous">✨ Tous</option>
                            <option value="Nouveau">📄 Pas commencé</option>
                            <option value="En attente">⏳ En cours</option>
                            <option value="Reussi">✅ Terminé</option>
                        </select>

                        <label style={styles.label}>📅 Trier par :</label>
                        <select onChange={(e) => setSortBy(e.target.value)} value={sortBy} style={styles.select}>
                            <option value="date_creation">📆 Date de création</option>
                            <option value="date_echeance">📅 Date d’échéance</option>
                            <option value="title">🔤 Nom</option>
                        </select>
                    </div>

                    <div style={styles.todoContainer}>
                        <TodoList todos={filteredTodos} setTodos={setTodos} />
                    </div>
                </>
            ) : (
                <>
                    <div style={styles.filters}>
                        <label style={styles.label}>📌 Filtrer par état :</label>
                        <select onChange={(e) => setCategoryFilter(e.target.value)} value={categoryFilter} style={styles.select}>
                            <option value="Tous">✨ Toutes</option>
                            <option value="Actif">✅ Actif</option>
                            <option value="Inactif">❌ Inactif</option>
                        </select>
                    </div>

                    <div style={styles.categoryContainer}>
                        <CategoryList categories={filteredCategories} setCategories={setCategories} />
                    </div>
                </>
            )}
        </div>
    );
}

const styles = {
    container: { backgroundColor: "#F8E8EE", borderRadius: "15px", padding: "20px", width: "80%", margin: "20px auto", boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.1)", textAlign: "center" },
    title: { fontSize: "24px", fontWeight: "bold", color: "#B65480", marginBottom: "15px" },
    filters: { display: "flex", justifyContent: "center", alignItems: "center", gap: "15px", marginBottom: "15px" },
    label: { fontSize: "16px", fontWeight: "bold", color: "#333" },
    select: { padding: "8px", borderRadius: "8px", border: "1px solid #B65480", backgroundColor: "#FFF5F8", fontSize: "14px", cursor: "pointer" },
    todoContainer: { backgroundColor: "#FFF", borderRadius: "10px", padding: "15px", boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)" },
    categoryContainer: { backgroundColor: "#FFF", borderRadius: "10px", padding: "15px", boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)", marginTop: "20px" },
};

export default MainContent;
