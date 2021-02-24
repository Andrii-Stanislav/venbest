import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import styles from './ContactsList.module.css';
import fadeTransition from './fade.module.css';

import ContactItem from '../ContactItem';

export default function ContactsList({ contacts }) {
  return (
    <TransitionGroup appear={false} className={styles.contactsList}>
      {contacts.map(contact => (
        <CSSTransition
          key={`${contact.lastname}`}
          classNames={fadeTransition}
          timeout={250}
        >
          <ContactItem
            name={contact.name}
            lastname={contact.lastname}
            age={contact.age}
            sex={contact.sex}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}
