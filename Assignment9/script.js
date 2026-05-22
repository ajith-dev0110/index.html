const API_URL = "https://api-mockforge.onrender.com/api/databases/69f078982c9134e30a4486e3/resources/contact";
let contacts = [];
// Fetch Contacts //

async function fetchContacts() {
    try {
        const res = await fetch(API_URL);
        contacts = await res.json();
        displayContacts(contacts);
    } catch (error) {
        console.error("Error:", error);
    }
}

// Display Contacts //

function displayContacts(data) {
    const list = document.getElementById("contactList");
    list.innerHTML = "";

    data.forEach(contact => {
        const li = document.createElement("li");

        li.innerHTML = `
            ${contact.name} - ${contact.phone || "N/A"}
            <div>
                <button onclick="editContact(${contact.id})">Edit</button>
                <button onclick="deleteContact(${contact.id})">Delete</button>
            </div>
        `;

        list.appendChild(li);
    });
}

// Add Contact //

async function addContact() {
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;

    if (!name || !phone) {
        alert("Fill all fields");
        return;
    }

    try {
        const res = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, phone })
        });

        const newContact = await res.json();
        contacts.push(newContact);
        displayContacts(contacts);

    } catch (error) {
        console.error(error);
    }
}

// Edit Contact //

async function editContact(id) {
    const newName = prompt("Enter new name:");
    const newPhone = prompt("Enter new phone:");

    try {
        await fetch($(API_URL)/$(id), {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: newName, phone: newPhone })
        });

        contacts = contacts.map(c =>
            c.id === id ? { ...c, name: newName, phone: newPhone } : c
        );

        displayContacts(contacts);

    } catch (error) {
        console.error(error);
    }
}

// Delete Contact //

async function deleteContact(id) {
    try {
        await fetch($(API_URL)/$(id), {
            method: "DELETE"
        });

        contacts = contacts.filter(c => c.id !== id);
        displayContacts(contacts);

    } catch (error) {
        console.error(error);
    }
}
// Search Contact //

function searchContact() {
    const value = document.getElementById("search").value.toLowerCase();

    const filtered = contacts.filter(c =>
        c.name.toLowerCase().includes(value)
    );

    displayContacts(filtered);
}
// Initialize App //

fetchContacts();