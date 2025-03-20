import React, { useState } from "react";
import TodoList from "./TodoList";

function MainContent({ todos, setTodos }) {
    const [filter, setFilter] = useState("En attente");
    const [sortBy, setSortBy] = useState("date_echeance");

    // Fonction pour nettoyer les titres (supprimer chiffres + points au début)
    const cleanTitle = (title) => title.replace(/^\d+\.\s*/, "").toLowerCase();

    // Filtrage et tri des tâches
    const filteredTodos = [...todos] // On copie pour éviter de modifier directement l'état
        .filter(todo => filter === "Tous" || todo.etat === filter)
        .sort((a, b) => {
            if (sortBy === "date_creation") {
                return new Date(a.date_creation) - new Date(b.date_creation);
            }
            if (sortBy === "date_echeance") {
                return new Date(a.date_echeance) - new Date(b.date_echeance);
            }
            if (sortBy === "title") {
                return cleanTitle(a.title).localeCompare(cleanTitle(b.title), "fr", { sensitivity: "base" });
            }
            return 0;
        });

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>🧸 Mes Tâches ({filter})</h2>

            <div style={styles.filters}>
                {/* Filtre par état */}
                <label style={styles.label}>📌 Filtrer :</label>
                <select onChange={(e) => setFilter(e.target.value)} value={filter} style={styles.select}>
                    <option value="Tous">✨ Tous</option>
                    <option value="Nouveau">📄 Pas commencé</option>
                    <option value="En attente">⏳ En cours</option>
                    <option value="Reussi">✅ Terminé</option>
                </select>

                {/* Tri par date ou nom */}
                <label style={styles.label}>📅 Trier par :</label>
                <select onChange={(e) => setSortBy(e.target.value)} value={sortBy} style={styles.select}>
                    <option value="date_creation">📆 Date de création</option>
                    <option value="date_echeance">📅 Date d’échéance</option>
                    <option value="title">🔤 Nom</option>
                </select>
            </div>

            {/* Affichage des tâches triées et filtrées */}
            <div style={styles.todoContainer}>
                <TodoList todos={filteredTodos} setTodos={setTodos} />
            </div>
        </div>
    );
}

// 🎨 Styles doux et mignons 🎨
const styles = {
    container: {
        backgroundColor: "#F8E8EE", // Rose pastel doux 🌸
        borderRadius: "15px",
        padding: "20px",
        width: "80%",
        margin: "20px auto",
        boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.1)", // Effet ombré léger ✨
        textAlign: "center",
    },
    title: {
        fontSize: "24px",
        fontWeight: "bold",
        color: "#B65480", // Rose plus foncé 🌷
        marginBottom: "15px",
    },
    filters: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "15px",
        marginBottom: "15px",
    },
    label: {
        fontSize: "16px",
        fontWeight: "bold",
        color: "#333",
    },
    select: {
        padding: "8px",
        borderRadius: "8px",
        border: "1px solid #B65480",
        backgroundColor: "#FFF5F8",
        fontSize: "14px",
        cursor: "pointer",
    },
    todoContainer: {
        backgroundColor: "#FFF",
        borderRadius: "10px",
        padding: "15px",
        boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
    },
};

export default MainContent;
