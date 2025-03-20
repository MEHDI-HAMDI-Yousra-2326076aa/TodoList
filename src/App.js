import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import StartupModal from "./components/StartupModal";
import AddTaskModal from "./components/AddTaskModal"; // ✅ Assure-toi d'importer la modale

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    const [todos, setTodos] = useState([]);
    const [categories, setCategories] = useState([]);
    const [showStartupModal, setShowStartupModal] = useState(true);
    const [showTaskModal, setShowTaskModal] = useState(false); // ✅ Gérer l'affichage de la modale

    useEffect(() => {
        const savedTodos = localStorage.getItem("todos");
        if (savedTodos) {
            setTodos(JSON.parse(savedTodos));
        }
    }, []);

    return (
        <div>
            <StartupModal
                show={showStartupModal}
                handleClose={() => setShowStartupModal(false)}
                setTodos={setTodos}
                setCategories={setCategories}
            />

            <Header todos={todos} />
            <MainContent todos={todos} setTodos={setTodos} />
            <Footer setShowTaskModal={setShowTaskModal} /> {/* ✅ Passe la fonction pour ouvrir la modale */}

            {/* Modale pour ajouter une tâche */}
            <AddTaskModal show={showTaskModal} handleClose={() => setShowTaskModal(false)} setTodos={setTodos} />
        </div>
    );
}

export default App;
