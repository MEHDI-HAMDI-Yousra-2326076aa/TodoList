import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, setTodos }) {
    return (
        <div style={styles.container}>
            <h2 style={styles.title}>📌 Liste des tâches</h2>
            {todos.length === 0 ? (
                <p>🌟 Aucune tâche pour le moment !</p>
            ) : (
                todos.map(todo => <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />)
            )}
        </div>
    );
}

// 🌈 Styles doux et mignons 🌈
const styles = {
    container: {
        backgroundColor: "#FFF5F8", // Rose pastel doux
        borderRadius: "15px",
        padding: "20px",
        width: "80%",
        margin: "20px auto",
        boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
    },
    title: {
        fontSize: "24px",
        fontWeight: "bold",
        color: "#B65480", // Rose plus foncé
        marginBottom: "15px",
    },
};

export default TodoList;
