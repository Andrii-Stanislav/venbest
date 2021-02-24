import React from 'react';

import styles from './ContactItem.module.css';

export default function ContactItem({ name, lastname, age, sex }) {
  return (
    <div className={styles.contact}>
      <p className={styles.contactDetails}>
        {name} {lastname}
      </p>
      <p className={styles.contactDetails}>Возраст: {age}</p>
      <p className={styles.contactDetails}>
        Пол: {sex === 'm' ? 'мужской' : 'женский'}
      </p>
    </div>
  );
}
