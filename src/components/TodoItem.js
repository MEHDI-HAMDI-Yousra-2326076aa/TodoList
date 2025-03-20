import React from "react";

function TodoItem({ todo, setTodos }) {
    const handleDelete = () => {
        setTodos(prevTodos => prevTodos.filter(t => t.id !== todo.id));
    };

    return (
        <div style={{
            ...styles.container,
            backgroundColor: todo.urgent ? "#FFCDD2" : "#FFF" // Rouge pastel si urgent ❤️
        }}>
            <h3 style={{
                textDecoration: todo.etat === "Reussi" ? "line-through" : "none",
                color: todo.etat === "Reussi" ? "#888" : "#333",
                fontWeight: "bold",
            }}>
                {todo.title} {todo.urgent && "🔥"}
            </h3>
            <p>📅 Échéance : <strong>{todo.date_echeance}</strong></p>
            <p>{todo.description || "📌 Aucune description"}</p>

            <button onClick={handleDelete} style={styles.deleteButton}>🗑 Supprimer</button>
        </div>
    );
}

// 🎨 Styles améliorés 🎨
const styles = {
    container: {
        border: "1px solid #E0E0E0",
        borderRadius: "10px",
        padding: "15px",
        margin: "10px 0",
        boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.1)",
    },
    deleteButton: {
        backgroundColor: "#FF6F61", // Rouge pastel
        color: "#FFF",
        border: "none",
        borderRadius: "5px",
        padding: "8px 12px",
        cursor: "pointer",
        fontWeight: "bold",
    },
};

export default TodoItem;
