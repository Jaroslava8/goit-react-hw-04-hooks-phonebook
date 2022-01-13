import React, { useState } from "react";
import propTypes from "prop-types";
import styles from "../Phonebook/PhonebookFilter.module.css";

const PhonebookFilter = ({ filteredContacts }) => {
  const [value, setValue] = useState("");

  const handleFilter = (e) => {
    setValue(e.currentTarget.value);
    filteredContacts(e.currentTarget.value);
  };

  return (
    <>
      <h2 className={styles.title}>Contacts</h2>
      <label className={styles.label}>
        Find contacts by name
        <input
          className={styles.input}
          onChange={handleFilter}
          value={value}
          type="text"
          name="filter"
          autoComplete="off"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          required
        />
      </label>
    </>
  );
};

export default PhonebookFilter;

PhonebookFilter.propTypes = {
  filter: propTypes.string.isRequired,
};
