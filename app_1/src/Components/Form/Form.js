import React, { useState } from "react";
import styles from "../Form/Form.module.css";
import PropTypes from "prop-types";

const Form = ({ whenSubmit }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleName = (event) => {
    setName(event.currentTarget.value);
  };

  const handleValue = (event) => {
    setNumber(event.currentTarget.value);
  };

  const handleAddToPhonebook = (event) => {
    event.preventDefault();
    whenSubmit(name, number);
    setName("");
    setNumber("");
  };

  return (
    <div>
      <h1 className={styles.title}>Phonebook</h1>
      <form
        className={styles.form}
        name="phoneBook"
        onSubmit={handleAddToPhonebook}
      >
        <label className={styles.name}>
          Name
          <input
            className={styles.inputName}
            onChange={handleName}
            type="text"
            autoComplete="off"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label className={styles.number}>
          Number
          <input
            className={styles.input}
            onChange={handleValue}
            value={number}
            type="tel"
            name="number"
            autoComplete="off"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button className={styles.formButton} type="submit">
          Add contacts
        </button>
      </form>
    </div>
  );
};

export default Form;

Form.propTypes = { whenSubmit: PropTypes.func.isRequired };
