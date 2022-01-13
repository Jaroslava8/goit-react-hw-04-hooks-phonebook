import React, { useState, useEffect } from "react";
import "./App.css";
import { nanoid } from "nanoid";
import Form from "./Components/Form/Form";
import Contacts from "./Components/Contacts/Contacts";
import PhonebookFilter from "./Components/Phonebook/PhonebookFilter";

const LStorageContacts = JSON.parse(localStorage.getItem("contacts"));

const App = () => {
  const [contacts, setName] = useState(LStorageContacts ?? []);
  const [filter, setFilter] = useState("");

  const addContact = (name, number) => {
    const enterName = contacts.map((contact) => {
      return contact.name;
    });

    enterName.includes(name)
      ? alert(`${name} is already in your Phonebook `)
      : setName([{ id: nanoid(), name, number }, ...contacts]);
  };

  const filterContacts = (filterEntry) => {
    setFilter(filterEntry);
  };

  const removeExistContact = (e) => {
    const deleteExistContact = contacts.findIndex((element) => {
      return element.id === e.currentTarget.id;
    });
    const newContacts = [...contacts];

    newContacts.splice(deleteExistContact, 1);
    console.log(newContacts);
    setName(newContacts);
  };

  const normalizeToLowCase = filter.toLowerCase();
  const filteredToLowCase = contacts.filter((cont) => {
    return cont.name.toLowerCase().includes(normalizeToLowCase);
  });

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <Form whenSubmit={addContact} />
      {contacts.length === 0 ? (
        <p>Please add contacts</p>
      ) : (
        <>
          <h2>Contacts</h2>
          <PhonebookFilter filteredContacts={filterContacts} />
          <Contacts
            contacts={filteredToLowCase}
            onDeleteButton={removeExistContact}
          />
        </>
      )}
    </>
  );
};

export default App;
