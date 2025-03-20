import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function AddTaskModal({ show, handleClose, setTodos }) {
    const [title, setTitle] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [status, setStatus] = useState("Nouveau");
    const [description, setDescription] = useState("");
    const [urgent, setUrgent] = useState(false);

    // Date de création auto-générée
    const creationDate = new Date().toISOString().split("T")[0];

    const handleSubmit = () => {
        if (title.length < 3) return alert("Le titre doit avoir au moins 3 caractères");

        const newTask = {
            id: Date.now(),
            title,
            date_creation: creationDate,
            date_echeance: dueDate,
            etat: status,
            description,
            urgent
        };

        setTodos(prev => [...prev, newTask]);
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton >
                <Modal.Title>📌 Ajouter une Tâche</Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <Form>
                    {/* Intitulé */}
                    <Form.Group>
                        <Form.Label>📝 Intitulé</Form.Label>
                        <Form.Control
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Ex: Faire les courses"
                            minLength={3}
                            required
                        />
                    </Form.Group>

                    {/* Date de création (non modifiable) */}
                    <Form.Group>
                        <Form.Label>📅 Date de création</Form.Label>
                        <Form.Control type="date" value={creationDate} disabled />
                    </Form.Group>

                    {/* Date d'échéance */}
                    <Form.Group>
                        <Form.Label>📆 Date d'échéance</Form.Label>
                        <Form.Control
                            type="date"
                            value={dueDate}
                            onChange={(e) => setDueDate(e.target.value)}
                        />
                    </Form.Group>

                    {/* État */}
                    <Form.Group>
                        <Form.Label>✅ État</Form.Label>
                        <Form.Select value={status} onChange={(e) => setStatus(e.target.value)}>
                            <option value="Nouveau">Pas commencé</option>
                            <option value="En attente">En attente</option>
                            <option value="En cours">En cours</option>
                            <option value="Réussi">Terminé</option>
                            <option value="Abandonné">Abandonné</option>
                        </Form.Select>
                    </Form.Group>

                    {/* Description */}
                    <Form.Group>
                        <Form.Label>📝 Description (optionnel)</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Détails de la tâche..."
                        />
                    </Form.Group>

                    {/* Urgent (case à cocher) */}
                    <Form.Group className="mt-3">
                        <Form.Check
                            type="checkbox"
                            label="🔥 Urgent"
                            checked={urgent}
                            onChange={(e) => setUrgent(e.target.checked)}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer >
                <Button variant="secondary" onClick={handleClose}>Fermer</Button>
                <Button variant="primary" onClick={handleSubmit}>➕ Ajouter</Button>
            </Modal.Footer>
        </Modal>
    );
}
export default AddTaskModal;
