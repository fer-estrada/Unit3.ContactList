import { useState, useEffect } from "react";
import '/Documents/coursework/unit3/block26/contact-list/src/App.css'

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
    const [contact, setContact] = useState([]);
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchSelectedData() {
            try {
                const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
                const json = await response.json();
                setContact(json);
            } catch (error) {
                setError(error)
            }
        }
        fetchSelectedData();
    }, []);

    return (
        <div className="selectedContact">
            <article>
                <h3>{contact.name}</h3>
                <p>{contact.email}</p>
                <p>{contact.phone}</p>
            </article>
            <button onClick={() => setSelectedContactId(null)}>Go Back</button>
        </div>
    )
}