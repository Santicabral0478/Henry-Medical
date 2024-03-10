import { useState, useEffect } from "react";

const DetailTurn = ({ id, handleOnClose }) => {
    const [turn, setTurn] = useState(null);

    useEffect(() => {
        if (id !== 0) {
            fetch(`http://localhost:3005/turns/${id}`)
                .then(response => response.json())
                .then(data => {
                    setTurn(data);
                })
                .catch(error => console.error("Error fetching turn:", error));
        }
    }, [id]);

    return (
        <div className="modalDetail">
            {turn && (
                <>
                    <h2>{turn.date}</h2>
                    <h3>{turn.user.nDni}</h3>
                    <button onClick={handleOnClose}>Cerrar</button>
                </>
            )}
        </div>
    );
}

export default DetailTurn;
