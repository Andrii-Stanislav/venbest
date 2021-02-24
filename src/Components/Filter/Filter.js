import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import filterSelectors from '../../redux/filter/filter-selectors';
import changeFilter from '../../redux/filter/filter-actions';

import styles from './Filter.module.css';

export default function Filter() {
  const name = useSelector(filterSelectors.getName);
  const lastName = useSelector(filterSelectors.getLastName);
  const age = useSelector(filterSelectors.getAge);
  const male = useSelector(filterSelectors.getMale);
  const female = useSelector(filterSelectors.getFemale);

  const dispatch = useDispatch();

  const onChange = event => {
    dispatch(changeFilter[event.target.name](event.target.value));
  };

  const onChangeCheckbox = event => {
    const { name, checked } = event.target;
    dispatch(changeFilter.sex({ [name]: checked }));
  };

  return (
    <div className={styles.container}>
      Filter
      <label className={styles.label}>
        Name:
        <input
          className={styles.input}
          type="text"
          name="name"
          value={name}
          onChange={onChange}
        />
      </label>
      <label className={styles.label}>
        Фамилия
        <input
          className={styles.input}
          type="text"
          name="lastName"
          value={lastName}
          onChange={onChange}
        />
      </label>
      <label className={styles.label}>
        Возраст
        <input
          className={styles.input}
          type="number"
          name="age"
          value={age}
          onChange={onChange}
        />
      </label>
      <div className={styles.label}>
        Пол:
        <label>
          М
          <input
            className={styles.input}
            type="checkbox"
            checked={male}
            name="male"
            onChange={onChangeCheckbox}
          />
        </label>
        <label>
          Ж
          <input
            className={styles.input}
            type="checkbox"
            checked={female}
            name="female"
            onChange={onChangeCheckbox}
          />
        </label>
      </div>
    </div>
  );
}
