import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import jsonData from "../data/sampleData.json"; // Fichier JSON contenant les tâches et catégories

function StartupModal({ show, handleClose, setTodos, setCategories }) {
    const loadJsonData = () => {
        setTodos(jsonData.taches);
        setCategories(jsonData.categories);
        handleClose(); // Ferme la popup après chargement
    };

    const startFromScratch = () => {
        setTodos([]);
        setCategories([]);
        handleClose(); // Ferme la popup après le choix
    };

    return (
        <Modal show={show} backdrop="static" keyboard={false} centered>
            <Modal.Header>
                <Modal.Title>🚀 Bienvenue sur la Todo List</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Voulez-vous charger les tâches et catégories pré-enregistrées ou partir de zéro ?</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={startFromScratch}>🔄 Partir de zéro</Button>
                <Button variant="primary" onClick={loadJsonData}>📂 Charger les données</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default StartupModal;
