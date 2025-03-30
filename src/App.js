import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import StartupModal from "./components/StartupModal";
import AddTaskModal from "./components/AddTaskModal";
import AddCategoryModal from "./components/AddCategoryModal";

function App() {
    const [todos, setTodos] = useState([]); // Déclaration de setTodos
    const [categories, setCategories] = useState([]);  // Déclaration de setCategories
    const [viewMode, setViewMode] = useState("tasks");
    const [showStartupModal, setShowStartupModal] = useState(true);
    const [showTaskModal, setShowTaskModal] = useState(false);

    useEffect(() => {
        const savedTodos = localStorage.getItem("todos");
        if (savedTodos) {
            setTodos(JSON.parse(savedTodos));
        }
    }, []);

    return (
        <>
            <StartupModal
                show={showStartupModal}
                handleClose={() => setShowStartupModal(false)}
                setTodos={setTodos}
                setCategories={setCategories}
            />
            <Header todos={todos} />
            <MainContent
                viewMode={viewMode}
                todos={todos}
                setTodos={setTodos}
                categories={categories}
                setCategories={setCategories}  // Passe setCategories ici aussi
            />
            <Footer
                setShowTaskModal={setShowTaskModal}
                setViewMode={setViewMode}
                viewMode={viewMode}
                setCategories={setCategories}  // Passe setCategories au Footer
            />
            <AddTaskModal show={showTaskModal} handleClose={() => setShowTaskModal(false)} setTodos={setTodos} />
        </>
    );
}

export default App;
