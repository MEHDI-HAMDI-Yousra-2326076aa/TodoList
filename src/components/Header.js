import React from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";

function Header({ todos }) {
    const totalTasks = todos.length;
    const inProgress = todos.filter(todo => todo.etat === "En attente").length;
    const completed = todos.filter(todo => todo.etat === "Reussi").length;
    const notStarted = todos.filter(todo => todo.etat === "Nouveau").length;

    const etatCounts = {
        notStarted,
        inProgress,
        completed
    };

    const data = {
        labels: Object.keys(etatCounts),
        datasets: [{
            data: Object.values(etatCounts),
            backgroundColor: ["#b65480", "#0f4357", "#58AB9AFF"]
        }]
    };

    return (
        <header style={{
            display: "flex",
            justifyContent: "space-between",
            background: "#7fc5d5",
            color: "white",
            padding: "10px"
        }}>
            <div>
                <h2>Total: {totalTasks} 📝</h2>
            </div>
            <div>
                <span>✅ Terminé: {completed} | ⏳ En cours: {inProgress} | ⛔ Pas commencé: {notStarted}</span>
            </div>
            <div style={{width: "150px", height: "150px"}}>
                <Pie data={data}/>
            </div>
        </header>
    );
}

export default Header;
