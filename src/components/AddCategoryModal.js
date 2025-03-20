import React from "react";
import { Modal, Button } from "react-bootstrap";

function AddCategoryModal({ show, handleClose }) {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Ajouter une Catégorie</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* Formulaire pour ajouter une catégorie */}
                <p>Formulaire ici...</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Fermer
                </Button>
                <Button variant="primary">
                    Ajouter
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AddCategoryModal;  // ✅ Exportation correcte
