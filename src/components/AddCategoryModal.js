import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function AddCategoryModal({ show, handleClose, setCategories }) {
    const [name, setName] = useState("");
    const [color, setColor] = useState("#ffcccc"); // 🎨 Couleur par défaut pastel
    const [emoji, setEmoji] = useState("📁"); // 📌 Liste des emojis
    const [active, setActive] = useState(true);

    const emojiOptions = ["📁", "📌", "💼", "🎨", "📚", "🎵", "🏋️", "🍽", "🚀", "🐾"];

    const handleSubmit = () => {
        if (name.length < 3) return alert("Le nom doit avoir au moins 3 caractères");

        const newCategory = {
            id: Date.now(),
            title: name,
            color,
            emoji,
            active
        };

        setCategories(prev => [...prev, newCategory]);  // Ajoute la nouvelle catégorie dans l'état global
        handleClose();  // Ferme la modale
    };

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>📂 Ajouter une Catégorie</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>🏷 Intitulé</Form.Label>
                        <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>🎨 Couleur</Form.Label>
                        <Form.Control type="color" value={color} onChange={(e) => setColor(e.target.value)} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>😀 Emoji</Form.Label>
                        <Form.Select value={emoji} onChange={(e) => setEmoji(e.target.value)}>
                            {emojiOptions.map((em, index) => (
                                <option key={index} value={em}>{em}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>

                    <Form.Group>
                        <Form.Check type="checkbox" label="✅ Actif" checked={active} onChange={(e) => setActive(e.target.checked)} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Fermer</Button>
                <Button variant="primary" onClick={handleSubmit}>Ajouter</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AddCategoryModal;
