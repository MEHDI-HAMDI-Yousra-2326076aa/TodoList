import React, { useState } from "react";
import AddTaskModal from "./AddTaskModal";
import AddCategoryModal from "./AddCategoryModal";

function Footer({ setShowTaskModal, setViewMode, viewMode, setCategories }) {
    const [showCategoryModal, setShowCategoryModal] = useState(false);

    return (
        <footer style={styles.footer}>
            {/* Bouton pour basculer entre Tâches et Catégories */}
            <button
                onClick={() => setViewMode(viewMode === "tasks" ? "categories" : "tasks")}
                style={{ ...styles.button, backgroundColor: "#FFC0CB" }}>
                {viewMode === "tasks" ? "📂 Voir Catégories" : "📋 Voir Tâches"}
            </button>

            {/* Bouton pour ajouter une tâche (mode Tâches) */}
            {viewMode === "tasks" && (
                <button
                    onClick={() => setShowTaskModal(true)}
                    style={{ ...styles.button, backgroundColor: "#ADD8E6" }}>
                    ➕ Ajouter une Tâche
                </button>
            )}

            {/* Bouton pour ajouter une catégorie (mode Catégories) */}
            {viewMode === "categories" && (
                <button
                    onClick={() => setShowCategoryModal(true)}
                    style={{ ...styles.button, backgroundColor: "#F5DEB3" }}>
                    ➕ Ajouter une Catégorie
                </button>
            )}

            {/* Modale d'ajout de catégorie */}
            <AddCategoryModal
                show={showCategoryModal}
                handleClose={() => setShowCategoryModal(false)}
                setCategories={setCategories}
            />
        </footer>
    );
}

const styles = {
    footer: {
        position: "fixed",
        bottom: 0,
        width: "100%",
        background: "white",
        color: "#333",
        textAlign: "center",
        padding: "15px",
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        boxShadow: "0px -2px 10px rgba(0, 0, 0, 0.1)"
    },
    button: {
        border: "none",
        padding: "10px 20px",
        borderRadius: "20px",
        fontSize: "16px",
        fontWeight: "bold",
        cursor: "pointer",
        color: "#fff",
        transition: "0.3s"
    }
};

export default Footer;
