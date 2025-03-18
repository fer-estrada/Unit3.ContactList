import { useState, useEffect } from "react";
import ContactRow from "./ContactRow";
import '/Documents/coursework/unit3/block26/contact-list/src/App.css'

export default function ContactList({ setSelectedContactId }) {
    // const dummyContacts = [
    //     { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
    //     { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
    //     { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
    // ];
    
    const [contacts, setContacts] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchContacts() {
            try {
                const response = await fetch('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users');
                const json = await response.json();
                setContacts(json)
            } catch (error) {
                setError(error)
            }
        }
        fetchContacts();
    }, []);
    
    return (
        <table className="contactTable">
            <thead>
                <tr>
                    <th colSpan='3'>Contact List</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>E-mail</th>
                    <th>Phone</th>
                </tr>
                {contacts.map((contact) => {
                    return <ContactRow key={contact.id} contact={contact} setSelectedContactId={setSelectedContactId} />
                })}
            </tbody>
        </table>
    );
}